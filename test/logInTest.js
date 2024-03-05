const logInPage= browser.page.logInPage();

describe('GO1% Elements', function(){

    before(function(browser){
        logInPage.navigate();
        logInPage.maximizeWindow()
        
    }); 

    after(function(browser){
        browser.end();
    });
    
    it('1.) Verify logo, carousel images, carousel caption and the footer message should be displayed on login page:', function(browser)
    {
        logInPage.expect.element('@Logo').visible
        logInPage.expect.element('@CarouselImage').visible
        logInPage.expect.element('@FooterMesssage').visible
        logInPage.expect.element('@CarouselCaption').visible

    })
    it('2. Verify that tag line with text "Get 1% better Everyday is Visible"', function(){
        logInPage.expect.element('@TagLine').visible
    });

    it('3. Verify that Carousel Image changes while clicking on the Carousel button', function(){
        logInPage.expect.element('@CarouselSlider').visible
    });

    it('4. Verify that specific text between login options is present on the web page', function(){
        logInPage.expect.element('@textBetweenLogin').visible
    });

    it('5.  Verify that login page heading contains text "Sign in to Go 1%" is displayed ', function(){
        logInPage.expect.element('@SignInGO1percent').visible
    });

    it('6. Verify that clicking on the Microsoft logo redirects to the Microsoft login page', function(){
        logInPage.clickMicrosoftLogo();
        logInPage.getTitle(function(title){
        this.assert.equal(title , 'Sign in to your account')
        })
        browser.back();
    });

    it('7. Verify that login fails with invalid credentials and an alert message is displayed', function(browser){
        logInPage.Login('random','73er5');
       browser.expect.element('#input-error').text.to.contains('Invalid username or password.');
    });

    it('8. Verify successful login with valid credentials', function(){
        logInPage.Login('testemployee','testemployee');
        logInPage.assert.urlContains('my-dashboard');
    });

    
    it('9. Verify remember me checkbox is selected during login', function(browser){

        logInPage.RememberMeChecked();
        browser.expect.element('span.checkmark').to.be.selected;
       logInPage.assert.elementPresent('#rememberMe:checked')
    })

    // it('10. Verify the forgot Password functionality ',function(){
    //     logInPage.ClickForgotPassword()
    //     .assert.containsText('@AlertMessage', 'You should receive an email shortly with further instructions.');
    // });

    // it('11. Verify clicking on the "Terms of Use" link opens a new page with the terms of use', function(browser){
    //     logInPage.clickTermsOfUse();
    //     browser.windowHandles(function(result){
    //         const originalWindow = result.value[0];
    //         const handle = result.value[1];
    //         this.switchWindow(handle)
    //         .assert.urlContains('terms-of-use');
    //         this.switchWindow(originalWindow)
    //     })
    // });

    // it('12.  Verify clicking on the "Privacy policy" link opens a new page with the privacy policy',function(browser){
    //     logInPage.ClickPrivacyPolicy();
    //    browser.windowHandles(function(result){
    //     const originalWindow = result.value[0];
    //     const handle = result.value[2];
    //     this.switchWindow(handle)
    //     .assert.urlContains('privacy-policy');
    //     this.switchWindow(originalWindow)
    //    })
    // });

 

})