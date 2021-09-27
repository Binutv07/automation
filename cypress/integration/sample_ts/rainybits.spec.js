import HomeEight from "../../support/rainybitdemopageobjects/eightviewpage"
import HomeOne from "../../support/rainybitdemopageobjects/firstviewpage"
import HomeFive from "../../support/rainybitdemopageobjects/fiveviewpage"
import HomeFourth from "../../support/rainybitdemopageobjects/fourthviewpage"
import HomeNine from "../../support/rainybitdemopageobjects/nineviewpage"
import HomeTwo from "../../support/rainybitdemopageobjects/secondviewpage"
import HomeSeven from "../../support/rainybitdemopageobjects/sevenviewpage"
import HomeSix from "../../support/rainybitdemopageobjects/sixviewpage"
import HomeThree from "../../support/rainybitdemopageobjects/thirdviewpage"

describe("rainybits training test suite",()=>{
    beforeEach(()=>{
        cy.visit("Rainybits_training.html")
        cy.log("launched the html file sucessfully")
    })
    it("demo test method for home one",()=>{
        const home = new HomeOne()
        home.assert_header_logo()
        home.select_homeone("testing")

    })
    it.skip("demo test method for home two",()=>{
        const homet = new HomeTwo()
        homet.assert_popups_links()
        homet.select_hometwo()
        //homet.select_hometwo_one()
        //homet.select_hometwo_two()


    })
    it("demo test method for home three",()=>{
        const hometr = new HomeThree()
        hometr.assert_Radiobutton()
        hometr.select_homethree()


    })
    it("demo test method for home four",()=>{
        const hometf = new HomeFourth()
        hometf.assert_homepagefour()
        hometf.select_homefour()
    })
    it.skip("demo test method for home five",()=>{
        const homefi = new HomeFive()
        homefi.assert_homepagefive()
        homefi.upload_file1()
    })
    it("demo test method for home Six",()=>{
        const homesi = new HomeSix()
        homesi.assert_homepagesix()
    })
    it("demo test method for home Seven",()=>{
        const homese = new HomeSeven()
        homese.assert_homepageseven()
        homese.assert_sort()
    })
    it("demo test method for home Eight",()=>{
        const homeei = new HomeEight()
        homeei.assert_homepageeight()
    })
    it("demo test method for home Nine",()=>{
        const homeni = new HomeNine()
        homeni.assert_homepagenine()
        homeni.assert_last()
    })
    /*
    it('File Upload using cypress-file-upload', () => {
        myfile="input#myFile"
        upload_file(){
        cy.get(this.myfile).should("be.visible")
        const filepath = 'images/image.jpg'
        cy.get(this.myfile).attachFile(filepath)
        cy.get(this.myfile).click()
        cy.get(this.myfile).contains('evening.png')
        }
        
    })
    */
    
})