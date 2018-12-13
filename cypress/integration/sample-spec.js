describe('zeitamine home page', function () {
    beforeEach(function () {
        cy.visit('localhost:3000');
    });
    it('contains "React App" in the title', function () {
        cy.title().should('contain', 'React App');
    });
});