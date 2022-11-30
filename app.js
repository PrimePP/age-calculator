const container = new Date();
// const error;
console.log(container);

//selecting elements
const inputD = document.querySelector("#dob");
const setyear = document.getElementById("years");
const setmonth = document.getElementById("months");
const setdays = document.getElementById("days");
const btn = document.getElementById("s-btn");

//gets the data from the input field
function getAge() {
  console.log(inputD.value);
  const arr = inputD.value.split("-");
  const birthYear = arr[0];
  calcAge(birthYear);
}
//calculates the age
function calcAge(year) {
  const currentAgeYear = Number(container.getFullYear()) - year;
  console.log("Age", currentAgeYear);
  const currentMonth = container.getMonth();
  const currentDate = container.getDate();
    displayAge(currentAgeYear,currentMonth,currentDate);
}
//inserts the content into HTMl
function displayAge(year,month,days) {
    setyear.textContent = year;
    setmonth.textContent = month;
    setdays.textContent = days;
}

//click the button to perform functions
btn.addEventListener("click", getAge);
