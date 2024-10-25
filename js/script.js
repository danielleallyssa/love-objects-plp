const productItems = document.querySelectorAll(".product-tile__item");
const gridHLines = document.querySelectorAll("section > .line.hor");
const gridVLines = document.querySelectorAll(".product-tile__item .line.vert");

const start = gsap.timeline({
  defaults: { ease: "power4.out", duration: 0.75 },
});

start
  .to(gridHLines, {
    width: "100%",
  })
  .to(gridVLines, {
    height: "100%",
  })
  .from(
    "header",
    {
      y: "-100%",
    },
    "<.125"
  )
  .from(
    "h2",
    {
      opacity: 0,
    },
    "<"
  );

productItems.forEach((item) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  const title = item.querySelector(".product-tile__title");
  const button = item.querySelector("a.btn");
  const revealBox = item.querySelectorAll(".reveal");
  const revealText = item.querySelectorAll(".reveal span");
  const img = document.querySelectorAll("img");

  tl.from(title, {
    opacity: 0,
    yPercent: 100,
    duration: 1,
  })
    .from(revealBox, {
      xPercent: -100,
      stagger: 0.1,
    })
    .from(revealText, {
      yPercent: 100,
      stagger: 0.1,
    })
    .fromTo(
      img,
      {
        autoAlpha: 0,
        scale: 0.95,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
      },
      "<.25"
    );

  // img.onload = () => {

  // };

  tl.play();

  console.log(button);
});
