describe("Bookish application", function () {
  it("Visits the bookish", function () {
    cy.visit("http://localhost:5173/");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });
});
