const productItems = document.querySelectorAll(".product-tile__item");
const gridVLines = document.querySelectorAll(".product-tile__item .line.vert");

// const start = gsap.timeline({ defaults: { ease: "power4.out" } });

start.add([
  gsap.to(gridVLines, {
    height: "100%",
  }),
]);

productItems.forEach((item) => {
  // const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  const title = item.querySelector(".product-tile__title");
  const button = item.querySelector("a.btn");
  const revealBox = item.querySelectorAll(".reveal");
  const revealText = item.querySelectorAll(".reveal span");

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
    });

  tl.play();

  console.log(button);
});
