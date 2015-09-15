describe('Movie', function() {
  it("creates a new movie with a list of times it plays", function() {
    var testMovie = new Movie("Pulp Fiction", ["12", "2", "5", "11"]);
    expect(testMovie.title).to.equal("Pulp Fiction");
    expect(testMovie.times).to.eql(["12", "2", "5", "11"]);
  });
});
