import {e2e} from '../support/constantes';

describe('Eliminar una Actvidad', () => {
  it('Verificar que se pueda eliminar una activdad de lista', () => {
    // Visitar la pagina principal
    cy.visit('/')
    //cy.wait(10_000);
    //A wait to found the element cy.get('h1',{timeout: 1000})
    cy.validacionInicial();
    cy.agregarActividad();

//Eliminar Actividad

cy.wait(2_000);
cy.get(e2e.BOTON_ELIMINAR).click();
cy.get('[data-cy="u3dd92"]').should('not.have.text','Actividad de prueba');
  })
})