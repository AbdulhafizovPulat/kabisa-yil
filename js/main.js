const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elText = document.querySelector("#info");

function leapYear(number) {
  if (number % 4 == 0) {
    if (number % 100 == 0) {
      if (number % 400 == 0) {
        elText.textContent = "Kabisa yil";
      } else {
        elText.textContent = "Kabisa yil emas";
      }
    } else {
      elText.textContent = "Kabisa yil";
    }
  } else {
    elText.textContent = "Kabisa yil emas";
  }
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const year = Number(elInput.value);

  leapYear(year);
  elForm.reset();
});
