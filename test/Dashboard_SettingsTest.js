const {document}=require("nightwatch");
const MyProfilePage = browser.page.MyProfilePage();
const logInPage = browser.page.logInPage();
const dashboardPage = browser.page.DashboardPage();


describe("GO1% Profile Page", function () {
  before(function (browser) {
    logInPage.navigate();
    logInPage.maximizeWindow();
    logInPage.Login(process.env.USER_NAME, process.env.PASSWORD);
    // logInPage.pause(2000)
    dashboardPage.navigatingToProfilePage();
  });

  after(function (browser) {
    browser.end();
  });

  it("1.Verify user should be able to see all fields in Profile Details page :", function () {
    // MyProfilePage.pause(6000);
    MyProfilePage.waitForElementVisible("@SettingButton");
    MyProfilePage.expect.element("@SettingButton").to.be.visible;
    MyProfilePage.execute(function () {
      document
        .querySelector(
          "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(2)"
        )
        .click();
    });
    
    MyProfilePage.pause(3000);
  });
  it("2. Verify user should be able to edit all the fields in Profile Details page :", function () {
    // MyProfilePage.expect.element("@fullName").to.be.visible;
    // MyProfilePage.pause(3000);
    // MyProfilePage.expect.element("@Competency").to.be.visible;
    // MyProfilePage.pause(3000);
    // MyProfilePage.expect.element("@WordpressId").to.be.visible;
    // MyProfilePage.pause(3000);
    // MyProfilePage.expect.element("@GithubId").to.be.visible;
    // MyProfilePage.pause(3000);
    // MyProfilePage.expect.element("@Practice").to.be.visible;
    // MyProfilePage.expect.element("@Location").to.be.visible;
    // MyProfilePage.expect.element("@Proficient").to.be.visible;
    // MyProfilePage.expect.element("@Intermediate").to.be.visible;
    // MyProfilePage.expect.element("@Beginner").to.be.visible;
  });
  it("3.verify user should not be able to edit any field without click change or update button :", function () {
  //   MyProfilePage
  //   MyProfilePage
  //   .expect.element('@InputFullName').to.be.visible; // Check if the label is visible
  //   MyProfilePage.execute(function () {
  //   document.querySelector("body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").value="testing";
  // });
  // // .setValue('body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)', 'testing'); // Assuming the input field has the name attribute "fullName"
  // // MyProfilePage.pause(2000)
  //   MyProfilePage.expect('body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').to.not.contain('testing');
  //   MyProfilePage.setValue("@InputGithub","testingGithub");
  //   MyProfilePage.assert.not.equal('@InputGithub', 'testingGithub');
  //   MyProfilePage.setValue("@InputLocation","testingLocation");
  //   MyProfilePage.assert.not.equal('@InputLocation', 'testingLocation');
  //   MyProfilePage.setValue("@InputPractice","testingPractice");
  //   MyProfilePage.assert.not.equal('@InputPractice', 'testingPractice');
  //   MyProfilePage.setValue("@InputWordPress","testingWordPress");
  //   MyProfilePage.assert.not.equal('@InputWordPress', 'testingWordPress');

  });
  it("4.Verify user should be able to provide only alphabets in the name field :", function () {
    MyProfilePage.focus('css',
          "div[class='left-div-button-div mt-1'] button[class='edit-detail-button']")   
    MyProfilePage.clearValue('@InputFullName')      
    MyProfilePage.element("@InputFullName").setValue("testing123");
    MyProfilePage.assert.contains('.error-span'," Name can only contain alphabets");

  });
  it("5.Verify user cannot not leave Github id and Wordpress id field blank :", function () {
    MyProfilePage.focus('css',"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)")
    MyProfilePage.clearValue('@InputGithub')
    MyProfilePage.focus('css',"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > button:nth-child(1)")
    MyProfilePage.assert.contains('.error-span'," GitHub Id cannot be blank");


  });
  it("6. Verify user should provide valid Github id :", function () {});
  it("7.Verify user should not be able to provide other users Github id :", function () {});
  it("8.Verify user should provide valid Wordpress id :", function () {});
  it("9.Verify user should be able to select any Competency :", function () {});
  it("10. Verify user should be able to select any component from Practice :", function () {});

  it("11. Verify user should be able to update skills  :", function () {});
  it("12.Verify user should not be able to enter same skill more than one time :", function () {});
  it("13.Verify user should be able to remove skills  :", function () {});
  it("14.Verify that user should be able to update location :", function () {});
  it("15.verify that user should be able to select any component from location :", function () {});
  it("16.verify that user cannot leave location field empty :", function () {});
  it("17.verify that user should not be able to add white space before or after the name in the name filed :", function () {});
  it("18.verify that user should not be able to add special characters in the name in the name filed :", function () {});
  it("19.verify that user cannot leave Full name field empty :", function () {});
  it("20.Verify user should not be able to provide other users Wordpress Id  :", function () {});
});
