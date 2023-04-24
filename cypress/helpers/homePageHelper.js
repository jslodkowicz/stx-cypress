export class homePageHelper {

    static openHomePage() {
        cy.visit("https://www.stxnext.com/")
        // You can also use Cypress.env() ;)
    }
}