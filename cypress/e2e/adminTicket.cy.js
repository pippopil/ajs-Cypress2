describe("Booking tickets tests", () => {
    it("Should check movie availability from admin and ticket booking", () => {
        const selector = require("../fixtures/adminSelectors.json");
      const login = require("../fixtures/login-info.json");
  
      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.login(login.validEmail, login.validPassword);
    
      cy.get('[draggable="true"][data-film-id="85"] > .conf-step__movie-title').
      then(($el) => $el.textContent).should('have.text','Фильм 3');
      cy.get('[draggable="true"][data-film-id="85"] > .conf-step__movie-title').invoke('text').then((text) => {

        cy.visit("qamid.tmweb.ru");
        cy.get('[data-time-stamp="1675976400"]').click();
        cy.get(':nth-child(3) > .movie__info > .movie__description > .movie__title').should('have.text', text);
        cy.get(':nth-child(3) > :nth-child(2) > .movie-seances__list > .movie-seances__time-block > .movie-seances__time').first().contains("14:00").click();
        cy.get(':nth-child(7) > :nth-child(8)').click();
        cy.get(selector.bookingHall).click({force: true});
        cy.get(selector.checkTicket).click();

      });
    });
    });