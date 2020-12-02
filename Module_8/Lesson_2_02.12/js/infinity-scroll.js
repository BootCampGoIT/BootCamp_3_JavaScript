const obs = document.querySelector(".obs");
const obsWrapper = document.querySelector(".obs__wrapper");
// const images = document.querySelectorAll(".section img");

// console.dir(obsWrapper);

// obsWrapper.style.height += "100px";
// console.log(Number((obsWrapper.offsetHeight += "100px")));

const lazyLoad = (target) => {
  const options = {
    rootMargin: "30px 0px",
    threshold: 0.1,
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          
      }
    });
  }, options);

  io.observe(target);
};
lazyLoad(obs);
