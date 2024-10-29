gsap.registerPlugin(GSDevTools);
let main = gsap.timeline();

class App {
  constructor() {
    this.elements = this._getElements();
    this._init();
  }

  _getElements() {
    return {
      hLine: document.querySelector("section > .line.hor"),
      vLines: [...document.querySelectorAll(".product-tile__item .line.vert")],
      revealConts: [
        ...document.querySelectorAll(".product-tile__item .reveal"),
      ],
      collTitle: document.querySelector("h2"),
      prodTitles: [...document.querySelectorAll("h3.product-tile__title")],
      prodDetails: [
        ...document.querySelectorAll(".product-tile__item .reveal span"),
      ],
      prodLinks: [...document.querySelectorAll("a.btn")],
      prodImages: [
        ...document.querySelectorAll(".product-tile__image-wrapper img"),
      ],
      header: document.querySelector("header"),
    };
  }

  _init() {
    this._setInitialStates();

    gsap.timeline().add(this._animateHeaderLines()).add(this._revealUI(), "<1");

    // GSDevTools.create({ animation: main });
  }

  _setInitialStates() {
    const {
      prodTitles,
      prodLinks,
      prodImages,
      prodDetails,
      collTitle,
      hLine,
      vLines,
      revealConts,
      header,
    } = this.elements;

    gsap.set(header, { y: "-105%" });
    gsap.set(hLine, {
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    });
    gsap.set(vLines, { height: 0 });
    gsap.set(revealConts, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.set(collTitle, {
      autoAlpha: 0,
      y: -10,
    });
    gsap.set([prodTitles, prodLinks], {
      opacity: 0,
      y: "100%",
    });
    gsap.set([prodImages], {
      opacity: 0,
      y: "10%",
    });
    gsap.set(prodDetails, {
      y: "105%",
    });
  }

  _animateHeaderLines() {
    const { hLine, vLines, revealConts, header } = this.elements;
    let tl = gsap.timeline({
      delay: 0.25,
      defaults: { ease: "power4.inOut", duration: 1 },
    });

    tl.to(header, { y: 0 })
      .to(
        hLine,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        "<.05"
      )
      .to(vLines, { height: "100%" }, "<")
      .to(
        revealConts,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.025,
        },
        "-=.9"
      );

    return tl;
  }

  _revealUI() {
    const { prodTitles, prodLinks, prodImages, prodDetails, collTitle } =
      this.elements;
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.75 },
    });
    tl.to([prodTitles, prodLinks, prodImages], {
      opacity: 1,
      y: 0,
    })
      .to(
        prodDetails,
        {
          y: 0,
          delay: 0.1,
        },
        "<"
      )
      .to(
        [collTitle],
        {
          autoAlpha: 1,
          y: 0,
        },
        "-=.25"
      );

    return tl;
  }
}

new App();
