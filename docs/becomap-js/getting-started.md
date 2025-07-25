---
sidebar_position: 1
---

# Getting Started

Welcome to the Beco Android SDK! This guide will help you integrate indoor navigation and mapping features into your Android applications.

## Overview

The Beco Android SDK provides powerful tools for:

- **Indoor Mapping**: Display detailed indoor maps with multiple floors
- **Navigation**: Provide turn-by-turn navigation within buildings
- **Location Services**: Real-time positioning and tracking
- **Points of Interest**: Manage and display POIs on your maps
- **Customization**: Extensive styling and configuration options

## Prerequisites

Before installing the Beco Android SDK, ensure you have:

- **Android Studio** 4.0 or higher
- **Minimum SDK Version**: API level 21 (Android 5.0)
- **Target SDK Version**: API level 34 or higher
- **Java 8** or higher / **Kotlin** support

## Installation

Add the Beco SDK to your app's `build.gradle` file:

```gradle
dependencies {
    implementation 'com.beco:android-sdk:1.0.0'

    // Required dependencies
    implementation 'com.google.android.gms:play-services-location:21.0.1'
    implementation 'com.google.android.gms:play-services-maps:18.2.0'
}
```

## Permissions

Add the following permissions to your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
```

## SDK Initialization

Initialize the Beco SDK in your Application class or main Activity:

```kotlin
import com.beco.BecoSDK

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Initialize Beco SDK
        BecoSDK.initialize(this, "YOUR_API_KEY")
    }
}
```

## Basic Map Setup

Add a map view to your layout:

```xml
<com.beco.BecoMapView
    android:id="@+id/map_view"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

## Load Your First Map

```kotlin
val mapView = findViewById<BecoMapView>(R.id.map_view)
mapView.loadMap("your-venue-id")
```

## Next Steps

- [Installation](./installation) - Detailed installation instructions
- [Display a Map](./guides/display-a-map) - Learn about map configuration and customization
- [Camera Controls](./guides/camera-controls) - Control map camera and viewport
- [Navigation](./guides/navigation) - Implement turn-by-turn navigation
- [Examples](./examples/basic-map) - See complete working examples

## Support

Need help? Contact our [support team](mailto:support@beco.io) or check out our [API Reference](./reference/becomap-view).
