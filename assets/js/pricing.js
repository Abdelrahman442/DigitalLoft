document.getElementById("planToggle").addEventListener("change", function () {
  var yearlyPlans = document.getElementById("yearlyPlans");
  var monthlyPlans = document.getElementById("monthlyPlans");

  if (this.checked) {
    yearlyPlans.classList.remove("active");
    monthlyPlans.classList.add("active");
  } else {
    monthlyPlans.classList.remove("active");
    yearlyPlans.classList.add("active");
  }
});
