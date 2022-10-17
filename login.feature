 #language: pt

            Funcionalidade: Tela de login
            Como aluno do Portal Ebac
            Quero fazer login na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu acesse o portal de identificação da Ebac

            Cenário: Autenticação válida
            Quando eu digitar "joao@ebac.com.br"
            E a senha "senha@123"
            Então exibir página: "Minha Conta"

            Cenário: Usuário inexistente 
            Quando eu digitar "zxyzxy@ebac.com.br"
            E a senha "senha@123"
            Então exibir mensagem de alerta: "Endereço de e-mail desconhecido."

            Cenário: Senha incorreta 
            Quando eu digitar "joao@ebac.com.br"
            E a senha "senhaIncorreta"
            Então exibir alerta de Erro: "A senha fornecida para o e-mail joao@ebac.com.br está incorreta."

            Esquema do Cenário: Autenticação de multiplos usuarios
            Quando eu digitar <usuário>
            E <senha>
            Então deve emitir <mensagem>

            Exemplos:

            | usuário                 | senha       | mensagem         |
            | "joao@ebac.com.br"      | "teste@123" | "Olá João!"      |
            | "maria@ebac.com.br"     | "teste@123" | "Olá Maria!"     |
            | "jose@ebac.com.br"      | "teste@123" | "Olá José!"      |
            | "priscilla@ebac.com.br" | "teste@123" | "Olá Priscilla!" |