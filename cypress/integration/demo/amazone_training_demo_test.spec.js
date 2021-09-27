import HomePage from "../../support/demopageobjects/homepage"
import ProductDescriptionPage from "../../support/demopageobjects/productdescriptionpage"
import SearchResults from "../../support/demopageobjects/searchresultspage"

describe("amazone test suite for training",()=>{

    beforeEach(()=>{
        cy.visit("www.amazon.in")
    })
    
    it("demo test method for automation ",()=>{
        const home = new HomePage()
        home.assert_homepage()
        home.search_product("iphone")
        const search = new SearchResults()
        search.selectItem()
        const pdp =new ProductDescriptionPage()
        pdp.selectQuantityAndAddToCart("2")
         
          
    })



})