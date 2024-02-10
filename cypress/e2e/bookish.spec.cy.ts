import { makeServer } from "../../src/server";

const host = "http://localhost:5173/";

describe("Bookish application", function () {
  let server;
  // before(() => {
  //   // axios.delete("/api/books");
  //   server = makeServer({ environment: "test" });
  // });

  afterEach(() => {
    server.shutdown();
  });

  beforeEach(() => {
    server = makeServer({ environment: "test" });

    try {
      server.create("book", { name: "Refactoring", id: 1 });
      server.create("book", { id: 2, name: "Domain-driven design" });
      server.create("book", { id: 3, name: "Building Microservices" });
    } catch (e) {
      console.log(e);
    }
  });

  it("Visits the bookish", function () {
    cy.visit(host);
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });

  it("Show a book list", () => {
    cy.visit(host);
    cy.get('div[data-test="book-list"]').should("exist");
    // cy.get("div.book-item").should("have.length", 2);
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);
      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);

      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
      ]);
    });
  });
});
