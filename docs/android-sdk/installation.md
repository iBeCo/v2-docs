# Installation Guide

This guide covers the detailed installation process for the Becomap Android SDK.

## Requirements

- **Minimum SDK Version**: API 21 (Android 5.0)
- **Target SDK Version**: API 33 or higher
- **Kotlin Version**: 1.6.0 or higher
- **Gradle Version**: 7.0 or higher

## Setup

### 1. Repository Configuration

Add the Becomap repository to your project-level `build.gradle`:

```gradle
allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url "https://maven.becomap.com/releases" }
    }
}
```

### 2. Dependency Management

Add the SDK dependency to your app-level `build.gradle`:

```gradle
dependencies {
    implementation 'com.becomap:android-sdk:1.0.0'
    implementation 'com.becomap:android-navigation:1.0.0'
    implementation 'com.becomap:android-analytics:1.0.0'
}
```

### 3. ProGuard Configuration

If you're using ProGuard, add the following rules to your `proguard-rules.pro`:

```proguard
-keep class com.becomap.** { *; }
-keep interface com.becomap.** { *; }
```

### 4. Manifest Configuration

Update your `AndroidManifest.xml` with required permissions and configurations:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    
    <!-- Required Permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    
    <!-- Optional Permissions -->
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.VIBRATE" />
    
    <application>
        <!-- Your application configuration -->
    </application>
</manifest>
```

## Verification

To verify your installation, add this test code to your main activity:

```kotlin
import com.becomap.BecomapSDK

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Test SDK initialization
        try {
            BecomapSDK.initialize(this, "test_key")
            Log.d("Becomap", "SDK initialized successfully")
        } catch (e: Exception) {
            Log.e("Becomap", "SDK initialization failed: ${e.message}")
        }
    }
}
```

## Troubleshooting

### Common Issues

1. **Build Errors**: Ensure you're using compatible versions of Android Studio and Gradle
2. **Permission Denied**: Make sure all required permissions are declared in the manifest
3. **Network Issues**: Verify your internet connection and API key validity

### Support

If you encounter any issues during installation, please contact our support team or check our [troubleshooting guide](./troubleshooting). 