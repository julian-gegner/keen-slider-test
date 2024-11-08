import KeenSlider from "keen-slider";

window.addEventListener("load", () => {
  const sliderElement = document.querySelector(".keen-slider");

  const slider = new KeenSlider(
    sliderElement,
    {
      mode: "free-snap",
      loop: true,
      slides: { perView: 2, spacing: 10 },
      created: (instance) => {
        console.log(instance);
      },
    },
    [
      (slider) => {
        document
          .querySelector(".prev")
          .addEventListener("click", () => slider.prev());
        document
          .querySelector(".next")
          .addEventListener("click", () => slider.next());
      },
    ]
  );
});
