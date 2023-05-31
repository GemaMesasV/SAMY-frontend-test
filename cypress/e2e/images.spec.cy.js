/// <reference types="Cypress" />
describe("images spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });
  it("user visits the webpage", () => {
    cy.get(".infinite-scroll-component > :nth-child(1)").should("exist");
    cy.get(".infinite-scroll-component > :nth-child(7)").should("not.exist");
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.get(".infinite-scroll-component > :nth-child(7)").should("exist");
    cy.scrollTo("top");
  });
  it("user likes an image", () => {
    cy.get(":nth-child(1) > .card__footer > .card__like > #likeNumber").then(
      ($likeNumber) => {
        const previousLikes = parseInt($likeNumber.text());

        cy.get(
          ":nth-child(1) > .card__footer > .card__like > #likeIcon"
        ).click();

        cy.get(
          ":nth-child(1) > .card__footer > .card__like > #likeNumber"
        ).should(($newLikeNumber) => {
          const newLikes = parseInt($newLikeNumber.text());
          expect(newLikes).to.equal(previousLikes + 1);
        });
      }
    );
  });
  it("user unlikes an image", () => {
    cy.get(":nth-child(2) > .card__footer > .card__like > #likeNumber").then(
      ($likeNumber) => {
        const previousLikes = parseInt($likeNumber.text());

        cy.get(
          ":nth-child(2) > .card__footer > .card__like > #likeIcon"
        ).click();

        cy.get(
          ":nth-child(2) > .card__footer > .card__like > #likeNumber"
        ).should(($newLikeNumber) => {
          const newLikes = parseInt($newLikeNumber.text());
          expect(newLikes).to.equal(previousLikes - 1);
        });
      }
    );
  });
  it("user does a search", () => {
    cy.get("#searchInput").type("Grey beach");
    cy.get("#searchInput").type("{enter}");
    cy.get(".card").contains("Grey beach");
  });
  it("user does a search and goes to home", () => {
    cy.get("#searchInput").type("Grey beach");
    cy.get("#searchInput").type("{enter}");
    cy.get(".card").contains("Grey beach");
    cy.get("#headerLogo").click();
    cy.get(":nth-child(15)").should("exist");
  });
});
