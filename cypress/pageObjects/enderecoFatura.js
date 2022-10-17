class EnderecoPage {
    editarEnderecoFaturamento(nome, sobrenome, endereco, cidade, estado, cep, tel) {
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').type(estado)
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(tel)
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }   
}

export default new EnderecoPage()







        // cy.get('#billing_first_name').click().type(nome)
        // cy.get('#billing_last_name').type(sobrenome)    
        // cy.get('#billing_company').clear().type(empresa)
        // cy.get('#select2-billing_country-container').click().type(pais + '{enter}')        
        // cy.get('#billing_address_1').clear().type(endereco)
        // cy.get('#billing_address_2').clear().type(numero)
        // cy.get('#billing_city').clear().type(cidade)
        // cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        // cy.get('#billing_postcode').clear().type(cep)
        // cy.get('#billing_phone').clear().type(telefone)
        // cy.get('.button').click()