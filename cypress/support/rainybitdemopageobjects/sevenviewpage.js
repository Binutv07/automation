class HomeSeven{
    button_sort="button[onclick]"
    sort_heading="p"
    list_sort="li"
    getButtonSort(){
        return cy.get(this.button_sort)
    }
    getSortHeading(){
        return cy.get(this.sort_heading)
    }
    getListSort(){
        return cy.get(this.list_sort)
    }



    assert_homepageseven(){ 
        //checking the upload heading visible
        this.getSortHeading().eq(4).should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of   list
        this.getListSort().should("be.visible")
        cy.log("list was displayed")
        //cjhecking contains in list
        this.getListSort().contains('Berlin')
        cy.log("berlin displayed")
         //cjhecking contains in list
         this.getListSort().contains('Helsinki')
         cy.log("Helsinki displayed")
          //cjhecking contains in list
        this.getListSort().contains('Madrid')
        cy.log("Medrid displayed")
         //cjhecking contains in list
         this.getListSort().contains('Oslo')
         cy.log("Oslo displayed")
          //cjhecking contains in list
        this.getListSort().contains('Rome')
        cy.log("Rome displayed")
         //cjhecking contains in list
         this.getListSort().contains('Stockholm')
         cy.log("Stockholm displayed")
         
    }
    assert_sort(){
        //verify the sort button
        this.getButtonSort().should("be.visible")
        cy.log("button was displayed")
        //click to sort
        this.getButtonSort().click()
        cy.log("list was soerted")
        

    }

}
export default HomeSeven