# POS (Point Of Sales)

Point of sales using React Native for mobile app & Laravel for REST API

## Mobile Apps (React Native)

### Setting for run android

1. Create file `local.properties` on folder `AppPOS/android`
2. Write `sdk.dir=/Users/ugiispoyowidodo/Library/Android/sdk`

### Run for android

1. cd `AppPos`
2. npm install
3. Install Android Studio `(Android SDK, Android SDK Platform, Android Virtual Device)`
4. Configure the ANDROID_HOME environment variable => [Detail Configuration](https://reactnative.dev/docs/environment-setup)
5. npm run android
6. if error update module `react-native-bluetooth-escpos-printer` from http to https, comment `compile fileTree(dir: 'libs', include: ['*.jar'])`, add `implementation 'androidx.appcompat:appcompat:1.3.1' implementation 'androidx.core:core-ktx:1.6.0'` in dependencies, update sdk to 31.0.0 above from file `node_modules/react-native-bluetooth-escpos-printer/android/build.gradle`
7. update java import `import android.support.v4.app.ActivityCompat; import android.support.v4.content.ContextCompat;` to `import androidx.core.app.ActivityCompat; import androidx.core.content.ContextCompat;` from file `node_modules/react-native-bluetooth-escpos-printer/android/src/main/.../RNBluetoothManagerModule.java`
8. cd android run `./gradlew clean`
9. npm run android

### Build Generate APK (Android)

1. Open your Android Studio
2. Open project from folder `AppPos/android`
3. Open navbar on android studio and click tab `Build` => `Generate Signed Bundle or APK` => Under Key store path click `Create new`
<!-- 3. Build from source => [Detail Configuration](https://reactnative.dev/contributing/how-to-build-from-source) -->
<!-- 4. Open navbar on android studio and click tab `Build` => `Build Bundle(s)/APK(s)` => `Build APK(s)` -->

### Run DB MYSQL use docker compose

1. install docker
2. run `docker network create my_custom_network`
3. run docker compose via terminal `docker-compose up -d`

### Run api

1. cd `/api`
2. install php
3. install composer
4. run `php artisan key:generate`
5. run `php artisan config:cache`
6. run `php artisan route:cache`
7. run `php artisan serve`
8. use [ngrok](https://ngrok.com/) or [expose.dev](https://expose.dev/) for using api from your app