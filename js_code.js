const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const popUp = document.getElementById("pop_up");
openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
});
closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

const openPopUp1 = document.getElementById("open_pop_up1");
const closePopUp1 = document.getElementById("pop_up_close1");
const popUp1 = document.getElementById("pop_up1");
openPopUp1.addEventListener("click", function (e) {
  e.preventDefault();
  popUp1.classList.add("active");
});
closePopUp1.addEventListener("click", () => {
  popUp1.classList.remove("active");
});

const openPopUp2 = document.getElementById("open_pop_up2");
const closePopUp2 = document.getElementById("pop_up_close2");
const popUp2 = document.getElementById("pop_up2");
openPopUp2.addEventListener("click", function (e) {
  e.preventDefault();
  popUp2.classList.add("active");
});
closePopUp2.addEventListener("click", () => {
  popUp2.classList.remove("active");
});

const openPopUp3 = document.getElementById("open_pop_up3");
const closePopUp3 = document.getElementById("pop_up_close3");
const popUp3 = document.getElementById("pop_up3");
openPopUp3.addEventListener("click", function (e) {
  e.preventDefault();
  popUp3.classList.add("active");
});
closePopUp3.addEventListener("click", () => {
  popUp3.classList.remove("active");
});
