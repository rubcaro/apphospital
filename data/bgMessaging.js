import firebase from "react-native-firebase";

export default async message => {
  const noti = new firebase.notifications.Notification()
    .setNotificationId("1")
    .setTitle(message.data.title)
    .setBody(message.data.body);
  noti.android.setChannelId("1").android.setSmallIcon("ic_launcher");
  firebase.notifications().displayNotification(noti);
  return Promise.resolve();
};
