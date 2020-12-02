const arr = [1, 2, 3];
const result = arr.forEach((item, index, arr) => console.log(item));

const lazyLoad = (target) => {
  const options = {
    rootMargin: "30px 0px",
    threshold: 0.1,
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageURL = img.dataset.lazy;
        // img.setAttribute("src", imageURL);
        img.src = imageURL;
        img.classList.add("fade-in");

        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll(".section img");
images.forEach((image) => lazyLoad(image));
