// Demo Code
// --------------------------------------------------------

// const controlsLink = document.querySelector(".controls");
// controlsLink.addEventListener("click", function () {
//   document.querySelector(".pic-rail").style.animationName = "none";
// });

// const hoverFontChange = function (hoverElement, changingElement) {
//   hoverElement.addEventListener("mouseover", function () {
//     changingElement.style.fontSize = "45px";
//   });

//   hoverElement.addEventListener("mouseout", function () {
//     changingElement.style.fontSize = "34px";
//   });
// };

// const basicButton = document.querySelector(".basic-order");
// const planColOne = document.querySelector(".js-col-1");
// hoverFontChange(basicButton, planColOne);

// const standardButton = document.querySelector(".standard-order");
// const planColTwo = document.querySelector(".js-col-2");
// hoverFontChange(standardButton, planColTwo);

// const premiumButton = document.querySelector(".premium-order");
// const planColThree = document.querySelector(".js-col-3");
// hoverFontChange(premiumButton, planColThree);

// --------------------------------------------------------

function toCamelCase(str) {
  let firstWord = str.split(/[-,_]/)[0];
  let output = str
    .split(/[-,_]/)
    .slice(1)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");

  return firstWord + output;
}

console.log(toCamelCase("Jello-my-name-is-Howard"));
