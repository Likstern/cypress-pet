/// <reference types="Cypress" />

/**
 * cy.request - создает http-запрос (куки автоматически отправлются и принимаются)
 * виды
 * cy.request(url)
 * cy.request(url, body)
 * cy.request(method, url)
 * cy.request(method, url, body)
 * cy.request(options)
 */

it('Example sending the GET request', () => {
    cy.request(Cypress.config().baseUrl).then((response) => console.log(response));
});

it('Example sending the POST request', () => {

    const requestBody =
        {
            "action": "info",
            "phone": "+380686979712",
            "amount": 1,
            "currency": "UAH",
            "cardCvv": "111",
            "card": "4552331448138217",
            "cardExp": "0524",
            "xref": "85d0974d5261b0a2cc675bb1288e7b67",
            "_": 1611477682544
        }

    const headersData = {
        Cookie: ' pubkey=58ace3145bf9e2c6eace09438b670323; _ga=GA1.2.336195215.1611477672;' +
            ' _gid=GA1.2.2113296797.1611477672; _gat_gtag_UA_29683426_11=1; fp=1; lfp=1/24/2021,' +
            ' 11:41:21 AM; pa=1611477681603.03830.017475141412303552next.privat24.ua0.04885590130566286+1'
    }

    cy.request({
        headers: headersData,
        method: 'POST',
        body: requestBody,
        url: Cypress.config().baseUrl + "/api/p24/pub/mobipay"
    }).then(response => {
        expect(response).to.have.property('status').equal(200);
        expect(response.body).to.have.property('status').equal('success');
        expect(response.body.data).to.have.property('amount').equal('1.0')
        console.log(response.body);
    });
});

it.only('Example sending the POST request with should', () => {

    const requestBody =
        {
            "action": "info",
            "phone": "+380686979712",
            "amount": 1,
            "currency": "UAH",
            "cardCvv": "111",
            "card": "4552331448138217",
            "cardExp": "0524",
            "xref": "85d0974d5261b0a2cc675bb1288e7b67",
            "_": 1611477682544
        }

    const headersData = {
        Cookie: ' pubkey=58ace3145bf9e2c6eace09438b670323; _ga=GA1.2.336195215.1611477672;' +
            ' _gid=GA1.2.2113296797.1611477672; _gat_gtag_UA_29683426_11=1; fp=1; lfp=1/24/2021,' +
            ' 11:41:21 AM; pa=1611477681603.03830.017475141412303552next.privat24.ua0.04885590130566286+1'
    }

    cy.request({
        headers: headersData,
        method: 'POST',
        body: requestBody,
        url: Cypress.config().baseUrl + "/api/p24/pub/mobipay"
    })
    .its('body').should('contain', {status: 'success'})
    .its('data').should('contain', {status: 'ok'})
});
