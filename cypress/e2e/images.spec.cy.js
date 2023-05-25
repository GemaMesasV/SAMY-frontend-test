/// <reference types="Cypress" />
describe("images spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });
  it("user visit the webpage", () => {
    cy.scrollTo("bottom");
    cy.scrollTo("top");
    cy.get("#card > :nth-child(1)").should("exist");
  });
});
