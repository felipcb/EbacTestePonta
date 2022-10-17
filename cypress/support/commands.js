Cypress.Commands.add('login', (email, senha) => {
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
})

Cypress.Commands.add('selecionarProduto', (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629').click()
    cy.get('.product-block').contains(produto).click()
    cy.get(tamanho).click()
    cy.get(cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button')
    
})

Cypress.Commands.add('fecharCompra', (nome, sobrenome, cidade, estado, endereco, cep, tel) => {
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').type(estado)
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').type(tel)
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')


})