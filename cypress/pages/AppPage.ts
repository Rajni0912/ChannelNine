/// <reference types="cypress" />

class AppPage {

    constructor() {

    }
    visit() {
        const siteURL = "https://www.afr.com/policy/foreign-affairs/capability-edge-and-keeping-south-china-sea-open-crucial--christopher-pyne-20180924-h15rq9";
        return cy.visit(siteURL, { failOnStatusCode: true, timeout: 40000 });
    }

    articleHeadline() {
        return cy.get('[data-testid="ArticleHeader-headline"]');
    }

    getActivePopup() {
        return cy.get('[data-testid="SubscriptionPrompt-true"]');
    }

    getSubscriptionPromptTitle() {
        return cy.get('[data-testid="SubscriptionPrompt-title"]');
    }
    getInactivePopup() {
        return cy.get('[data-testid="SubscriptionPrompt-false"]');
    }

    getPageFooter() {
        return cy.get("#footer");
    }
    getSiteMapElement() {
        return cy.get('._27qNq');
    }
}

export default AppPage