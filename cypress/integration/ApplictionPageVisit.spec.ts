/// <reference types="cypress" />

import AppPage from '../pages/AppPage';

context('AppTest', () => {
    const appPage = new AppPage();
    beforeEach(() => {
        appPage.visit()
    })

    it('[01] Visit the Page', () => {
        // Check Article Headline
         appPage.articleHeadline().should("have.text", "Capability edge and keeping South China Sea open crucial: Christopher Pyne ");
    })

    it('[02] Check Subscription Prompt Visible', () => {
        // Check if Subscription Prompt is visible
        appPage.getActivePopup().should("be.visible");
        appPage.getSubscriptionPromptTitle().should("have.text","Save 50% for your first 3 months.");
    })

    it('[03] Scroll to End of Page', () => {
        // wait 10 seconds for the pop-up window to close
        cy.wait(10000);
        cy.scrollTo("bottom");
        appPage.getPageFooter().should("be.visible");
        appPage.getSiteMapElement().should("have.text", "Site Map")
    })
})