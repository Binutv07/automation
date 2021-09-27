class ProductDescriptionPage{
    quantity_dropdown="select#quantity"
    addToCart_button="input#add-to-cart-button" 

    getQty(){
        return cy.get(this.quantity_dropdown)
    }
    getAddToCart(){
        return cy.get(this.addToCart_button)
    }
    selectQuantityAndAddToCart(qty){
        this.getQty().should("be.visible").and("be.enabled")
        cy.log("Qty was enabled and displayed")
        this.getQty().select(qty).should("value",qty)
        cy.log("selected qty was correctly on the product description page")
        this.getAddToCart().should("be.visible").and("be.enabled")
        cy.log("add to cardt button was enabled and displayed on the product description page")
        this.getAddToCart().click()
    }
     

}
export default ProductDescriptionPage