class HomeFive{
    myfile="input#myFile"
    upload_heading="p"
    getMyFile(){
        return cy.get(this.myfile)
    }
    getUploadHeading(){
        return cy.get(this.upload_heading)
    }



    assert_homepagefive(){ 
        //checking the upload heading visible
        this.getUploadHeading().eq(2).should("be.visible")
        cy.log("heading was displayed")
        //checking visiblity of   button
        this.getMyFile().should("be.visible")
        cy.log("button was displayed")
        this.getMyFile().click()
        cy.log("button clicked")  
    }
    upload_file1(){
        //fileupld = "#myFile"
    
        //cy.get(this.myfile().should("be.visible").and("be.enabled")
        cy.log("Upload button was visible and enabled")
        const filepath = 'images\image.jpg'
        cy.get(this.fileupld).attachFile(filepath)
        cy.log("uploaded file successfully");

       
    }

}
export default HomeFive