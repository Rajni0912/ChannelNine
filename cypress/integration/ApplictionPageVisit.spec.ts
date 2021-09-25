/// <reference types="cypress" />

import AppPage from '../pages/AppPage';

context('AppTest', () => {
    const appPage = new AppPage();
    beforeEach(() => {
        appPage.visit()
    })

    it('[01] Visit the Page', () => {
        // Check Article Headline
         appPage.pageHeader().should("have.text", "Capability edge and keeping South China Sea open crucial: Christopher Pyne ");
    })
})