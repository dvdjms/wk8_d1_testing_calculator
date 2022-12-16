describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // 1. Do the number buttons update the display of the running total?
  it('should display the running total when number buttons clicked', () => {
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '67')
  })

  // 2. Do the arithmetical operations update the display with the result of the operation?
  it('should display the result of arithmatic calculation', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '42')
  })

  // 3. Can multiple operations be chained together?
  it('should chain together multiple operations', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '33')
})

// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('should output a range of numbers - decimal', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.25')
  })

// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('should output a range of numbers - minus', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })


// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? 
// Answer: dividing a number by 0 displays the word "Infinity"


// 6. Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will 
//   need to modify the Calculator model to meet this requirement).
  it('should divide a number by zero and get Error', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
  })

})

