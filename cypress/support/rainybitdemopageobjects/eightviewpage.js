class HomeEight{
    button_sort="button[onclick]"
    table_heading="p"
    table_row="tr"
    getRow(){
        return cy.get(this.table_row)
    }
    getTableHeading(){
        return cy.get(this.table_heading)
    }

    assert_homepageeight(){ 
        //checking the upload heading visible
        this.getTableHeading().eq(5).should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of   list
        this.getRow().should("be.visible")
        cy.log("rows was displayed")
        //checking contains in row1
        //this.getRow().eq(0).should('contains','Company').should('contains','Contact').should('contains','Country')
        this.getRow().eq(0).contains('Company')
        this.getRow().eq(0).contains('Contact')
        this.getRow().eq(0).contains('Country')
        cy.log("first row was displayed")
        //checking contains in row1
        //this.getRow().eq(1).should('contains','Alfreds Futterkiste').should('contains','Maria Anders').should('contains','Germany')
        this.getRow().eq(1).contains('Alfreds Futterkiste')
        this.getRow().eq(1).contains('Maria Anders')
        this.getRow().eq(1).contains('Germany')
        cy.log("2nd row was displayed")
        //checking contains in row1
        //this.getRow().eq(2).should('contains','Centro comercial Moctezuma').should('contains','Francisco Chang').should('contains','Mexico')
        this.getRow().eq(2).contains('Centro comercial Moctezuma')
        this.getRow().eq(2).contains('Francisco Chang')
        this.getRow().eq(2).contains('Mexico')
        cy.log("3rd row was displayed")
        //checking contains in row1
        //this.getRow().eq(3).should('contains','Ernst Handel').should('contains','Roland Mendel').should('contains','Austria')
        this.getRow().eq(3).contains('Ernst Handel')
        this.getRow().eq(3).contains('Roland Mendel')
        this.getRow().eq(3).contains('Austria')
        cy.log("4th row was displayed")
        //checking contains in row1
        //this.getRow().eq(4).should('contains','Island Trading').should('contains','Helen Bennett').should('contains','UK')
        this.getRow().eq(4).contains('Island Trading')
        this.getRow().eq(4).contains('Helen Bennett')
        this.getRow().eq(4).contains('UK')
        cy.log("5th row was displayed")
        //checking contains in row1
        //this.getRow().eq(5).should('contains','Laughing Bacchus Winecellars').should('contains','Yoshi Tannamuri').should('contains','Canada')
        this.getRow().eq(5).contains('Laughing Bacchus Winecellars')
        this.getRow().eq(5).contains('Yoshi Tannamuri')
        this.getRow().eq(5).contains('Canada')
        cy.log("6th row was displayed")
        //checking contains in row1
        //this.getRow().eq(6).should('contains','Magazzini Alimentari Riuniti').should('contains','Giovanni Rovelli').should('contains','	Italy')
        this.getRow().eq(6).contains('Magazzini Alimentari Riuniti')
        this.getRow().eq(6).contains('Giovanni Rovelli')
        this.getRow().eq(6).contains('Italy')
        cy.log("last row was displayed")
        
         
    }

}
export default HomeEight