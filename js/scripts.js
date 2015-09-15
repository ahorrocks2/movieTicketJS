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


$(document).ready(function() {
    $("#new-movie").append('<option value= "Miss America">' + "Miss America" + '</option>' +
                            '<option value= "Things CHange">' + "Things Change" +'</option>' +
                            '<option value= "All About My Mother">' + "All About My Mother" + '</option>' +
                            '<option value= "Henry Fool">' + "Henry Fool" + '</option>' +
                            '<option value= "Dead Man">' + "Dead Man" + '</option>');


    $("#new-time").append('<option value= 1>' + 1 + "pm" + '</option>' +
                          '<option value= 2>' + 2 + "pm" + '</option>' +
                          '<option value= 5>' + 5 + "pm" + '</option>' +
                          '<option value= 7>' + 7 + "pm" + '</option>' +
                          '<option value= 9>' + 9 + "pm" + '</option>');


    $("#new-age").append('<option value= "Child">' + "Child" + '</option>' +
                          '<option value= "Adult">' + "Adult" + '</option>' +
                          '<option value= "Senior">' + "Senior" + '</option>');


  $("form#newTicket").submit(function(event) {
    event.preventDefault();

    var movie = $("#new-movie").val();
    var time = $("#new-time").val();
    var age = $("#new-age").val();

    var newTicket = new Ticket(movie, time, age);
    var cost = newTicket.cost();

    $("div#cost").append("<h1>" + newTicket.movie + "</h1>" +
                         "<p>" + "Movie Time: " + newTicket.time + "pm" + "</p>" +
                         "<p>" + "Cost: " + "$" + cost + "</p>");
  });
});
