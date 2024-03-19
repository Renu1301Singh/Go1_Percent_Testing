const logInPage = browser.page.logInPage();
const dashboardPage = browser.page.DashboardPage();
const dotenv = require('dotenv')
dotenv.config();

describe("GO1% Dashboard", function () {
  before(function (browser) {
    dashboardPage.navigate();
    dashboardPage.maximizeWindow();
    logInPage.Login( process.env.USER_NAME,process.env.PASSWORD);
  });

  after(function (browser) {
    browser.end();
  });

  it("1.Verify user should be able to see Welcome text :", function () {
   
    dashboardPage.expect
      .element("@welcomeMessage")
      .text.to.contains("Welcome, Test Employee");
    dashboardPage.pause(2000);
  }),
    it("2.Verify user should be able to see all fields in dashboard page ) :", function () {
      dashboardPage.
         waitForElementVisible("@KnolX")
          .waitForElementVisible("@Radar")
          .waitForElementVisible("@LeaderBoard")
          .waitForElementVisible("@Helpdesk")
          .waitForElementVisible("@Help")
          .waitForElementVisible("@Scoring")
          .waitForElementVisible("@Vision")
          .waitForElementVisible("@dashboard", 1000)
         .waitForElementVisible("@DailyMotivation", 1000)
          .waitForElementVisible("@Picture", 1000)
          .waitForElementVisible("@lastContribution")
          .waitForElementVisible("@RedeemRewards")
          .waitForElementVisible("@Points")
          .waitForElementVisible("@OverAllScore")
          .waitForElementVisible("@overAllRank")
          .waitForElementVisible("@MonthsContribution")
          .waitForElementVisible("@searchNasher")
          .waitForElementVisible("@welcomeMessage");
    });

  it("3.Verify user should be able to navigate profile page through Profile picture :", function () {
   dashboardPage.navigatingToProfilePage();
    dashboardPage.assert.urlContains("my-profile");
    browser.back();
  }),
    it("4.Verify user should be able Search a Nasher :", function (browser) {
      dashboardPage.searchNasher("Gaurav Kumar ");
      dashboardPage.expect
        .element("div[class='d-flex flex-column align-items-center'] div h3")
        .text.to.contain("Gaurav Kumar Shukla");
      dashboardPage.pause(2000);
      browser.back();
    }),
    it("5.Verify user should be able to Change to French Language from dropdown :", function () {
      dashboardPage.execute(function () {
        document.querySelector(".dropdown-list__item:last-child").click();
      });
      dashboardPage.pause(2000);
      dashboardPage.expect
        .element("span[class='select spanText'] strong")
        .text.to.contains("French");
    }),
    it("6. Verify user should be able to Change to English Language from dropdown :", function () {
      dashboardPage.execute(function () {
        document.querySelector(".dropdown-list__item:first-child").click();
      });
      dashboardPage.pause(2000);
      dashboardPage.expect
        .element("span[class='select spanText'] strong")
        .text.to.contains("English");
    }),
    it("7. Verify user should be able to Change Application view to Light Mode :", function () {
      dashboardPage.changeViewMode();
      dashboardPage.pause(2000);
      dashboardPage.expect
        .element(
          "ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']"
        )
        .text.to.contains("dark_mode");
    }),
    it("8.Verify user should be able to Change Application view to Dark Mode :", function () {
      dashboardPage.changeViewMode();
      dashboardPage.pause(2000);
      dashboardPage.expect
        .element(
          "ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']"
        )
        .text.to.contains("light_mode");
    }),
    it("9.Verify user should be able to see Last Contribution  :", function () {
      dashboardPage.lastContributionVisible();
      dashboardPage.expect
        .element("@lastContribution")
        .text.to.contains("Last Contribution");
      dashboardPage.expect
        .element("@lastContributionDetail")
        .text.to.contains("Testing Ticket 9");
    }),
    it("10.Verify user should be able to see Contribution on Motivation tile :", function () {
      dashboardPage.waitForElementVisible("@DailyMotivation");
      dashboardPage.expect.element("@DailyMotivation").to.be.present;
    });

  it("11.Verify user should be able to Like specific Contribution :", function () {
    dashboardPage.motivationTile();
    dashboardPage.clickOnlikeContribution();
    dashboardPage.expect.element("@likeCount").text.to.contain("1");
  });

  it("12. Verify user should be able to Dislike specific Contribution :", function () {
    dashboardPage.clickOnDislikeButton();
    dashboardPage.expect.element("@dislikeCount").text.to.contain("1");
  });

  it("13. Verify user should be able to send a Comment on specific Contribution:", function () {
    dashboardPage.InsertCommentOnContribution();
    dashboardPage.waitForElementVisible(
      "input[placeholder='Add your comment here... Press ENTER to submit']",
      5000
    );
    dashboardPage.setValue('[formcontrolname="comment"]', [
      "Demo Comment",
      browser.Keys.ENTER,
    ]);
    dashboardPage.pause(1000)
    dashboardPage.expect
      .element("div[class='comment-text']")
      .text.to.contain("Demo Comment");
  });

  it("15.Verify user should be able to click see all button for Daily motivation tile  :", function () {
    dashboardPage.motivationTile();
    dashboardPage.expect
      .element(".material-symbols-outlined.fs-2.feed-icon")
      .text.to.contains("person");
  });
  it("14. Verify use should be able to Share specific Contribution on social media  :", function () {
    dashboardPage.pause(2000);
    dashboardPage.shareContributionOnSocialMedia();
    dashboardPage.pause(2000);

    browser.windowHandles(function (result) {
      console.log(result.value);
      var newTab = result.value[1];
      if (newTab) {
        browser.switchWindow(newTab, function () {
          browser.assert.urlContains("twitter"); 
          browser.closeWindow();
          browser.back();
          browser.switchWindow(result.value[0]);
        });
      } else {
        console.error("New tab not found or already closed.");
      }
    });

    browser.assert.urlEquals(
      "https://nashtechglobal.qa.go1percent.com/my-dashboard"
    );
  });

  it("16. Verify user should be able to navigate Profile page through Settings button  :", function () {
    dashboardPage.navigateToProfileBySetting();
    dashboardPage.assert.urlContains("my-profile");
    dashboardPage.pause(2000);
    browser.back();
  });


  // it("19.Verify user should be able to Redeem Rewards from Your Rewards :", function () {
    
  //   dashboardPage.ClickRedeemRewards();
  //   dashboardPage.pause(2000);
  //   dashboardPage.expect
  //     .element("@RewardMessage")
  //     .text.to.contain("Hi, you have redeemed the reward");
  // });
  it("20.Verify user should be able to click on points and redirect to profile page :", function () {
    dashboardPage.clickOnPoints();
    dashboardPage.assert.urlContains("my-profile");
    browser.back();
  });
  it("21.Verify user should be able to click on Overall ranks and redirect to profile page  :", function () {
    dashboardPage.clickOnRank();
    dashboardPage.assert.urlContains("my-profile");
    browser.back();
  });
  it("22.Verify user should be able to click on Overall score and redirect to profile page :", function () {
    dashboardPage.clickOnScore();
    dashboardPage.assert.urlContains("my-profile");
    browser.back();
  });
  it("23. Verify that user should be able to click on profile pic and redirect to profile page  :", function () {
    dashboardPage.navigatingToProfilePage();
    dashboardPage.assert.urlContains("my-profile");
    browser.back();
  });

  it("18.Verify user should be able to Logout through Settings button  :", function () {
    dashboardPage.pause(2000);
    dashboardPage.LogoutBySettings();
    dashboardPage.expect
      .element("#kc-page-title")
      .text.to.contains("Sign in to Go 1%");
  });
});
