
const logInPage= browser.page.logInPage();
const dashboardPage= browser.page.DashboardPage();
describe('GO1% Dashboard', function(){

    before(function(browser){
        dashboardPage.navigate();
        dashboardPage.maximizeWindow()
        logInPage.Login("testemployee","testemployee")
        
    }); 

    after(function(browser){
        browser.end();
    });

    it('1.Verify user should be able to see Welcome text :', function()
    {
        dashboardPage.verifyWelcomeText();
        dashboardPage.expect.element('@welcomeMessage').text.to.contains('Welcome, Test Employee')
        dashboardPage.pause(2000)


    }),

    it('2.Verify user should be able to see all fields in dashboard page ) :', function(browser)
    {
        
    }),

    it('3.Verify user should be able to navigate profile page through Profile picture :', function()
    {
        dashboardPage.navigatingToProfilePage();
        dashboardPage.assert.urlContains('my-profile')
        browser.back();

        
    }),

    it('4.Verify user should be able Search a Nasher :', function(browser)
    {
        dashboardPage.searchNasher('Gaurav Kumar ')
        dashboardPage.expect.element("div[class='d-flex flex-column align-items-center'] div h3").text.to.contain('Gaurav Kumar Shukla')
        dashboardPage.pause(2000)
        browser.back();

        
        
    }),

    it('5.Verify user should be able to Change to French Language from dropdown :', function()

    {
        dashboardPage.selectFrenchLanguage()
        dashboardPage.pause(2000)
        dashboardPage.expect.element("span[class='select spanText'] strong").text.to.contains('French')
        
    }),

    it('6. Verify user should be able to Change to English Language from dropdown :', function()
    {
        dashboardPage.selectEnglishLanguage()
        dashboardPage.pause(2000)
        dashboardPage.expect.element("span[class='select spanText'] strong").text.to.contains('English')

        
    }),

    it('7. Verify user should be able to Change Application view to Light Mode :', function()
    {
        dashboardPage.changeViewMode()
        dashboardPage.pause(2000)
        dashboardPage.expect.element("ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']").text.to.contains('dark_mode')

        
    }),

    it('8.Verify user should be able to Change Application view to Dark Mode :', function()
    {
        dashboardPage.changeViewMode()
        dashboardPage.pause(2000)
        dashboardPage.expect.element("ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']").text.to.contains('light_mode')
        
        
    }),

    it('9.Verify user should be able to see Last Contribution  :', function()
    {
        dashboardPage.lastContributionVisible()
        dashboardPage.expect.element('@lastContribution').text.to.contains('Last Contribution')
        dashboardPage.expect.element('@lastContributionDetail').text.to.contains('Testing Ticket 9')


        
    }),

    it('10.Verify user should be able to see Contribution on Motivation tile :', function(browser)
    {
        dashboardPage.motivationTile()
        dashboardPage.expect.element('.material-symbols-outlined.fs-2.feed-icon').text.to.contains('person')
        
        
    })


})