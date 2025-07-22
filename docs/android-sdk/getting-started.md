# Getting Started with Android SDK

Welcome to the Becomap Android SDK! This guide will help you integrate indoor navigation and mapping features into your Android applications.

## Prerequisites

- Android Studio 4.0 or higher
- Android API level 21 (Android 5.0) or higher
- A Becomap account and API key

## Installation

### Step 1: Add the dependency

Add the following to your `app/build.gradle` file:

```gradle
dependencies {
    implementation 'com.becomap:android-sdk:1.0.0'
}
```

### Step 2: Initialize the SDK

In your `Application` class or main activity:

```kotlin
import com.becomap.BecomapSDK

class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        BecomapSDK.initialize(this, "YOUR_API_KEY")
    }
}
```

### Step 3: Add permissions

Add the following permissions to your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

## Basic Usage

### Displaying a Map

```kotlin
import com.becomap.BecomapView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val mapView = findViewById<BecomapView>(R.id.map_view)
        mapView.loadVenue("YOUR_VENUE_ID")
    }
}
```

## Next Steps

- [Installation Guide](./installation)
- [Map Configuration](./map-configuration) 