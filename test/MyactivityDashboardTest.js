const logInPage = browser.page.logInPage();
const dashboardPage = browser.page.DashboardPage();
describe("GO1% Dashboard", function () {
  before(function (browser) {
    dashboardPage.navigate();
    dashboardPage.maximizeWindow();
    logInPage.Login("testemployee", "testemployee");
  });

  after(function (browser) {
    browser.end();
  });

  it("1.Verify user should be able to see the all the activities on the My activity:", function () {
    dashboardPage.navigatingToProfilePage();
    dashboardPage.SeeAllActivities();
   dashboardPage.assert.equal(elementCount, '224');
   
  });
})