class AddOrganization{

    get addNewOrg(){
        return cy.get(".vs-c-my-organization-item-wrapper")
    };
    get newOrgWindow(){
        return cy.get(".vs-c-modal")
    }
    get nameInput(){
        return cy.get("input[type='text']")
    }
    get nextBtn(){
        return cy.get("button[name='next_btn']")
    }
    get cancelBtn(){
        return cy.get("button[name='prev_btn']")
    }
    get createBtn(){
        return cy.get("button").find().last()
    }

    addOrg(nameInput,nextBtn,createBtn){
        this.newOrgWindow.click(),
        this.nameInput.type(nameInput),
        this.nextBtn.click(),
        this.createBtn.click()
    }
}
export const addOrganization = new AddOrganization()