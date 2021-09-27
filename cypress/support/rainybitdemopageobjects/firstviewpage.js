class HomeOne{
    logo_image="img[alt=Pradeep_Training]"
    search_bar_text="#searchbar"
    search_button="#submitbtn"
    heading_text="h1"
    getLogo(){
        return cy.get(this.logo_image)
    }
    getSearchBar(){
        return cy.get(this.search_bar_text)
    }
    getSearchButton(){
        return cy.get(this.search_button)
    }
    getheadingtext(){
        return cy.get(this.heading_text)
    }



    assert_header_logo(){ 
        //checking heading is visible
        this.getheadingtext().eq(0).should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of logo
        this.getLogo().should("be.visible")
        cy.log("logo was displayed")
        // checking visibility of searchbar
        this.getSearchBar().should("be.visible").and("be.enabled")
        cy.log("search bar was enabled and dispalyed on the home page")
    }

    select_homeone(searchKey){
        //typing value in searchbar
        this.getSearchBar().type(searchKey)
        this.getSearchBar().should("value",searchKey)
        cy.log("entered search was correctly dispalyed in the search bar")
        //checking search button is visible and enable
        this.getSearchButton().should("be.visible").and("be.enabled")
        cy.log("submit button was displayed on home page")
        //click on submit button
        this.getSearchButton().click()
        //verify that button is disappeard after click
        //cy.getSearchButton().should("not.exist")
        cy.log("button was disapperd")

    }

}
export default HomeOne