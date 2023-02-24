/// reference types = "Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { addOrganization } from "../page_objects/addOrganization";

describe("create new organization",() => {
    before("visit app and click create new oganization",() => {
        cy.intercept({
            method : "GET",
            url: Cypress.env("baseUrl") +"/my-organizations"
        }).as("myOrg");

        cy.login();
        cy.visit("/");
        cy.wait("@myOrg").then((interception) => {
            expect(interception.response.statusCode).eq(200);
        })
    })
    it("create new organization",() => {
        cy.visit("/my-organization")

    })
})