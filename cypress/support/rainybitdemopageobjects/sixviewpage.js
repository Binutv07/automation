class HomeSix{
    dropdown_heading="p"
    //drop_omni="option[value='next']"
    //drop_sedaru="option[value='omni']"
    //drop_outage="option[value='outage']"
    //drop_cip="option[value='cip']"
    //drop_ops="option[value='ops']"
    //drop_studio="option[value='studio']"
    drop_omni="select"
    drop_sedaru="select"
    drop_outage="select"
    drop_cip="select"
    drop_ops="select"
    drop_studio="select"
    getDropDownHeading(){
        return cy.get(this.dropdown_heading)
    }
    getDropDownOmni(){
        return cy.get(this.drop_omni)
    }
    getDropDownSedaruOmni(){
        return cy.get(this.drop_sedaru)
    }
    getDropDownOutage(){
        return cy.get(this.drop_outage)
    }
    getDropDownCip(){
        return cy.get(this.drop_cip)
    }
    getDropDownOps(){
        return cy.get(this.drop_ops)
    }
    getDropDownStudio(){
        return cy.get(this.drop_studio)
    }
    


    assert_homepagesix(){ 
        //checking heading is visible
        this.getDropDownHeading().eq(3).should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of  dropdown
        this.getDropDownOmni().select('OMNI NEXT').should("be.visible").and("be.enabled")
        cy.log("button was displayed")
        //click on select
        this.getDropDownOmni().select('OMNI NEXT')
        cy.log("omni next was displed in dropdown ")
         //checking visiblity of  dropdown
        this.getDropDownSedaruOmni().select('SEDARU OMNI').should("be.visible").and("be.enabled")
        cy.log("button was displayed")
         //click on select
        this.getDropDownSedaruOmni().select('SEDARU OMNI')
        cy.log("omni next was displed in dropdown ")
          //checking visiblity of  dropdown
        this.getDropDownOutage().select('SEDARU OUTAGE').should("be.visible").and("be.enabled")
        cy.log("button was displayed")
        //click on select
        this.getDropDownOutage().select('SEDARU OUTAGE')
        cy.log("omni next was displed in dropdown ")
         //checking visiblity of  dropdown
        this.getDropDownCip().select('SEDARU CIP').should("be.visible").and("be.enabled")
        cy.log("button was displayed")
         //click on select
        this.getDropDownCip().select('SEDARU CIP')
        cy.log("omni next was displed in dropdown ")
          //checking visiblity of  dropdown
        this.getDropDownOps().select('SEDARU OPS').should("be.visible").and("be.enabled")
        cy.log("button was displayed")
        //click on select
        this.getDropDownOps().select('SEDARU OPS')
        cy.log("omni next was displed in dropdown ")
         //checking visiblity of  dropdown
        this.getDropDownStudio().select('SEDARU STUDIO').should("be.visible").and("be.enabled")
        cy.log("button was displayed")
         //click on select
        this.getDropDownStudio().select('SEDARU STUDIO')
        cy.log("omni next was displed in dropdown ")
      
    }

}
export default HomeSix