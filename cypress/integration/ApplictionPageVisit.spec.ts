/// <reference types="cypress" />

import AppPage from '../pages/AppPage';

context('AppTest', () => {
    const appPage = new AppPage();
    beforeEach(() => {
        appPage.visit()
    })

    it('[01] Test: Visit the Page', () => {
        // Check Article Headline
         appPage.articleHeadline().should("have.text", "Capability edge and keeping South China Sea open crucial: Christopher Pyne ");
    })

    it('[02] Test: Subscription Prompt Visible', () => {
        // Check if Subscription Prompt is visible
        appPage.getActiveSubscriptionPrompt().should("be.visible");
        appPage.getSubscriptionPromptTitle().should("have.text","Save 50% for your first 3 months.");
    })

    it('[03] Test: Scroll to End of Page', () => {
        // wait 10 seconds for the pop-up window to close
        //cy.wait(10000);
        cy.scrollTo("bottom");
        // check if Footer is visible and Site Map link is there.
        appPage.getPageFooter().should("be.visible");
        appPage.getSiteMapElement().should("have.text", "Site Map")
    })

    it('[04] Test: Subscription Prompt not visible after 10 seconds ', () => {
        // wait 10 seconds for the pop-up window to close
        cy.wait(10000);
        // check if the data-testid value = SubscriptionPrompt-false
        appPage.getInactiveSubscriptionPrompt().should('be.visible');

    })
})