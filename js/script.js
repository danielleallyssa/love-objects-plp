const productItems = document.querySelectorAll(".product-tile__item");

const lines = {
  h: document.querySelectorAll("section > .line.hor"),
  v: document.querySelectorAll(".product-tile__item .line.vert"),
};

// const start = gsap
//   .timeline({
//     defaults: { ease: "power4.out", duration: 0.75 },
//   })
//   .to(lines.h, {
//     width: "100%",
//   })
//   .to(lines.v, {
//     height: "100%",
//   })
//   .from(
//     "h2",
//     {
//       opacity: 0,
//       x: -20,
//     },
//     "<.5"
//   )
//   .call(initItem, null, "-=.75");

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
