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
        return this.waitForElementVisible("@MicrosoftLogo", 2000).execute(
          function () {
            document.querySelector("#social-oidc").click();
          }
        );
      },

      Login: function (username, password) {
        return this.setValue("@Username", username)
          .setValue("@Password", password)
          .execute(function () {
            document.querySelector("#kc-login").click();
          });
      },
      RememberMeChecked() {
        return this.waitForElementVisible("@RememberMeButton", 5000).execute(
          function () {
            document.querySelector(".checkmark").click();
          }
        );
      },

      ClickForgotPassword() {
        return this.waitForElementVisible("@ForgotPassword", 2000)
        .execute(function () {
          document.querySelector('a[tabindex="5"]').click();
        })
          .setValue("@Email", "Tester@gmail.com")
          .execute(function () {
            document.querySelector('input[value="Submit"]').click();
          });

        browser.back();
      },

      clickTermsOfUse() {
        return this.waitForElementVisible("@TermsOfUse", 2000)
        .execute(function () {
          document.querySelector('a:nth-child(1) b:nth-child(1)').click();
        });
      },

      ClickPrivacyPolicy() {
        return this.waitForElementVisible("@PrivacyPolicy", 2000)
        .execute(function () {
          document.querySelector('a:nth-child(2) b:nth-child(1)').click();
        });
      },
    },
  ],
};
