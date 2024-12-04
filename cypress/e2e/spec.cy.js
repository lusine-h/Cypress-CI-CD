describe('Tests for integrating with CI/CD',()=>{
  it('Mystnodes login for intercept', () => {
    cy.visit('https://dev.mystnodes.com/login');

    // Set up intercept before triggering the login action
    cy.intercept('POST', 'https://dev.mystnodes.com/api/v2/auth/login').as('loginIntercept');

    // Perform the login action
    cy.get('[name=email]').type('lusine+apidev@mysterium.network',{force:true});
    cy.get('[name=password]').type('testAccount4321*',{force:true});
    cy.get('[type=submit]').click({force:true});

    // Wait for the intercept and optionally assert the response
    cy.wait('@loginIntercept')
  });


})
