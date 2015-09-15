describe('Movie', function() {
  it("creates a new movie with a list of times it plays", function() {
    var testMovie = new Movie("Pulp Fiction", [1, 2, 5, 11]);
    expect(testMovie.title).to.equal("Pulp Fiction");
    expect(testMovie.times).to.eql([1, 2, 5, 11]);
  });
});

describe('Ticket', function() {
  it("creates a new ticket associated with specific movie", function() {
    var testTicket = new Ticket("Pulp Fiction", 5, "Adult");
    expect(testTicket.movie).to.equal("Pulp Fiction");
    expect(testTicket.time).to.equal(5);
    expect(testTicket.age).to.equal("Adult");
  });

  it("calculate the cost of a ticket based on the ticket", function() {
    var testTicket = new Ticket("Pulp Fiction", 5, "Adult");
    expect(testTicket.cost()).to.equal(10);
  });
});
