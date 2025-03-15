// Variables
let ratings = document.querySelectorAll(".jsRating");
let submit = document.querySelector(".jsSubmit");
let componentInitial = document.querySelector(".jsComponentInitial");
let componentSubmitted = document.querySelector(".jsComponentSubmitted");
let selectedRating = document.querySelector(".jsSelectedRating");
let warning = document.querySelector(".jsWarning");

// Adds styling to selected rating, submit button either displays new component and inserts rating or displays warning that times out if rating is unselected
let chosenRating;
let timeout;
let timeoutActive = false;
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((rating) => {
      rating.classList.remove("active");
      rating.classList.add("hover");
    });
    rating.classList.add("active");
    rating.classList.remove("hover");
    chosenRating = rating.textContent;
  });

  submit.addEventListener("click", () => {
    if (chosenRating) {
      componentInitial.classList.add("hidden");
      componentSubmitted.classList.remove("hidden");
      selectedRating.textContent = chosenRating;
    } else {
      if (!timeoutActive) {
        timeoutActive = true;
        warning.classList.add("warning-visible");
        timeout = setTimeout(() => {
          warning.classList.remove("warning-visible");
          timeoutActive = false;
        }, 2000);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          warning.classList.remove("warning-visible");
          timeoutActive = false;
        }, 2000);
      }
    }
  });
});
