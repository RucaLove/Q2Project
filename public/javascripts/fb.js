$( document ).ready(function() {
  // Handler for .ready() called.

    // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            testAPI(response.authResponse.accessToken);
        } else {
          // The person is not logged into your app or we are unable to tell.
          document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        }
    }
    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }
    window.fbAsyncInit = function() {
        FB.init({
            appId: '142942152904938',
            cookie: true,
            xfbml: true,
            version: 'v2.8'
        });
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    };
    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI(accessToken) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me?fields=id,name,email', function(response) {
            console.log(response.email);
            console.log(accessToken);
            console.log('Successful login for: ' + response.name);

            // ajax sends our facebook login data to a POST request on our index-route
            // we use some of this data for our 'newUser' cookie
            $.ajax({
                method: 'POST',
                url: '/',
                dataType: 'json',
                data: {
                    token: accessToken,
                    email: response.email,
                    username: response.name,
                    id: response.id
                }})
                .done((data) => {

                  if (data) {

                    window.location = '/test'
                  } else {

                    window.location = '/matches'
                  }
                })
                .fail((data) =>{
                  console.log('\n\nregistered user\n\n');
                })

            document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!'
        })
    }
})
