 module.exports = {
    url : 'https://nashtechglobal.qa.go1percent.com/my-dashboard',
    
    elements: {
        welcomeMessage:'.ml-1.mt-4.text-div',
        profilePicture:'.material-symbols-outlined.hexSmall',
        searchNasher:'#Search',
        dashboard:'.nav-link.ps-0.active',
        languageDropDown:'div>.dropdown-select',
        selectFrenchLanguage:".dropdown-list__item:last-child",
        selectEnglishLanguage:".dropdown-list__item:first-child",
        ChangeView:"ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']",
        lastContribution:"div[class='mt-3 mb-4 d-flex align-items-center justify-content-center'] h5:nth-child(1)",
        lastContributionDetail:'.font-weight-light.text-center.text-break',
        DaliyMotivationSeeAll:'.btn.px-3.py-1.all-btn.filled-button',
        likeContribtution:"div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)",
        likeCount:"div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(2)",
        dislikeContribution:"div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)",
        dislikeCount:"div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(2)",
        commentOnContribution:'.form-control.p-2.ng-pristine.ng-invalid.ng-touched',
        commentVisible:"div[class='comment-text']",
        SettingButton:"ul[class='navbar-nav justify-content-end'] app-dropdown-wrapper div[class='position-relative'] div[class='pt-2'] li[class='icon nav-item dropdown px-2 d-flex align-items-center justify-content-center'] a[class='nav-link text-body p-0 text-white'] div i[class='material-icons user-icon']",
        ProfileButton:"div[class='d-flex py-1 mt-1'] span",
        logout:"div[class='d-flex py-1'] span",
        RedeemRewards:".my-1.reedeem-btn.font-weight-bold",
        Points:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(2)",
        OverAllScore:"div[class='flex-column d-flex justify-content-center align-items-center col-lg-3 col-md-3 col-sm-3 col-6'] h3[class='mb-2']",
        overAllRank:"body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h3:nth-child(2)",

    },

    commands: [
        { 
            verifyWelcomeText: function(){
                return this.
                waitForElementVisible('@welcomeMessage')

            },
            verifyAllFieldsVisible: function(){
                return this.
                waitForElementVisible('@dashboard')

            },

            navigatingToProfilePage: function(){
                return this
                .waitForElementVisible('@profilePicture')
                .execute(function() {
                    document.querySelector('.material-symbols-outlined.hexSmall').click();
                });
            },

            searchNasher: function(value){
                return this
                .waitForElementVisible('@searchNasher')
                .setValue('@searchNasher',value)
                .execute(function() {
                    document.querySelector('.text-color.name-text').click();
                });
            },

            selectFrenchLanguage: function(){
                return this
                //.waitForElementVisible('@selectFrenchLanguage')
                .execute(function() {
                    document.querySelector('.dropdown-list__item:last-child').click();
                });
            },
            selectEnglishLanguage: function(){
                return this
                .execute(function() {
                    document.querySelector('.dropdown-list__item:first-child').click();
                });
                
            },
            changeViewMode: function(){
                return this
                .waitForElementVisible('@ChangeView')
                .execute(function() {
                    document.querySelector("ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']").click();
                });
            },

            lastContributionVisible: function(){
                return this
                .waitForElementVisible('@lastContribution')
                .waitForElementVisible('@lastContributionDetail')
            },

            motivationTile: function(){
                return this
                .waitForElementVisible('@DaliyMotivationSeeAll',2000)
                .click('@DaliyMotivationSeeAll')
                

            },
                        

        }]

    }