/// <reference types="cypress" />
   
class AppPage {
      constructor() { }
    visit() {
        const SITE_URL = "https://www.afr.com/policy/foreign-affairs/capability-edge-and-keeping-south-china-sea-open-crucial--christopher-pyne-20180924-h15rq9";

        return cy.visit(SITE_URL, { failOnStatusCode: false, timeout: 10000 });
    }

    currentURL(){
        return cy.url();
    }

    getActivePopup(){
        
    }
    getInactivePopup(){

    }
}

export default AppPage