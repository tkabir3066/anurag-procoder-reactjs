let totalApples = 10;
const firstBasket = document.querySelector(".basket1 span");
const secondBasket = document.querySelector(".basket2 span");
const leftArrowBtn = document.querySelector(".left-arrow");
const rightArrowBtn = document.querySelector(".right-arrow");

firstBasket.innerText = totalApples;

let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;
leftArrowBtn.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount--;
    secondBasket.innerText = secondBasketAppleCount;
  }
});
rightArrowBtn.addEventListener("click", () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount;
  }
});
