// const selector = require("../fixtures/selectors-open-hall.json");
//       const login = require("../fixtures/login-info.json");
// const seats = require("../fixtures/seats.json");
describe("Booking tickets tests", () => {
    it("Should check the hall from the admin page and book tickets", () => {
      const selector = require("../fixtures/selectors-open-hall.json");
      const login = require("../fixtures/login-info.json");
  
      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.login(login.validEmail, login.validPassword);
      // cy.get('#start-sales > [style="display: block;"] > .conf-step__selectors-box > :nth-child(6) > .conf-step__radio');
      cy.get(selector.herculesHall).click();
      cy.get(selector.openMessage).should(
        "have.text",
        "Продажа билетов открыта!!!"
      );
      
  
      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.contains("Hercules").should("be.visible");
      cy.get(selector.selectTime).last().click();
  
      const seats = require("../fixtures/seats.json");
      seats.forEach((seat) => {
        cy.get(
          `.conf-step__hall-wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
      });
      cy.get(selector.book).click();
      cy.get(selector.success).should("be.visible").and("not.be.disabled");
      
    });
    
  });