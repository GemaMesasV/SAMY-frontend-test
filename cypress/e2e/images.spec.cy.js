/// <reference types="Cypress" />
describe("images spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });
  it("user visits the webpage", () => {
    cy.scrollTo("bottom");
    cy.scrollTo("top");
    cy.get("#card > :nth-child(1)").should("exist");
  });
  it("user likes an image", () => {
    cy.get(":nth-child(1) > #likeNumber").then(($likeNumber) => {
      const previousLikes = parseInt($likeNumber.text());

      cy.get(":nth-child(1) > #likeIcon").click();

      cy.get(":nth-child(1) > #likeNumber").should(($newLikeNumber) => {
        const newLikes = parseInt($newLikeNumber.text());
        expect(newLikes).to.equal(previousLikes + 1);
      });
    });
  });
  it("user unlikes an image", () => {
    cy.get(":nth-child(2) > #likeNumber").then(($likeNumber) => {
      const previousLikes = parseInt($likeNumber.text());

      cy.get(":nth-child(2) > #likeIcon").click();

      cy.get(":nth-child(2) > #likeNumber").should(($newLikeNumber) => {
        const newLikes = parseInt($newLikeNumber.text());
        expect(newLikes).to.equal(previousLikes - 1);
      });
    });
  });
  it("user does a search", () => {
    cy.get("#searchInput").type("Grey beach");
    cy.get("#searchInput").type("{enter}");
    cy.get(".main__cards--item--title").contains("Grey beach");
  });
  it("user does a search and goes to home", () => {
    cy.get("#searchInput").type("Grey beach");
    cy.get("#searchInput").type("{enter}");
    cy.get(".main__cards--item--title").contains("Grey beach");
    cy.get("#headerLogo").click();
    cy.get(":nth-child(15)").should("exist");
  });
});