describe('example to-do app', () => {
    beforeEach(() => {
      
///Para inciar os testes temos que acessar o site requisitado para assim então verificar os campos.
///Com esta linha de comando o cypress ja acessa automaticamente o site antes dos testes assim não preciso ficar abrindo-o todas as vezes
///É indicado para mais de um teste em uma mesma página.
///o BeforeEach significa nada menos do que um comando que irá ser executado anteriormente aos testes ou seja tudo que eu colocar aqui dentro será executado primeiro.
///Abaixo eu peço para o cypress 'visitar' o site que foi solicitado
        
      cy.visit('https://www-hml.jacto.com/brasil/contact')
    })
///Aqui eu solicito um preenchimento geral do formulario, para inputs dropdown utilizo o select e para inputs normais utilizo o type.
///Em alguns casos quando eu digito por exemplo o cpf(apenas digitei algum qualquer para testar mesmo) e no final solicito que o formulario seja enviado ele retorna até a pagina novamente-
///-pois o cpf socilitado é inexistente.
///Abaixo executo a função click para que os botões selecionados sejam devidamente pressionados.
///O get seria para 'pegar' as informações solicitadas nos comandos seguintes.
    it('formulario para testar', () => {
        cy.get(':nth-child(2) > :nth-child(1) > select').select('Quero saber sobre outros assuntos')
        cy.get(':nth-child(3) > :nth-child(1) > input').type('Geovanna Versati')
        cy.get(':nth-child(4) > :nth-child(1) > input').type('292.598.188.00')
        cy.get(':nth-child(5) > :nth-child(1) > select').select('Outros')
        cy.get(':nth-child(6) > :nth-child(1) > input').type('QA Tester')
        cy.get('.ui-input-email > :nth-child(1) > input').type('geovannaversati@gmail.com')
        cy.get(':nth-child(8) > :nth-child(1) > input').type('11998275095')
        cy.get('.ui-input-select.untouched > :nth-child(1) > select').select('Brasil')
        cy.get('.ui-input-select.empty > :nth-child(1) > select').select('São Paulo')
        cy.get('.ui-input-select.empty > :nth-child(1) > select').select('Pompéia')
        cy.get('textarea').type('Obrigada pela oportunidade, gosto muito da area de TI e de testes. Gostaria muito de trabalhar em sua empresa e aprender cada vez mais!Aprendo rápido e estou a disposição.')
        cy.get(':nth-child(13) > div > .ui-input-label > i').click()
        cy.get(':nth-child(14) > div > .ui-input-label > i').click()
        cy.get('.unchecked > div > .ui-input-label > i').click()
        cy.get('.n0dXEnEh7DUap1F5vWpC > .ui-button').click()

    })
});
