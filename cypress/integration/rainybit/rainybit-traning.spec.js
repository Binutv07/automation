describe("rainybit quality engineering traing",() =>{
    it("search and submit",() =>{
        //let searchstring="testing";
        //launch html file
        cy.visit("Rainybits_Training.html");
        cy.log("launched the html file sucessfully");
        console.log("application launched sucessfully");
        //location search bar visible
        cy.get("#searchbar").should("be.visible");
        cy.log("search bar is visible");
        //checking search bar is enable
        cy.get("#searchbar").should("be.enabled");
        cy.log("search field is enabled");
        //checking placeholder in search bar
        cy.get("#searchbar").should("be.enabled").and("have.attr","placeholder","Search..");
        cy.log("placeholder displayed");
        //verify that search bar is cleared
        cy.get("#searchbar").clear();
        cy.log("search bar is cleared");
        //enter input in search field _(reusability under support)
        //cy.get("#searchbar").type("searchstring");
        //verify if enterd field is displayed in the search field
        //cy.get("#searchbar").should("have.value", "searchstring");
        //cy.log("entered keybord displed in the search box");
        //submit button should be visible -hard assertion
        cy.search("hi");
        cy.get("#searchbar").clear();
        cy.search("this a test case");
        cy.get("#searchbar").clear();
        cy.search("h_123ag");
        cy.get("#searchbar").clear();
        cy.search("1234567890");
        cy.get("#searchbar").clear();
        //checking submit btn visible and enabled
        cy.get("#submitbtn").should("be.visible").and("be.enabled");
        cy.log("submit button displayed");
        //check for submit button enable
        //cy.get("#submitbtn").should("be.enabled");
        cy.log("submit button is enabled")
        //click on submit button
        cy.get("#submitbtn").click();
        cy.log("click on submit button");
        //verify that button is disappeard after click
        //cy.get('button.close').click().should("not.exist");
        cy.get("#submitbtn").should("not.exist");
        cy.log("button is disapperd");
    })
    
})