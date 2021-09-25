/// <reference types="cypress" />

import AppPage from '../pages/AppPage';

context('AppTest', () => {
    const appPage = new AppPage();
    beforeEach(() => {
        appPage.visit()
    })

    it('[01] Visit the Page on the site', () => {
        // beforeEach always visits the site.
        appPage.currentURL().then(url => {
            url == "https://www.afr.com/policy/foreign-affairs/capability-edge-and-keeping-south-china-sea-open-crucial--christopher-pyne-20180924-h15rq9";

        })
    })
})