describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons update and display on the running total', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '1234567890')
  })

  it('arithmetical operations updates the display with the result of the operation', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click()
    cy.get('#number2').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
  })
  
it('can multiple operations be chained together', () => {
  cy.get('#number6').click();
  cy.get('#operator-divide').click()
  cy.get('#number2').click();
  cy.get('#operator-multiply').click()
  cy.get('#number5').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '15')
  })

  it('are negative numbers correct', () => {
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number4').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2')
    })

    it('are decimal numbers correct', () => {
      cy.get('#number3').click()
      cy.get('#operator-divide').click()
      cy.get('#number2').click();
      cy.get('#operator-equals').click()
      cy.get('.display').should('contain', '1.5')
      })

    it('are very large numbers correct', () => {
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#operator-multiply').click()
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#number9').click();
      cy.get('#operator-equals').click()
    })

    it('should display Error when a number is divided by 0', () => {
      cy.get('#number9').click();
      cy.get('#operator-divide').click()
      cy.get('#number0').click();
      cy.get('#operator-equals').click()
      cy.get('#operator-equals').click()
      cy.get('.display').should('contain', 'Error')

    })

})
// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
