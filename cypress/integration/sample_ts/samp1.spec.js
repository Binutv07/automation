describe("Rainybits quality enginerring training", () => {
    it("search and submit", () => {
        //let searchstring = "Test";
        //launch application
        cy.visit("Rainybits_Training.html");
        cy.log("Application launched successfully");
        //search box displayed or  not
        cy.get("#searchbar").should("be.visible");
        cy.log("search box displayed");
        cy.get("#searchbar").should("be.enabled");
        cy.log("seach box is enabled");
        //check the placeholder in the search box
        //cy.get("#searchbar").should("attr","placeholder").and("contains","Search..");
        cy.get("#searchbar").should("be.enabled").and("have.attr","placeholder","Search..");
        cy.log("place holder displayed");
        cy.get("#searchbar").clear();
        // enter search keyword
        cy.SearchFunc("Test");
        //submit button should be visible - hard assertion
        cy.get("#submitbtn").should("be.visible").should("be.enabled");
        cy.log("submit button displayed");
        //click on submit button
        cy.get("#submitbtn").click();
        cy.log("clicked on the submit button");
    })
})