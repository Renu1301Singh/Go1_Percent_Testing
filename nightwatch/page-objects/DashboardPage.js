module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/my-dashboard",


  elements: {
    welcomeMessage: ".ml-1.mt-4.text-div",
    profilePicture: ".material-symbols-outlined.hexSmall",
    Picture: {
      selector:
        "//div[@class='material-symbols-outlined hex']//*[name()='svg']",
      locateStrategy: "xpath",
    },

    searchNasher: "#Search",
    dashboard: ".nav-link.ps-0.active",
    languageDropDown: "div>.dropdown-select",
    selectFrenchLanguage: ".dropdown-list__item:last-child",
    selectEnglishLanguage: ".dropdown-list__item:first-child",
    ChangeView:
      "ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']",
    lastContribution:
      "div[class='mt-3 mb-4 d-flex align-items-center justify-content-center'] h5:nth-child(1)",
    lastContributionDetail: ".font-weight-light.text-center.text-break",
    DailyMotivation: ".col-lg-4>.text-center:first-child",
    DaliyMotivationSeeAll: ".btn.px-3.py-1.all-btn.border-button",
    likeContribution: ".icon.mx-1",

    likeCount:
      "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(2)",
    dislikeContribution:
      "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)",
    dislikeCount:
      "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(2)",
    commentVisible: "div[class='comment-text']",
    SettingButton:
      "ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']",
    ProfileButton: "div[class='d-flex py-1 mt-1'] span",
    logout: "div[class='d-flex py-1'] span",
    RedeemRewards: ".my-1.reedeem-btn.font-weight-bold",
    ClickYes: ".btn.btn-primary.m-2",
    RewardMessage: "div[aria-label='Hi, you have redeemed the reward']",
    Points:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(2)",
    OverAllScore:
      "div[class='flex-column d-flex justify-content-center align-items-center col-lg-3 col-md-3 col-sm-3 col-6'] h3[class='mb-2']",
    overAllRank:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h3:nth-child(2)",
    shareButton: ".material-icons.cursor-pointer.vertical-menu",
    selectMedia: ".sb-icon",
    MonthsContribution:
      "div[class='card col-lg-12 col-12 mt-4'] h5:nth-child(1)",
    KnolX: {
      selector: "//h6[normalize-space()='Knolx']",
      locateStrategy: "xpath",
    },

    Radar: {
      selector: "//a[@href='/radar/view']",
      locateStrategy: "xpath",
    },
    LeaderBoard: {
      selector: "//h6[normalize-space()='LEADERBOARD']",
      locateStrategy: "xpath",
    },
    Helpdesk: {
      selector: "//h6[normalize-space()='HelpDesk']",
      locateStrategy: "xpath",
    },
    Help: {
      selector: "//a[@href='/help']",
      locateStrategy: "xpath",
    },
    Scoring: {
      selector: "//a[@class='nav-link pe-0 text-white font-weight-bolder']",
      locateStrategy: "xpath",
    },
    Vision: {
      selector: "//a[@class='nav-link text-white font-weight-bolder']",
      locateStrategy: "xpath",
    },
    allActivitySection:'.timeline.w-100.mx-1',
    
  },
 
  commands: [
    {
      verifyWelcomeText: function () {
        return this.waitForElementVisible("@welcomeMessage");
      },
      verifyAllFieldsVisible: function () {
        return this.waitForElementVisible("@dashboard");
      },

      navigatingToProfilePage: function () {
        return this.waitForElementVisible("@profilePicture").execute(
          function () {
            document
              .querySelector(".material-symbols-outlined.hexSmall")
              .click();
          }
        );
      },

      searchNasher: function (value) {
        return this.waitForElementVisible("@searchNasher")
          .setValue("@searchNasher", value)
          .execute(function () {
            document.querySelector(".text-color.name-text").click();
          });
      },

      selectFrenchLanguage: function () {
        return this.execute(function () {
          document.querySelector(".dropdown-list__item:last-child").click();
        });
      },
      selectEnglishLanguage: function () {
        return this.execute(function () {
          document.querySelector(".dropdown-list__item:first-child").click();
        });
      },
      changeViewMode: function () {
        return this.waitForElementVisible("@ChangeView").execute(function () {
          document
            .querySelector(
              "ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']"
            )
            .click();
        });
      },
      FieldsOnDashboard: function () {
        return this.pause(3000)
          .waitForElementVisible("@KnolX")
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
      },

      lastContributionVisible: function () {
        return this.waitForElementVisible(
          "@lastContribution"
        ).waitForElementVisible("@lastContributionDetail");
      },

      motivationTile: function () {
        return this.execute(function () {
          document
            .querySelector(".btn.px-3.py-1.all-btn.border-button")
            .click();
        });
      },
      dailyMotivationContent: function () {
        return this.waitForElementVisible("@DailyMotivation");
      },
      clickOnlikeContribution: function () {
        return this.waitForElementVisible("@likeContribution").execute(
          function () {
            document
              .querySelector(
                "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)"
              )
              .click();
          }
        );
      },
      clickOnDislikeButton: function () {
        return this.waitForElementVisible("@dislikeContribution").execute(
          function () {
            document
              .querySelector(
                "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)"
              )
              .click();
          }
        );
      },
      InsertCommentOnContribution: function () {
        return this.execute(function () {
          document
            .querySelector(
              "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-feeds:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3) > span:nth-child(2)"
            )
            .click();
        });
      },
      navigateToProfileBySetting: function () {
        return this.waitForElementVisible("@SettingButton")
          .execute(function () {
            document
              .querySelector(
                "ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']"
              )
              .click();
          })
          .waitForElementVisible("@ProfileButton")

          .execute(function () {
            document
              .querySelector("div[class='d-flex py-1 mt-1'] span")
              .click();
          });
      },
      LogoutBySettings: function () {
        return this.waitForElementVisible("@SettingButton")
          .execute(function () {
            document
              .querySelector(
                "ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']"
              )
              .click();
          })
          .waitForElementVisible("@ProfileButton")

          .execute(function () {
            document.querySelector("div[class='d-flex py-1'] span").click();
          });
      },

      ClickRedeemRewards: function () {
        return this.waitForElementVisible("@RedeemRewards")
          .execute(function () {
            document
              .querySelector(".my-1.reedeem-btn.font-weight-bold")
              .click();
          })
          .waitForElementVisible("@ClickYes")
          .execute(function () {
            document.querySelector(".btn.btn-primary.m-2").click();
          });
      },
      clickOnPoints: function () {
        return this.waitForElementVisible("@Points").execute(function () {
          document
            .querySelector(
              "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(2)"
            )
            .click();
        });
      },
      clickOnScore: function () {
        return this.waitForElementVisible("@OverAllScore").execute(function () {
          document
            .querySelector(
              "div[class='flex-column d-flex justify-content-center align-items-center col-lg-3 col-md-3 col-sm-3 col-6'] div[class='score-text text-center mt-n3']"
            )
            .click();
        });
      },
      clickOnRank: function () {
        return this.waitForElementVisible("@overAllRank").execute(function () {
          document
            .querySelector(
              "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h3:nth-child(2)"
            )
            .click();
        });
      },
      shareContributionOnSocialMedia: function () {
        return this.waitForElementVisible("@shareButton")
          .execute(function () {
            document
              .querySelector(".material-icons.cursor-pointer.vertical-menu")
              .click();
          })
          .waitForElementVisible("@selectMedia")
          .execute(function () {
            document.querySelector(".sb-icon").click();
          });
      },
    //   getElementCount: function(browser) {
    //     return browser.elements('css selector', this.elements.yourElement, function(result) {
    //       return result.value.length;
    //     }),
    
      SeeAllActivities: function(){
        return this
        .waitForElementVisible('@allActivitySection')
        .execute(function () {
         var elementCount = document.querySelectorAll("[alt='badge']").length;
        console.log('Number of elements:', elementCount);
    })

      }
    },
  ]
};
