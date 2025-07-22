---
sidebar_position: 2
---

# Installation

Detailed instructions for installing and configuring the Beco Android SDK in your project.

## System Requirements

### Development Environment

- **Android Studio**: 4.0 or higher (recommended: latest stable version)
- **Gradle**: 7.0 or higher
- **Java**: 8 or higher
- **Kotlin**: 1.5.0 or higher (optional but recommended)

### Target Platform

- **Minimum SDK**: API level 21 (Android 5.0 Lollipop)
- **Target SDK**: API level 34 (Android 14)
- **Compile SDK**: API level 34 or higher

## Installation Methods

### Method 1: Gradle Dependency (Recommended)

Add the Beco SDK to your app-level `build.gradle` file:

```gradle title="app/build.gradle"
android {
    compileSdk 34

    defaultConfig {
        minSdk 21
        targetSdk 34
    }

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }

    kotlinOptions {
        jvmTarget = '1.8'
    }
}

dependencies {
    // Beco Android SDK
    implementation 'com.beco:android-sdk:1.0.0'

    // Required dependencies
    implementation 'com.google.android.gms:play-services-location:21.0.1'
    implementation 'com.google.android.gms:play-services-maps:18.2.0'
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'androidx.core:core-ktx:1.12.0'
}
```

## Configuration

### Android Manifest

Add the required permissions to your `AndroidManifest.xml`:

```xml title="app/src/main/AndroidManifest.xml"
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <!-- Required permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />

    <!-- Optional permissions for enhanced features -->
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />

    <application
        android:name=".MyApplication"
        android:allowBackup="true"
        android:theme="@style/AppTheme">

        <!-- Your activities -->

    </application>
</manifest>
```

## Verification

### Test Installation

Create a simple test to verify the SDK is properly installed:

```kotlin title="MainActivity.kt"
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.beco.BecoSDK

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Test SDK initialization
        try {
            BecoSDK.initialize(this, "test-api-key")
            println("Beco SDK initialized successfully!")
        } catch (e: Exception) {
            println("Failed to initialize Beco SDK: ${e.message}")
        }
    }
}
```

## Troubleshooting

### Common Issues

**Error**: `Could not resolve com.beco:android-sdk:1.0.0`

**Solution**: Ensure you have access to our Maven repository. Contact support for repository credentials.

**Error**: Location permissions not granted

**Solution**: Request runtime permissions for location access:

```kotlin
if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
    != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this,
        arrayOf(Manifest.permission.ACCESS_FINE_LOCATION),
        LOCATION_PERMISSION_REQUEST_CODE)
}
```

## Next Steps

- [Getting Started](./getting-started) - Initialize the SDK and create your first map
- [Display a Map](./guides/display-a-map) - Learn about map configuration
- [Examples](./examples/basic-map) - See complete working examples

## Support

Having installation issues? Contact our [support team](mailto:support@beco.io) with your Android Studio version, Gradle version, and complete error logs.
