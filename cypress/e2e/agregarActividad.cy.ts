import {e2e} from '../support/constantes';

describe('Agregar una Actvidad', () => {
  it('Verificar que se pueda agregar una nueva activdad a la lista', () => {
    // Visitar la pagina principal
    cy.visit('/')
    //cy.wait(10_000);
    //A wait to found the element cy.get('h1',{timeout: 1000})
    cy.validacionInicial();

//Agregar Actividad
    cy.agregarActividad();

    cy.get('span').should('have.text','Actividad de prueba');
  })
})