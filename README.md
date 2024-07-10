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

### Build Generate APK (Android)

1. Open your Android Studio
2. Open project from folder `AppPos/android`
3. Open navbar on android studio and click tab `Build` => `Generate Signed Bundle or APK` => Under Key store path click `Create new`
<!-- 3. Build from source => [Detail Configuration](https://reactnative.dev/contributing/how-to-build-from-source) -->
<!-- 4. Open navbar on android studio and click tab `Build` => `Build Bundle(s)/APK(s)` => `Build APK(s)` -->

### Run DB MYSQL use docker compose
1. cd  `mysql-phpmyadmin`
2. run docker compose via terminal `docker-compose up -d`

#### if error phpmyadmin connect to mysql
1. run `docker exec -it phpmyadmin /bin/sh`
2. edit `/etc/hosts`
1. add `172.17.0.2 mysql` use `nano` or `vi`