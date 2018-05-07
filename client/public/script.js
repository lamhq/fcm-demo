async function init() {
  try {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD5LJDGWR8jyEEcqWDTPmZTI0UoUj2tmtQ",
      authDomain: "handel-28423.firebaseapp.com",
      databaseURL: "https://handel-28423.firebaseio.com",
      projectId: "handel-28423",
      storageBucket: "",
      messagingSenderId: "346499717389"
    };
    firebase.initializeApp(config);

    // Retrieve Firebase Messaging object.
    const messaging = firebase.messaging();

    // Add the public key generated from the console here.
    messaging.usePublicVapidKey("BIH9hzDuBj02457fDfu7JDUHBpQENvu9n2XsXJRoXfm-ipMwju9pL3GphJ1ZJSl55SBKSB7fJPZKIIBE_7NGBhI");
    await messaging.requestPermission();
    console.log('Notification permission granted.');

    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    const currentToken = await messaging.getToken();

    // const currentToken = await messaging.getToken();
    if (currentToken) {
      // sendTokenToServer(currentToken);
      // updateUIForPushEnabled(currentToken);
      console.log(`Token: ${currentToken}`)
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      // updateUIForPushPermissionRequired();
      // setTokenSentToServer(false);
    }

    // Handle incoming messages. Called when:
    // - a message is received while the app has focus
    // - the user clicks on an app notification created by a service worker
    //   `messaging.setBackgroundMessageHandler` handler.
    messaging.onMessage(function(payload) {
      console.log('Message received. ', payload);
    });

    // Callback fired if Instance ID token is updated.
    // messaging.onTokenRefresh(async function() {
    //   const refreshedToken = await messaging.getToken();
    //   console.log('Token refreshed.');
    //   // Indicate that the new Instance ID token has not yet been sent to the
    //   // app server.
    //   setTokenSentToServer(false);
    //   // Send Instance ID token to app server.
    //   sendTokenToServer(refreshedToken);
    // });
  } catch (error) {
    console.log('Error on initing', error);
  }
}

init();