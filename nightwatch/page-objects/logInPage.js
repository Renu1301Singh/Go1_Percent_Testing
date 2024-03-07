module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/",
  elements: {
    Logo: ".go1up-logo",
    CarouselImage: "#myCarousel > div > div:nth-child(1) > div > p",
    FooterMesssage: ".tagsss",
    CarouselCaption: "#myCarousel > div > div:nth-child(1) > div > p",
    TagLine: 'div[class="item active"] h3',
    CarouselSlider: "#myCarousel > ol > li:nth-child(4)",
    textBetweenLogin: 'div[id="kc-social-providers"] h4',
    SignInGO1percent: "#kc-page-title",
    MicrosoftLogo: ".social-fontawesom-icons",
    Username: "#username",
    Password: "#password",
    SignInButton: "#kc-login",
    InputErrorMessage: "#input-error",
    RememberMeButton: ".checkmark",
    ForgotPassword: 'a[tabindex="5"]',
    Email: "#username",
    SubmitButton: 'input[value="Submit"]',
    AlertMessage: ".pf-c-alert__title.kc-feedback-text",
    TermsOfUse: "a:nth-child(1) b:nth-child(1)",
    PrivacyPolicy: "a:nth-child(2) b:nth-child(1)",
  },

  commands: [
    {
      clickCrouselButton() {
        return this.waitForElementVisible("@CarouselSlider", 2000);
      },

      clickMicrosoftLogo() {
        return this.waitForElementVisible("@MicrosoftLogo", 2000).click(
          "@MicrosoftLogo"
        );
      },

      Login: function (username, password) {
        return this.setValue("@Username", username)
          .setValue("@Password", password)
          .click("@SignInButton");
      },
      RememberMeChecked() {
        return this.waitForElementVisible("@RememberMeButton", 5000).click(
          "@RememberMeButton"
        );
      },

      ClickForgotPassword() {
        return this.waitForElementVisible("@ForgotPassword", 2000)
          .click("@ForgotPassword")
          .setValue("@Email", "Tester@gmail.com")
          .click("@SubmitButton");
        browser.back();
      },

      clickTermsOfUse() {
        return this.waitForElementVisible("@TermsOfUse", 2000).click(
          "@TermsOfUse"
        );
      },

      ClickPrivacyPolicy() {
        return this.waitForElementVisible("@PrivacyPolicy", 2000).click(
          "@PrivacyPolicy"
        );
      },
    },
  ],
};
