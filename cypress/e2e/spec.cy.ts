describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    //cy.wait(10_000);
    //A wait to found the element cy.get('h1',{timeout: 1000})
    cy.get('h1').should('contain','XLista de Actividades');
    cy.contains('Agregar').click();
  })
})