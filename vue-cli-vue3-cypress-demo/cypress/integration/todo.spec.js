/// <reference types="Cypress" />

describe('Todo.vue', () => {
  beforeEach(function() {
    cy.visit('http://localhost:8080/ ')
  });

  it('displays an error while adding a todo if todo title is having whitespace', () => {
    cy.get('input[data-cy=newTodoTitle]')
      .type('   ');

    cy.get('button[data-cy=addTodo]')
      .click();

    //cy.get('div[data-cy=todos]').should('have.length', 2);
    cy.document().contains('Please add a title for the todo.')
  })

  it('adds two todos successfully', () => {
    cy.get('input[data-cy=newTodoTitle]')
      .type('A todo');

    cy.get('button[data-cy=addTodo]')
      .click();

    cy.get('input[data-cy=newTodoTitle]')
      .clear();

    cy.get('input[data-cy=newTodoTitle]')
      .type('Another todo');

    cy.get('button[data-cy=addTodo]')
      .click();

    cy.get('div[data-cy=todos]').should('have.length', 2);
  })

  it('deletes a todos successfully', () => {
    cy.get('input[data-cy=newTodoTitle]')
      .type('A todo');

    cy.get('button[data-cy=addTodo]')
      .click();

    cy.get('button[data-cy=deleteTodo-1]')
      .click();

    cy.get('div[data-cy=todos]').should('not.exist');
  })
})