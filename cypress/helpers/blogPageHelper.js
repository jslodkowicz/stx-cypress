export class blogPageHelper {

    static openHomePage() {
        cy.visit("https://www.stxnext.com/blog")
    }

    static searchInput(searchInput) {
        cy.get('input[id="newSearchId"]').type(searchInput+"{enter}")
    }

    static  searchOutput(counter) {
        cy.get('div[id="newPopupSearch"]').find('div[class="postItemBInr"]').should('have.lengthOf', counter)
        cy.get('div[id="newPopupSearch"]').then(() => {
            cy.get('div[class="postItemTitle equalTitle"]').invoke('text').then(text => {
                this.blogPageVariables.TitlesFromSearch.push(text);
            })
            cy.log("List of titles from search")
            cy.log(this.blogPageVariables.TitlesFromSearch)
        })
    }

    static blogPageVariables = {
        TitlesFromSearch:[]
    }
}