function Movie(title, times) {
  this.title = title;
  this.times = times;
};

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

Ticket.prototype.cost = function() {
  var total = 0
  if (this.time < 5) {
    total += 5;
  }
  else {
    total += 10;
  };

  if (this.age === "Senior") {
    total -= 2;
  }

  else if (this.age === "Child") {
    total -= 3;
  };

  return total;
};

var newMovie = new Movie("Miss America", [1, 2, 5, 7, 12])
var newMovie2 = new Movie("Things Change", [3, 4, 6, 10])
var newMovie3 = new Movie("All About My Mother", [2, 3, 4, 6])
var newMovie4 = new Movie("Henry Fool", [1, 3, 6])
var newMovie5 = new Movie("Dead Man", [1, 4, 8])
