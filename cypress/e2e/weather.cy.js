describe("Weather API Test Suite", () => {

  it("Fetch current weather - Positive Test", () => {
    cy.request({
      method: "GET",
      url: "https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&current_weather=true"
    }).then((response) => {

      expect(response.status).to.eq(200);

      expect(response.body.current_weather).to.have.property("temperature");
      expect(response.body.current_weather).to.have.property("windspeed");
      expect(response.body.current_weather).to.have.property("winddirection");

      expect(response.duration).to.be.lessThan(3000);
    });
  });

  it("Negative Test - Invalid Coordinates", () => {
    cy.request({
      method: "GET",
      url: "https://api.open-meteo.com/v1/forecast?latitude=999&longitude=999&current_weather=true",
      failOnStatusCode: false    
    }).then((response) => {

      expect(response.status).to.be.oneOf([400, 422]);
    });
  });

});
