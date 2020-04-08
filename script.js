const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; //the plus sign will turn the string into an integer

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  //const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  //localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//Seat Click event
container.addEventListener("click", (e) => {
  if (
    //console.log(e.target); this will log every element/item the mouse clicks on!
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected"); //this will turn the seats blue due to the 'selected' class

    updateSelectedCount();
  }
});
