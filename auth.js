auth0.createAuth0Client({
          domain: "5vb4s6ton7a.au.auth0.com",
          clientId: "9LBrd9pPKcFKKZDaHdJqocNL2H7ePobY",
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }).then(async (auth0Client) => {
          // Assumes a button with id "login" in the DOM
          const loginButton = document.getElementById("login");
        
          loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            auth0Client.loginWithRedirect();
          });
        
          if (location.search.includes("state=") && 
              (location.search.includes("code=") || 
              location.search.includes("error="))) {
            await auth0Client.handleRedirectCallback();
            window.history.replaceState({}, document.title, "/");
          }
        
          // Assumes a button with id "logout" in the DOM
          const logoutButton = document.getElementById("logout");
        
         
          function waitForElementToDisplay(selector, time) {
          setTimeout(function() {
            const logoutButton = document.querySelector(selector);
            if (logoutButton) {
              logoutButton.addEventListener("click", (e) => {
                console.log("logging out")
                e.preventDefault();
                auth0Client.logout();
              });
            } else {
              waitForElementToDisplay(selector, time);
            }
          }, time);
        }

        waitForElementToDisplay("#logout", 1000);
        
          const isAuthenticated = await auth0Client.isAuthenticated();
          const userProfile = await auth0Client.getUser();

          // Assumes an element with id "profile" in the DOM
          const profileElement = document.getElementById("profile");
          const greetingelement = document.getElementById("greeting")
          console.log("USER AUTH ")
          if (isAuthenticated) {
            if(profileElement){
              console.log('authdisp')
            profileElement.style.display = "block";
            profileElement.innerHTML = `
                    <p>${userProfile.name} </p>
                    <p>${email}</p>
                    <img src="${userProfile.picture}" />
                  `;
            }
            loginButton.id = "logout"
            loginButton.textContent = "logout"
            greetingelement.textContent = "Hi, "+userProfile.given_name
          } else {
            if(profileElement){
            profileElement.style.display = "none";
          }}
        });

        const logout = () => {
          auth0Client.logout({
            logoutParams: {
              returnTo: window.location.origin
            }
          });
        };