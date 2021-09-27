class SearchResults{
    results_link="a.a-link-normal.a-text-normal"

    getResults(){
        return cy.get(this.results_link)

    }

    selectItem(){
        this.getResults().should("be.visible")
        //modifying the behaviour of app opening the selected item new in same window
        this.getResults().first().invoke("removeAttr","target").click()
        cy.log("selected item first ietem in the result page")
    }

}
export default SearchResults