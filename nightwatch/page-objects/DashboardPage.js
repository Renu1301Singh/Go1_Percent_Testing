module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/my-dashboard",

  elements: {
    addingContribution: "span[_ngcontent-buv-c169].addRewardTxt",
    allActivitySection: ".timeline.w-100.mx-1",
    Contribution: ".nav-item.my-1.cursor-pointer.text-bold.p-2.newTabs",
    contributionTime: ".display-time",
    changeView:
      "ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']",
    commentVisible: "div[class='comment-text']",
    clickYes: ".btn.btn-primary.m-2",
    dailyMotivation: ".card.page-wrapper",
    daliyMotivationSeeAll: ".btn.px-3.py-1.all-btn.border-button",
    dashboard: ".nav-link.ps-0.active",
    dislikeContribution:
      "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)",
    dislikeCount:
      "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(2)",
    Helpdesk: {
      selector: "//h6[normalize-space()='HelpDesk']",
      locateStrategy: "xpath",
    },
    Help: {
      selector: "//a[@href='/help']",
      locateStrategy: "xpath",
    },
    KnolX: {
      selector: "//h6[normalize-space()='Knolx']",
      locateStrategy: "xpath",
    },
    languageDropDown: "div>.dropdown-select",
    lastContribution:
      "div[class='mt-3 mb-4 d-flex align-items-center justify-content-center'] h5:nth-child(1)",
    lastContributionDetail: ".font-weight-light.text-center.text-break",
    leaderBoard: {
      selector: "//h6[normalize-space()='LEADERBOARD']",
      locateStrategy: "xpath",
    },

    likeContribution: ".icon.mx-1",

    likeCount:
      "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(2)",
    logout: "div[class='d-flex py-1'] span",
    Picture: {
      selector:
        "//div[@class='material-symbols-outlined hex']//*[name()='svg']",
      locateStrategy: "xpath",
    },
    monthsContribution:
      "div[class='card col-lg-12 col-12 mt-4'] h5:nth-child(1)",

    Points:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(2)",
    profileButton: "div[class='d-flex py-1 mt-1'] span",

    profilePicture: ".material-symbols-outlined.hexSmall",
    Scoring: {
      selector: "//a[@class='nav-link pe-0 text-white font-weight-bolder']",
      locateStrategy: "xpath",
    },

    overAllRank:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h3:nth-child(2)",
    overAllScore:
      "div[class='flex-column d-flex justify-content-center align-items-center col-lg-3 col-md-3 col-sm-3 col-6'] h3[class='mb-2']",

    Radar: {
      selector: "//a[@href='/radar/view']",
      locateStrategy: "xpath",
    },

    redeemRewards: ".my-1.reedeem-btn.font-weight-bold",

    rewardMessage: "div[aria-label='Hi, you have redeemed the reward']",
    searchNasher: "#Search",

    selectEnglishLanguage: ".dropdown-list__item:first-child",
    selectFrenchLanguage: ".dropdown-list__item:last-child",
    selectMedia: ".sb-icon",
    settingButton:
      "ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']",

    shareButton: ".material-icons.cursor-pointer.vertical-menu",

    titleOfContribution:
      ".form-control.msg-section.p-2.overall-txt-color.ng-pristine.ng-invalid.ng-touched",

    Vision: {
      selector: "//a[@class='nav-link text-white font-weight-bolder']",
      locateStrategy: "xpath",
    },

    welcomeMessage: ".ml-1.mt-4.text-div",
  },

  commands: [
    {
      

      searchNasher: function (value) {
        return this.setValue("@searchNasher", value).execute(function () {
          
        });
      },

      changeViewMode: function () {
        return this
      
        .focus('css',"ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']")
      },

      motivationTile: function () {
        return this
       
        .focus('css',".btn.px-3.py-1.all-btn.border-button")
      },

      clickOnlikeContribution: function () {
        return this
        
        .focus('css',"div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)")
      },
      clickOnDislikeButton: function () {
        return this
      
        .focus('css',"div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)")
      },
      insertCommentOnContribution: function () {
        return this
      
        .focus('css',"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-feeds:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3) > span:nth-child(2)")
      },
      navigateToProfileBySetting: function () {
        return this
     
        .focus('css',"ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']")
        .focus('css',"div[class='d-flex py-1 mt-1'] span")
      },
      logoutBySettings: function () {
        return this
        .focus('css',"ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']")
        .focus('css',"div[class='d-flex py-1'] span")
 
      },

      clickRedeemRewards: function () {
        return this
        .focus('css',".my-1.reedeem-btn.font-weight-bold")
        .focus('css',".btn.btn-primary.m-2")

    
      },
      clickOnPoints: function () {
        return this
        .focus('css',"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(2)")
       
      },
      clickOnScore: function () {
        return this
        .focus('css',"div[class='flex-column d-flex justify-content-center align-items-center col-lg-3 col-md-3 col-sm-3 col-6'] div[class='score-text text-center mt-n3']")
    
      },
      clickOnRank: function () {
        return this
        .focus('css',"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h3:nth-child(2)")
 
      },
      shareContributionOnSocialMedia: function () {
        return this
        .focus('css','.material-icons.cursor-pointer.vertical-menu')
        .focus('css',".sb-icon")
 
      },

      seeAllActivities: function () {
        return this.execute(function () {
          var elementCount = document.querySelectorAll(".timeline-icon").length;
          console.log("Number of elements:", elementCount);
          return elementCount;
        });
      },
      addContributution: function () {
        return this.click("@Contribution")
        .click("@addingContribution");
      },
    },
  ],
};
