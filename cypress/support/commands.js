// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!')
  })

 Cypress.Commands.add('search',(searchstring)=>{
    cy.get("#searchbar").type(searchstring);
    //verify if enterd field is displayed in the search field
    cy.get("#searchbar").should("have.value", searchstring);
    cy.log("entered keybord displed in the search box");
 })

import 'cypress-file-upload'