/// <reference types="cypress" />
const dados = require('../../../fixtures/apiDados.json');
const token = require('../../../fixtures/apiLogin.json');


it('Deve listar todos os cupons', () => {           
    cy.request({
        method: 'GET', 
        url: dados.urlApi, 
        failOnStatusCode: false
    }).then(response => {
        expect(response.status).to.equal(401)
        expect(response.body.message).to.contain("Sem permissão para listar recursos.")       
    })    
})

it('Buscar cupom por id', () => {           
    cy.request({
        method: 'GET', 
        url: dados.urlListaCupons, 
        headers: {authorization: token.auth}
    }).then(response => {
        expect(response.status).to.equal(200)
        expect([response.body]).to.be.instanceOf(Array)        
    })    
})

it('Deve cadastrar cupom com sucesso', () => {
    var novoCupom = `Coupon ${Math.floor(Math.random() * 10000)}`           
    cy.request({
        method: 'POST', 
        url: dados.urlApi,
        headers: {authorization: token.auth}, 
        body: 
        {
            "code": novoCupom,
            "amount": '10',
            "discount_type": "fixed_product",
            "description": "Cupom de desconto de teste"
          }
    }).then(response => {
        expect(response.status).to.equal(201)        
        expect([response.body]).to.be.instanceOf(Array)         
    })    
})

it('Deve conferir cupom invalido', () => {
    cy.request({
        method: 'GET', 
        url: dados.urlCupomInvalido,
        headers: {authorization: token.auth},
        failOnStatusCode: false         
    }).then(response => {
        expect(response.status).to.equal(404)
        expect(response.body.message).to.contain("ID inválido.")        
    }) 
})

it('Deve validar cupom já existente', () => {                  
   cy.request({
        method: 'Post',
        url: dados.urlApi,
        headers: {authorization: token.auth},
        body:
        {
            "code": dados.codigo,
            "amount": '10',
            "discount_type": "fixed_product",
            "description": "Cupom de desconto de teste"
        },
        failOnStatusCode: false  
   }).then(response => {
        expect(response.status).to.equal(400)
        expect(response.body.message).to.contain("O código de cupom já existe")
   })
})

it('Deve deletar cupom existente', () => {    
    
    cy.cadastrarCupom(dados.urlApi,token.auth)
    .then(response => {
        let itemId = dados.urlApi + response.body.id;
        cy.request({
            method: 'Delete',
            url: itemId,            
            headers: {authorization: token.auth},
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.equal(501)
            expect(response.body.message).to.equal("shop_coupon não tem suporte a lixeira.")
       })
    })

})