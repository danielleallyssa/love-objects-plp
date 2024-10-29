const productItems = document.querySelectorAll(".product-tile__item");

let main = gsap.timeline();

class App {
  constructor() {
    this.h_Line = document.querySelector("section > .line.hor");
    this.v_Lines = [
      ...document.querySelectorAll(".product-tile__item .line.vert"),
    ];
    this.revealConts = [
      ...document.querySelectorAll(".product-tile__item .reveal"),
    ];
    this.collTitle = document.querySelector("h2");
    this._init();
  }

  _init() {
    this._setInitialStates();

    let main = gsap.timeline();
    main.add(this._animateLines()).add(this._revealUI(), "<1");
  }

  _setInitialStates() {
    gsap.set(this.h_Line, {
      clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    });
    gsap.set(this.v_Lines, { height: 0 });
    gsap.set(this.revealConts, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.set(this.collTitle, {
      autoAlpha: 0,
      y: -10,
    });
  }

  _animateLines() {
    let tl = gsap.timeline({
      delay: 0.25,
      defaults: { ease: "power4.inOut", duration: 1 },
    });

    tl.to(this.h_Line, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    })
      .to(this.v_Lines, { height: "100%" }, "<")
      .to(
        this.revealConts,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        "-=.75"
      );

    return tl;
  }

  _revealUI() {
    const tl = gsap.timeline();

    tl.to(this.collTitle, {
      autoAlpha: 1,
      y: 0,
    });

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
//       .fromTo(
//         itemEl.title,
//         {
//           autoAlpha: 0,
//           y: 20,
//         },
//         {
//           autoAlpha: 1,
//           y: 0,
//         },
//         "<.33"
//       )
//       .from(
//         itemEl.reveal,
//         {
//           xPercent: -100,
//           stagger: 0.1,
//         },
//         "<"
//       )
//       .from(
//         itemEl.revealText,
//         {
//           yPercent: 100,
//           stagger: 0.1,
//         },
//         "<.5"
//       )
//       .fromTo(
//         itemEl.link,
//         {
//           autoAlpha: 0,
//           y: 50,
//         },
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1,
//         },
//         "-=.25"
//       );

//     tl.play();
//   });
// }
