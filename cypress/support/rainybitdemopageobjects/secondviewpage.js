class HomeTwo{
    conf_box="#btnConfirm"
    button_alert="#btnAlert"
    show_promt="#btnPrompt"
    new_window_link="a#lnkNewWindow"
    open_nameless_window="#btnNewNamelessWindow"
    open_named_window="#btnNewNamedWindow"
    getConfBox(){
        return cy.get(this.conf_box)
    }
    getButtonAlert(){
        return cy.get(this.button_alert)
    }
    getShowPromt(){
        return cy.get(this.show_promt)
    }
    getNewWindowLink(){
        return cy.get(this.new_window_link)
    }
    getOpenNamelessWindow(){
        return cy.get(this.open_nameless_window)
    }
    getOpenNamedWindow(){
        return cy.get(this.open_named_window)
    }

    assert_popups_links(){ 
        //checking confo box is visible and enabled
        this.getConfBox().should("be.enabled")
        cy.log("confo box was displayed")
        //checking visiblity of show alert button
        this.getButtonAlert().should("be.visible").and("be.enabled")
        cy.log("show alert button was displayed")
        // checking visibility of show prompt button 
        this.getShowPromt().should("be.visible").and("be.enabled")
        cy.log("show promt button was enabled and dispalyed")
         //checking new link is visible
         this.getNewWindowLink().should("be.visible")
         cy.log("new link  was displayed")
         //checking visiblity of open nameless window button
         this.getOpenNamelessWindow().should("be.visible").and("be.enabled")
         cy.log("nameless window button was displayed")
         // checking visibility of nmaed window button 
         this.getOpenNamedWindow().should("be.visible").and("be.enabled")
         cy.log("show named window  button was enabled and dispalyed")
    
    }

    select_hometwo(){
        //click on show confirm button
        this.getConfBox().click();
        cy.on('window:confirm')
        //click on show alert button
        this.getButtonAlert().click()
        //click on show promt button
        this.getShowPromt().click()
        //click on new window link 
        this.getNewWindowLink().click()
        //modifying the behaviour of app opening the selected item new in same window
        this.getNewWindowLink().first().invoke("removeAttr","target").click()
        cy.log("selected new window opened result page")
        /*
        //click on open nameless window button
        this.getOpenNamelessWindow().click()
        //modifying the behaviour of app opening the selected item new in same window
        this.getOpenNamelessWindow().first().invoke("removeAttr","onclick").click()
        cy.log("selected nameless window opened in the result page")
         //click on open named window button
         this.getOpenNamedWindow().click()
         //modifying the behaviour of app opening the selected item new in same window
         this.getOpenNamedWindow().first().invoke("removeAttr","onclick").click()
         cy.log("selected named window opened in the result page")
         */
    }
    
    select_hometwo_one(){
        //click on open nameless window button
        this.getOpenNamelessWindow().click()
        //modifying the behaviour of app opening the selected item new in same window
        this.getOpenNamelessWindow().first().invoke("removeAttr","onclick").click()
        cy.log("selected nameless window opened in the result page")
    }
    select_hometwo_two(){
        //click on open named window button
        this.getOpenNamedWindow().click()
        //modifying the behaviour of app opening the selected item new in same window
        this.getOpenNamedWindow().first().invoke("removeAttr","onclick").click()
        cy.log("selected named window opened in the result page")

    }
    
}
export default HomeTwo