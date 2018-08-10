# React Native Phone Auth Example

This example contains basic phone auth (Firebase) flow with the following:

> redux
> react-navigation
> react-native-firebase



### Usefull links I used:

1. https://reactnavigation.org/
2. https://rnfirebase.io/docs/v4.3.x/getting-started
3. https://console.firebase.google.com/
4. https://github.com/thegamenicorus/react-native-phone-input



## Setting up Firebase on Android and iOS (Native Side)

> Initial setup:
>
> https://rnfirebase.io/docs/v4.3.x/installation/initial-setup

## In order to connect firebase to your project:

1. go to [Firebase Console](https://console.firebase.google.com/ "Firebase Console") 

2. select Add project and create your project.

3. Select your project and click Authentication option on your left

4. From the upper tab select sign-in method and then click Phone and enable it.

5. In order to use phone login via emulators choose Phone numbers for testing and add a phone number and a verification code and click add.

6. Go to project settings and in General tab click Add firebase to your iOS app or/and Add firebase to your Android App and complete the form.

7. Download the config file (google-services.json for android) and (GoogleService-Info.plist for iOS)

8. Move the GoogleService-Info.plist file you just downloaded into the root of your Xcode project and add it to all targets.

9. Move the google-services.json file you just downloaded into the androd/app of your android project.

10. Open the project with XCode, Clean it and Build it. Then run `yarn ios` or `react-native run-ios`

11. Open the android project with Android Studio. Select Build > Clean Project. Then run `yarn android` or `react-native run-android`

12. 