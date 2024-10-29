gsap.registerPlugin(GSDevTools);
let main = gsap.timeline();

class App {
  constructor() {
    this.elements = this._getElements();
    this._init();
  }

  _getElements() {
    return {
      h_Line: document.querySelector("section > .line.hor"),
      v_Lines: [...document.querySelectorAll(".product-tile__item .line.vert")],
      revealConts: [
        ...document.querySelectorAll(".product-tile__item .reveal"),
      ],
      collTitle: document.querySelector("h2"),
      prodTitle: [...document.querySelectorAll("h3.product-tile__title")],
      prodDetails: [
        ...document.querySelectorAll(".product-tile__item .reveal span"),
      ],
      prodLinks: [...document.querySelectorAll("a.btn")],
    };
  }

  _init() {
    this._setInitialStates();

    let main = gsap.timeline();
    main.add(this._animateLines()).add(this._revealUI(), "<1");
    GSDevTools.create({ animation: main });
  }

  _setInitialStates() {
    gsap.set(this.elements.h_Line, {
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    });
    gsap.set(this.elements.v_Lines, { height: 0 });
    gsap.set(this.elements.revealConts, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.set(
      [
        this.elements.collTitle,
        this.elements.prodTitle,
        this.elements.prodLinks,
      ],
      {
        autoAlpha: 0,
        y: -10,
      }
    );
    gsap.set(this.elements.prodDetails, {
      y: "105%",
    });
  }

  _animateLines() {
    let tl = gsap.timeline({
      delay: 0.25,
      defaults: { ease: "power4.inOut", duration: 1 },
    });

    tl.to(this.elements.h_Line, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    })
      .to(this.elements.v_Lines, { height: "100%" }, "<")
      .to(
        this.elements.revealConts,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.025,
        },
        "-=.9"
      );

    return tl;
  }

  _revealUI() {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.to(
      [
        this.elements.collTitle,
        this.elements.prodTitle,
        this.elements.prodLinks,
      ],
      {
        autoAlpha: 1,
        y: 0,
      }
    ).to(
      this.elements.prodDetails,
      {
        y: 0,
        stagger: 0.025,
      },
      "<.5"
    );

    return tl;
  }
}

new App();

// function initItem() {
//   productItems.forEach((item) => {
//     const itemEl = {
//       contentWrap: item.querySelector(".product-tile__content-wrapper"),
//       imageWrap: item.querySelector(".product-tile__image-wrapper"),
//       title: item.querySelector(".product-tile__title"),
//       link: item.querySelector("a.btn"),
//       reveal: item.querySelectorAll(".reveal"),
//       revealText: item.querySelectorAll(".reveal span"),
//       img: document.querySelectorAll("img"),
//     };

//     const tl = gsap
//       .timeline({
//         defaults: { ease: "power4.out" },
//         paused: true,
//       })
//       .to(itemEl.contentWrap, {
//         autoAlpha: 1,
//         duration: 0.25,
//       })
//       .to(
//         itemEl.imageWrap,
//         {
//           autoAlpha: 1,
//         },
//         "<"
//       )
//       .fromTo(
//         itemEl.img,
//         {
//           autoAlpha: 0,
//           y: 50,
//         },
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1,
//         },
//         "<.25"
//       )
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1,
//         },
//         "-=.25"
//       );
