/// <reference types="cypress" />

describe('Funcionalida Pagina de produtos', () => {

  it('', () => {
    cy.visit('/');
    cy.login('joao@ebac.com.br', 'senha@123');

    cy.selecionarProduto('Ajax Full-Zip Sweatshirt','.button-variable-item-XS', '.button-variable-item-Red','1');
    cy.selecionarProduto('Arcadio Gym Short','.button-variable-item-32', '.button-variable-item-Red','1');
    cy.selecionarProduto('Argus All-Weather Tank','.button-variable-item-L', '.button-variable-item-Gray','1');

    cy.fecharCompra('Joao', 'Carneiro', 'Brasilia','Distrito Federal', 'Setor de Autarquias, Quadra 01', '70070900', '61 99626-4588');

  });

});
