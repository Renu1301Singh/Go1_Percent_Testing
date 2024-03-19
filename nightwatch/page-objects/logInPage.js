module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/",
  elements: {
    AlertMessage: ".pf-c-alert__title.kc-feedback-text",
    CarouselCaption: "#myCarousel > div > div:nth-child(1) > div > p",
    CarouselImage: "#myCarousel > div > div:nth-child(1) > div > p",
    CarouselSlider: "#myCarousel > ol > li:nth-child(4)",
    Email: "#username",
    FooterMesssage: ".tagsss",
    ForgotPassword: 'a[tabindex="5"]',
    InputErrorMessage: "#input-error",
    Logo: ".go1up-logo",
    MicrosoftLogo: "#social-oidc",

    Password: "#password",
    PrivacyPolicy: "a:nth-child(2) b:nth-child(1)",
    RememberMeButton: ".checkmark",
    SignInButton: "#kc-login",
    SignInGO1percent: "#kc-page-title",

    SubmitButton: 'input[value="Submit"]',
    TagLine: 'div[class="item active"] h3',
    textBetweenLogin: 'div[id="kc-social-providers"] h4',
    TermsOfUse: "a:nth-child(1) b:nth-child(1)",

    Username: "#username",
  },

  commands: [
    {
      Login: function (username, password) {
        return this.setValue("@Username", username)
          .setValue("@Password", password)
          .execute(function () {
            document.querySelector("#kc-login").click();
          });
      },

      ClickForgotPassword() {
        return this.setValue("@Email", "Tester@gmail.com").execute(function () {
          document.querySelector('input[value="Submit"]').click();
        });
      },
      
    },
  ],
};
