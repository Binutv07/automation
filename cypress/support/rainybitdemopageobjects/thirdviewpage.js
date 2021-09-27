class HomeThree{
    radio_heading="p"
    status_male="input[value=male]"
    status_female="input[value=female]"
    statsu_other="input[value=other]"
    getRadioHeading(){
        return cy.get(this.radio_heading)
    }
    getStatusMale(){
        return cy.get(this.status_male)
    }
    getStatusFemale(){
        return cy.get(this.status_female)
    }
    getStatusOther(){
        return cy.get(this.statsu_other)
    }



    assert_Radiobutton(){ 
        //checking heading is visible
        this.getRadioHeading().first().should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of  gender male radio button
        this.getStatusFemale().should("be.visible").and("be.enabled")
        cy.log("button was displayed")
        // checking visibility of gender female radio  button
        this.getStatusFemale().should("be.visible").and("be.enabled")
        cy.log("radio button was displayed")
        //checking visibility of gender other radio  button
        this.getStatusOther().should("be.visible").and("be.enabled")
        cy.log("radio button was displayed")
    }

    select_homethree(){
        //click on radio male button
        this.getStatusMale().click()
        cy.log("button selected")
        //click on radio female button
        this.getStatusFemale().click()
        cy.log("button selected")
        //click on radio button
        this.getStatusOther().click()
        cy.log("button selected")
    }

}
export default HomeThree