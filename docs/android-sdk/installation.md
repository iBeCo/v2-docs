---
sidebar_position: 2
---

# Installation

Learn how to install and set up the Beco Android SDK in your Android project.

## Prerequisites

Before installing the Beco Android SDK, ensure you have:

- **Android Studio** 4.0 or higher
- **Minimum SDK Version**: API level 21 (Android 5.0)
- **Target SDK Version**: API level 34 or higher

## Installation

Add the Beco SDK to your app's `build.gradle` file:

```gradle
dependencies {
    implementation 'com.beco:android-sdk:1.0.0'
}
```

## Permissions

Add the following permissions to your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

## Verification

To verify the installation, add this import to your Activity:

```kotlin
import com.beco.BecoSDK
```

If the import resolves without errors, the installation was successful!

## Next Steps

Continue with the getting started guide to initialize the SDK and create your first map.
