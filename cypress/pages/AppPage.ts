/// <reference types="cypress" />

class AppPage {

    constructor() {} 
    // Visiting the page
    visit() {
        const siteURL = "https://www.afr.com/policy/foreign-affairs/capability-edge-and-keeping-south-china-sea-open-crucial--christopher-pyne-20180924-h15rq9";
        return cy.visit(siteURL, { failOnStatusCode: true, timeout: 40000 });
    }
    // checking the article headline
    articleHeadline() {
        return cy.get('[data-testid="ArticleHeader-headline"]');
    }
    // checking the subscription prompt pop up
    getActiveSubscriptionPrompt() {
        return cy.get('[data-testid="SubscriptionPrompt-true"]')
    }
    // Checking the subscription prompt pop up title
    getSubscriptionPromptTitle() {
        return cy.get('[data-testid="SubscriptionPrompt-title"]');
    }
    // Check if the subscription prompt disappears
    getInactiveSubscriptionPrompt() {
        return cy.get('[data-testid="SubscriptionPrompt-false"]')
    }
    //Getting page footer
    getPageFooter() {
        return cy.get("#footer");
    }
    // getting the sitemap link at the bottom of the page
    getSiteMapElement() {
        return cy.get('._27qNq');
    }
}

export default AppPage