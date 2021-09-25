/// <reference types="cypress" />

import AppPage from '../pages/AppPage';

context('AppTest', () => {
    const appPage = new AppPage();
    beforeEach(() => {
        appPage.visit()
    })

    it('[01] Test: Visit the Page', () => {
        // Check Article Headline
        appPage.articleHeadline().should("have.text", "Capability edge and keeping South China Sea open crucial: Christopher Pyne ").screenshot("test1_page-heading");

    })

    it('[02] Test: Subscription Prompt Visible', () => {
        // Check if Subscription Prompt is visible

        const element = appPage.getActiveSubscriptionPrompt()
        element.should("exist") && element.should("be.visible").screenshot("test2_prompt_visible");
        appPage.getSubscriptionPromptTitle().should("have.text", "Save 50% for your first 3 months.")

    })

    it('[03] Test: Scroll to End of Page', () => {
        // wait 10 seconds for the pop-up window to close
        //cy.wait(10000);
        cy.scrollTo("bottom");
        // check if Footer is visible and Site Map link is there.
        appPage.getPageFooter().should("be.visible").screenshot("test3_page-bottom");
        appPage.getSiteMapElement().should("have.text", "Site Map")

    })

    it('[04] Test: Subscription Prompt not visible after 10 seconds ', () => {
        // wait 10 seconds for the pop-up window to close
        cy.screenshot('test4_1_prompt-disapper-prompt-available')
        cy.wait(10000);
        cy.screenshot('test4_2_prompt-disapper-prompt-not-available')
        // check if the data-testid value = SubscriptionPrompt-false
        appPage.getInactiveSubscriptionPrompt().should("exist")

    })
})