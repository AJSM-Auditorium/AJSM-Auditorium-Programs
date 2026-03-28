const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

/**
 * Sends a push notification using Firebase Cloud Messaging.
 * @param {string} title - The title of the notification.
 * @param {string} body - The body text of the notification.
 * @param {string} token - The FCM token of the recipient device.
 */
const sendPushNotification = async (title, body, token) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Notification sent successfully:', response);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

module.exports = { sendPushNotification };