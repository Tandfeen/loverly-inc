describe("Dashboard", () => {
    beforeEach(() => {
      cy.visit("/dashboard")
    })
  
    it("displays the dashboard title", () => {
      cy.get("h1").should("contain", "Dashboard")
    })
  
    it("displays the app list", () => {
      cy.get(".horizontal-scroll").should("exist")
      cy.get(".horizontal-scroll").find("a").should("have.length.at.least", 1)
    })
  
    it("displays dashboard cards", () => {
      cy.get(".glassmorphism").should("have.length", 4)
      cy.contains("Total Matches").should("exist")
      cy.contains("Active Conversations").should("exist")
      cy.contains("Upcoming Dates").should("exist")
      cy.contains("Match Rate").should("exist")
    })
  
    it("displays the advanced chart", () => {
      cy.contains("Dating Activity Overview").should("exist")
      cy.get("button").contains("Matches").should("exist")
      cy.get("button").contains("Messages").should("exist")
      cy.get("button").contains("Dates").should("exist")
    })
  
    it("displays the dating coach section", () => {
      cy.contains("AI Dating Coach").should("exist")
      cy.get('input[placeholder="Ask for dating advice..."]').should("exist")
      cy.get("button").contains("Get Advice").should("exist")
    })
  
    it("displays recent activity", () => {
      cy.contains("Recent Activity").should("exist")
    })
  })
  
  