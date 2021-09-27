class HomeFourth{
    checkbox_heading="p"
    status_omninext="input[value='OMNI NEXT']"
    status_sedaruomni="input[value='SEDARU OMNI']"
    statsu_outage="input[value='SEDARU OUTAGE']"
    statsu_cip="input[value='SEDARU CIP']"
    getCheckBoxHeading(){
        return cy.get(this.checkbox_heading)
    }
    getOmninext(){
        return cy.get(this.status_omninext)
    }
    getSedaruomni(){
        return cy.get(this.status_sedaruomni)
    }
    getOutage(){
        return cy.get(this.statsu_outage)
    }
    getCip(){
        return cy.get(this.statsu_cip)
    }



    assert_homepagefour(){ 
        //checking heading is visible
        this.getCheckBoxHeading().eq(1).should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of   button
        this.getOmninext().should("be.visible").and("be.enabled")
        cy.log("button was displayed")
        
        // checking visibility of  button
        this.getSedaruomni().should("be.visible").and("be.enabled")
        cy.log("radio button was displayed")
       
        //checking visibility of   button
        this.getOutage().should("be.visible").and("be.enabled")
        cy.log("radio button was displayed")
        //checking visibility of   button
        this.getCip().should("be.visible").and("be.enabled")
        cy.log("radio button was displayed")
      
    }
    select_homefour(){
        //click on button
        this.getOmninext().first().click()
        cy.log("button selected")
         //click on button
         this.getSedaruomni().click()
         cy.log("button selected")
         //click on button
        this.getOutage().click()
        cy.log("button selected")
          //click on button
          this.getCip().last().click()
          cy.log("button selected")

    }

}
export default HomeFourth