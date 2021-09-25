/// <reference types="cypress" />

class AppPage {
    
    constructor() {
        
     }
    visit() {
        const siteURL =  "https://www.afr.com/policy/foreign-affairs/capability-edge-and-keeping-south-china-sea-open-crucial--christopher-pyne-20180924-h15rq9";
        return cy.visit(siteURL, { failOnStatusCode: true, timeout: 40000 });
    }

    articleHeadline() {

        return cy.get('[data-testid="ArticleHeader-headline"]')
        
    }

    getActivePopup() {

    }
    getInactivePopup() {

    }
}

export default AppPage