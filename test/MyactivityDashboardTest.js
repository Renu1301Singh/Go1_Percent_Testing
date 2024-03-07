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
    dashboardPage.SeeAllActivities(browser, function (result) {  // Call SeeAllActivities function
      const elementCount = result.value; // Retrieve returned elementCount value
      console.log("Number of elements:", elementCount); // Log the elementCount value
      dashboardPage.assert.equal(elementCount, "214"); // Assert the elementCount value
    });
  });

  it("2.Verify appropriate points should be added according to the contribution:", function () {
    
  });
  it("3.Verify that the user can able to see the time the activity was done on all Activity :", function () {
    dashboardPage.ContributionTimeVisible();
    dashboardPage.expect.element('@ContributionTime').to.be.visible;
    dashboardPage.assert.containsText('.display-time', 'AGO')

  });
  it("4. Verify that the user can able to scroll down and see all the activities :", function () {

  });
  it("5. Verify user should see Add a contribution button when no contribution has been added by the user :", function () {
    // dashboardPage.addContributution();
    

  });
});
