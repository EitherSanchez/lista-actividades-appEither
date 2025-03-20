import {e2e} from '../support/constantes';

describe('Editar una Actvidad', () => {
  it('Verificar que se pueda editar una activdad en la lista', () => {
    // Visitar la pagina principal
    cy.visit('/')
    //cy.wait(10_000);
    //A wait to found the element cy.get('h1',{timeout: 1000})
    cy.validacionInicial();

//Editar Actividad
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad de prueba');
    cy.get(e2e.BOTON_AGREGAR).click();
    cy.get(e2e.BOTON_EDITAR).click();
    cy.get(e2e.CAMPO_EDITAR_ACTIVIDAD).clear();
    cy.wait(2_000);
    cy.get(e2e.CAMPO_EDITAR_ACTIVIDAD).type('This is an edited text')
    cy.wait(2_000);
    cy.get(e2e.BOTON_GUARDAR).click();

    cy.get('span').should('have.text','This is an edited text');
  })
})