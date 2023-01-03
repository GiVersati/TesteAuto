
    it('api request', () => {
    cy.request({
        method: 'POST',
        url: 'https://www-hml.jacto.com/api/v1/messages',
        auth: {
            bearer: window.sessionStorage.getItem('auth_token')
        },
        body: {
    city: "Marília",
    cnpj_cpf: "999.999.999-99",
    country: "BR",
    email: "email@email.com"
        },
        timeout: 120000,
        failOnStatusCode: false
    }).then((resp) => {
        if (!(resp.isOkStatusCode || (ignoreIfExists && resp.body === IGNORED_ERROR_MSG))) {
            const EXCEPTION_MSG = 'Exception when creating planning session'
            console.error(EXCEPTION_MSG + ':\n' + JSON.stringify(resp))
            throw new Error(EXCEPTION_MSG + '.\nCode: ' + JSON.stringify(resp.status) + '\nMessage:' + JSON.stringify(resp.body))
        }
    })
    })