export class homePageHelper {

    static openHomePage() {
        cy.visit("https://www.stxnext.com/")
        // You can also use Cypress.env() it would be useful in cross-environment context ;)
    }

    static clickOnHeaderItem (name) {
        cy.get('a[role="menuitem"]').contains(name).click()
        // If the language of the site changes, the test may fail. If the markup included data-ctx, it would make things easier
    }
}