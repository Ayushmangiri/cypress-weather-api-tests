Cypress Weather API Tests

This repository contains a small API automation project created using Cypress.  
The purpose of this project is to test a public weather API with both positive and negative test scenarios.

Project Overview

I have written a simple Cypress test suite that:
Makes a GET request to the Open-Meteo weather API
Validates the response status
Checks if important fields like temperature and wind speed are present
Performs a negative test using invalid coordinates
Ensures the API responds within a reasonable time

This project was created as a part of an API testing assignment.
Other project files:
 cypress.config.js
 package.json
 README.md

How to Run the Tests

1. Clone this repository:
git clone https://github.com/Ayushmangiri/cypress-weather-api-tests.git

2. Navigate to the project folder:
cd cypress-weather-api-tests


3. Install the dependencies:
npm install


4. Open Cypress:
npx cypress open


5. Select E2E Testing
6. Choose your browser
7. Click on weather.cy.js to run the tests

Test Scenarios Covered

 1) Positive Test – Valid Coordinates
 Fetch weather data for latitude: 28.6 and longitude: 77.2  
 Verify status code 200  
 Check if temperature, windspeed, and winddirection fields exist  
 Confirm response time is less than 3000 ms  

 2) Negative Test – Invalid Coordinates
 Use invalid coordinates like (999, 999)  
 Expect the API to return a 400 or 422 status code  

API Used
The project uses the Open-Meteo public API, which does not require any authentication.

Example URL used:
https://api.open-meteo.com/v1/forecast?latitude=28.6&longitude=77.2&current_weather=true
