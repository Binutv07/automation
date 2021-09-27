class HomePage{
    logo_image="#nav-logo-sprites"
    search_bar_text="#twotabsearchtextbox"
    search_button="#nav-search-submit-button"
    getLogo(){
        return cy.get(this.logo_image)
    }
    getSearchBar(){
        return cy.get(this.search_bar_text)
    }
    getSearchButton(){
        return cy.get(this.search_button)
    }


    assert_homepage(){ 
        this.getLogo().should("be.visible")
        cy.log("logo was displayed")
        this.getSearchBar().should("be.visible").and("be.enabled")
        cy.log("search bar was enabled and dispalyed on the home page")
    }

    search_product(searchKey){
        this.getSearchBar().type(searchKey)
        this.getSearchBar().should("value",searchKey)
        cy.log("entered search was correctly dispalyed in the search bar")
        this.getSearchButton().should("be.visible").and("be.enabled")
        cy.log("search button was displayed on home page")
        this.getSearchButton().click()

    }

}
export default HomePage