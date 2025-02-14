describe("Addons Page", () => {
    beforeEach(() => {
      cy.visit("/dashboard/addons")
    })
  
    it("displays the addons page title", () => {
      cy.get("h1").should("contain", "Addons")
    })
  
    it("displays addon categories", () => {
      cy.get("button").contains("All").should("exist")
      cy.get("button").contains("AI").should("exist")
      cy.get("button").contains("App").should("exist")
      cy.get("button").contains("Feature").should("exist")
    })
  
    it("displays addon cards", () => {
      cy.get(".card").should("have.length.at.least", 1)
    })
  
    it("allows toggling addon installation", () => {
      cy.get(".card")
        .first()
        .within(() => {
          cy.get("button").contains("Install").click()
          cy.get("button").contains("Uninstall").should("exist")
        })
    })
  
    it("allows toggling addon activation", () => {
      cy.get(".card")
        .first()
        .within(() => {
          cy.get("button").contains("Install").click()
          cy.get('input[type="checkbox"]').check()
          cy.get('input[type="checkbox"]').should("be.checked")
        })
    })
  })
  
  