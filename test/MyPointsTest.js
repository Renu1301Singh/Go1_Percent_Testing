const logInPage = browser.page.logInPage();
const dashboardPage = browser.page.DashboardPage();

describe("GO1% Dashboard", function () {
  before(function (browser) {
    dashboardPage.navigate();
    dashboardPage.maximizeWindow();
    logInPage.Login(process.env.USER_NAME, process.env.PASSWORD);
  });

  after(function (browser) {
    browser.end();
  });
// could not proceed with this due to website issues

it("1.verify that user can view the current month's score and the division of contributions :",function(){

})
it("2.Verify that user can open all the contribution's drop down and read the title :",function(){

})
it("3.Verify that user can click on the chart, which opens the drop down and highlight the type of co :",function(){

})
it("4.Verify that user is able to change the month which changes the chart and the contribution :",function(){

})
it("Verify when the user hovers on the chart the contribution name should be displayed.i  :",function(){

})
it("6.Verify user can see all time score :",function(){

})
it("7.Verify all time scores equals the scores on each contribution type :",function(){

})
});