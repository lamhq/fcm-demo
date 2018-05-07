var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');

function init() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: 'handel-28423'
  });
}

function send() {
  // This registration token comes from the client FCM SDKs.
  var registrationToken = 'eDnTnPyK_LU:APA91bGOQMdE9xL8CKq3uW7h9dt2aepBBPxC3L1X1oviiqjezsd6YN9wCub3wL_DiWmXumVxxx2tCRY7D4uNOcqfL52wDhjvVQBaKFn-18FVwp9jxxoSMOIuWUmh4IEmgaVaOS1kG7XX';

  // See documentation on defining a message payload.
  var message = {
    data: {
      score: '850',
      time: '2:45'
    },
    token: registrationToken
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}

init();
send();