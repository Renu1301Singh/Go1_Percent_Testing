module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/my-profile",
  elements: {
    Beginner:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > p:nth-child(1)",
    ChangeCompetency:
      'div[class="left-div-button-div mt-1"] [class="edit-detail-button"]',
    ChangeLocation:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > button:nth-child(1)",
    ChangeName: "div[class='left-div-button-div mt-1'] button[class='edit-detail-button']",
    ChangePractice:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)",
    Competency:
      "div[class='mt-3 d-flex flex-column flex-md-row justify-content-between'] label[for='studio'] strong",
    errorMessageInvalidFullName:".error-span",
    fullName: '.col-xxl-4.col-xl-4.col-lg-4.col-md-4>label[for="fullName"]',
    GithubId: "label[for='gitHubId'] strong",
    InputCompetency:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)",

    InputFullName:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    InputGithub:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    InputLocation:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)",
    InputPractice:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)",
    InputWordPress:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2)",
    Intermediate:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > p:nth-child(1)",
    Location:
      "div[class='d-flex flex-column flex-md-row my-4'] div:nth-child(3) label:nth-child(1) strong:nth-child(1)",
    Practice:
      "div[class='d-flex flex-column flex-md-row my-4'] div:nth-child(2) label:nth-child(1) strong:nth-child(1)",
    Proficient: "div[class='youtube-url'] p[class='heading mb-4']",
    SaveButtonGitHub:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > button:nth-child(1)",
    SaveButtonWordpress:"div[class='btndiv'] button:nth-child(1)",
    SettingButton:
      "body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div.card.tabs-card.py-2.col-xl-12.col-lg-12.col-md-12.my-2.mt-4.mb-4.card-gap > ul > li:nth-child(5)",
    UpdateGithubId:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-settings:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(1)",
    UpdateProfilePic: 'button[_ngcontent-xan-c178][class="edit-detail-button"]',
    UpdateWordpressId: 'div[class="left-div-button-div mt-2"] [class="btndiv"]',
    WordpressId: "label[for='wordpressId'] strong",
  },
  //could not proceed with it due to website issue
  commands: [{}],
};
