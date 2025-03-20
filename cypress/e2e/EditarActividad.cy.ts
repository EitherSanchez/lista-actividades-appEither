import {e2e} from '../support/constantes';

describe('Editar una Actvidad', () => {
  it('Verificar que se pueda editar una activdad en la lista', () => {
    // Visitar la pagina principal
    cy.visit('/')
    //cy.wait(10_000);
    //A wait to found the element cy.get('h1',{timeout: 1000})
    cy.validacionInicial();
    cy.agregarActividad();

//Editar Actividad

cy.EditarActividad();

cy.get('span').should('have.text','This is an edited text');
  })
})