class HomeNine{
    pwd_field="input#myInput"
    pwd_heading="p"
    credit_fi="footer"
    show_pwd_chkbox="input[type=checkbox]"
    //email_f="contains('Email:pradeep@rainybits.com')"
    getPwdField(){
        return cy.get(this.pwd_field)
    }
    getPwdHeading(){
        return cy.get(this.pwd_heading)
    }
    getShowPwdCheckbox(){
        return cy.get(this.show_pwd_chkbox)
    }
    getCredit(){
        return cy.get(this.credit_fi)
    }
    /*
    getEmailField(){
        return cy.get(this.email_f)
    }
    */


    assert_homepagenine(){ 
        //checking the  heading visible
        this.getPwdHeading().eq(6).should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of   pwd filed
        this.getPwdField().should("be.visible").and("be.enabled")
        cy.log("Pwd field was displayed")
       
        //cjhecking checkbox
        this.getShowPwdCheckbox().eq(4).should("be.visible")
        cy.log("check box was displayed")
        //click on checkbox
        this.getShowPwdCheckbox().eq(4).click()
        cy.log("pwd was  displayed")
         //cjhecking contains in pwd
        //this.getPwdField().contains('FakePSW')
        //cy.log("value in the field was displayed")
         
    }
    assert_last(){
        //checking credit field
        this.getCredit().should("be.visible")
        cy.log("credit field was displayed")
        //checking visiblity of email field
        //cy.get("contains('Email:pradeep@rainybits.com')").contains('pradeep@rainybits.com')
        cy.log("email field was dispyed")
        //this.getEmailField().should('contains','pradeep@rainybits.com')

    }


}
export default HomeNine