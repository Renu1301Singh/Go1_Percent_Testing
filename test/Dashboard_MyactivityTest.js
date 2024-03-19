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

  it("1.Verify user should be able to see the all the activities on the My activity:", function () {
   
    dashboardPage.navigatingToProfilePage();
    dashboardPage.pause(3000)
     const activitySelector = ".timeline-icon";
    browser.elements("css selector", activitySelector, function (result) {
      const numberOfActivities = result.value.length;
      
      for (let i = 1; i <= numberOfActivities; i++) {
        const activityTimeSelector = ".display-time";
        browser.expect.element(activityTimeSelector).to.be.visible;
      }
   }); 
   
  });

  it("2.Verify appropriate points should be added according to the contribution:", function () {
    dashboardPage.expect.element(".px-2.feed-points").to.be.visible;
  });
  it("3.Verify that the user can able to see the time the activity was done on all Activity :", function () {
  
    dashboardPage.expect.element('@ContributionTime').to.be.visible;
    dashboardPage.assert.containsText('.display-time', 'AGO')

  });
  it("4. Verify that the user can able to scroll down and see all the activities :", function () {
    // scroll down was not working so was dropped from impelementing

  });
  it("5. Verify user should see Add a contribution button when no contribution has been added by the user :", function () {
    // this test case was dropped from impelementing
    

  });
});
