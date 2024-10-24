// import { tns } from "tiny-slider";

const tinyslider = () => {
  const el = document.querySelectorAll(".testimonial-slider");

  if (el.length > 0) {
    // let slider = tns({
    //   container: ".testimonial-slider",
    //   items: 1,
    //   axis: "horizontal",
    //   controlsContainer: "#testimonial-nav",
    //   swipeAngle: false,
    //   speed: 700,
    //   nav: true,
    //   controls: true,
    //   autoplay: true,
    //   autoplayHoverPause: true,
    //   autoplayTimeout: 3500,
    //   autoplayButtonOutput: false,
    // });
  }
};

const sitePlusMinus = function () {
  //   const quantity = document.getElementsByClassName("quantity-container");
  //   let value;
  //   function createBindings(quantityContainer: unknown) {
  //     // let quantityAmount =
  //     //   quantityContainer.getElementsByClassName("quantity-amount")[0];
  //     // const increase = quantityContainer.getElementsByClassName("increase")[0];
  //     // const decrease = quantityContainer.getElementsByClassName("decrease")[0];
  //     // increase.addEventListener("click", function (e: unknown) {
  //     //   increaseValue(e, quantityAmount);
  //     // });
  //     // decrease.addEventListener("click", function (e) {
  //     //   decreaseValue(e, quantityAmount);
  //     // });
  //   }
  //   function init() {
  //     for (let i = 0; i < quantity.length; i++) {
  //       createBindings(quantity[i]);
  //     }
  //   }
  //   function increaseValue(event: any, quantityAmount: any) {
  //     value = parseInt(quantityAmount.value, 10);
  //     console.log(quantityAmount, quantityAmount.value);
  //     value = isNaN(value) ? 0 : value;
  //     value++;
  //     quantityAmount.value = value;
  //   }
  //   function decreaseValue(event: any, quantityAmount: any) {
  //     value = parseInt(quantityAmount.value, 10);
  //     value = isNaN(value) ? 0 : value;
  //     if (value > 0) value--;
  //     quantityAmount.value = value;
  //   }
  //   init();
};

export { tinyslider, sitePlusMinus };
