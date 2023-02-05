
    it("Should check the hall from the admin page and book tickets", () => {
      const selector = require("../fixtures/selectors-open-hall.json");
      const login = require("../fixtures/login-info.json");
  
      cy.visit("http://qamid.tmweb.ru/admin/");
      cy.login(login.validEmail, login.validPassword);
      
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
      cy.visit("http://qamid.tmweb.ru/client/index.php")
      cy.get(':nth-child(3) > .movie-seances__time').click();
      cy.get(':nth-child(7) > :nth-child(9)').click();
      cy.get('.acceptin-button').click();
      

    });
    
 