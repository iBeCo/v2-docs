---
sidebar_position: 1
---

# Basic Map Example

A complete example showing how to display a basic indoor map with essential features.

## Overview

This example demonstrates:
- Basic map setup and initialization
- Loading a venue map
- Handling map events
- Basic error handling
- Proper lifecycle management

## Complete Implementation

### MainActivity.kt

```kotlin title="MainActivity.kt"
package com.example.becomap

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.beco.BecoSDK
import com.beco.BecoMapView
import com.beco.models.LatLng
import com.beco.models.MapLoadResult

class MainActivity : AppCompatActivity() {
    
    companion object {
        private const val LOCATION_PERMISSION_REQUEST_CODE = 1001
        private const val TAG = "BecoMapExample"
    }
    
    private lateinit var mapView: BecoMapView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Initialize Beco SDK
        BecoSDK.initialize(this, "YOUR_API_KEY")
        
        // Setup map view
        setupMapView()
        
        // Request location permissions
        requestLocationPermissions()
    }
    
    private fun setupMapView() {
        mapView = findViewById(R.id.map_view)
        
        // Set up map event listeners
        setupMapListeners()
        
        // Load the map
        loadMap()
    }
    
    private fun setupMapListeners() {
        // Map click listener
        mapView.setOnMapClickListener { point ->
            Log.d(TAG, "Map clicked at: ${point.latitude}, ${point.longitude}")
            Toast.makeText(this, "Clicked at floor ${point.floor}", Toast.LENGTH_SHORT).show()
        }
        
        // Floor change listener
        mapView.setOnFloorChangeListener { floor ->
            Log.d(TAG, "Floor changed to: $floor")
            Toast.makeText(this, "Now viewing floor $floor", Toast.LENGTH_SHORT).show()
        }
        
        // Camera change listener
        mapView.setOnCameraChangeListener { cameraPosition ->
            Log.d(TAG, "Camera position: ${cameraPosition.target}, zoom: ${cameraPosition.zoom}")
        }
        
        // Camera idle listener
        mapView.setOnCameraIdleListener {
            Log.d(TAG, "Camera movement finished")
        }
    }
    
    private fun loadMap() {
        // Replace with your actual venue ID
        val venueId = "your-venue-id"
        
        mapView.loadMap(venueId) { result ->
            when (result) {
                is MapLoadResult.Success -> {
                    Log.d(TAG, "Map loaded successfully: ${result.venue.name}")
                    Toast.makeText(this, "Map loaded: ${result.venue.name}", Toast.LENGTH_LONG).show()
                    
                    // Configure map after successful load
                    configureMap()
                }
                is MapLoadResult.Error -> {
                    Log.e(TAG, "Failed to load map: ${result.message}")
                    Toast.makeText(this, "Failed to load map: ${result.message}", Toast.LENGTH_LONG).show()
                }
                is MapLoadResult.NetworkError -> {
                    Log.e(TAG, "Network error loading map")
                    Toast.makeText(this, "Network error. Please check your connection.", Toast.LENGTH_LONG).show()
                }
                is MapLoadResult.AuthenticationError -> {
                    Log.e(TAG, "Authentication error")
                    Toast.makeText(this, "Invalid API key. Please contact support.", Toast.LENGTH_LONG).show()
                }
            }
        }
    }
    
    private fun configureMap() {
        // Enable location services if permission is granted
        if (hasLocationPermission()) {
            mapView.setLocationEnabled(true)
            mapView.showUserLocation(true)
        }
        
        // Set initial camera position
        mapView.setInitialView(
            floor = 1,
            center = LatLng(43.6532, -79.3832), // Replace with your venue coordinates
            zoom = 18.0f
        )
        
        // Configure map options
        mapView.settings.apply {
            isZoomGesturesEnabled = true
            isPanGesturesEnabled = true
            isRotateGesturesEnabled = true
            isTiltGesturesEnabled = false
        }
    }
    
    private fun requestLocationPermissions() {
        if (!hasLocationPermission()) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(
                    Manifest.permission.ACCESS_FINE_LOCATION,
                    Manifest.permission.ACCESS_COARSE_LOCATION
                ),
                LOCATION_PERMISSION_REQUEST_CODE
            )
        }
    }
    
    private fun hasLocationPermission(): Boolean {
        return ContextCompat.checkSelfPermission(
            this,
            Manifest.permission.ACCESS_FINE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
    }
    
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        
        when (requestCode) {
            LOCATION_PERMISSION_REQUEST_CODE -> {
                if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Log.d(TAG, "Location permission granted")
                    // Enable location features
                    mapView.setLocationEnabled(true)
                    mapView.showUserLocation(true)
                } else {
                    Log.d(TAG, "Location permission denied")
                    Toast.makeText(this, "Location permission is required for full functionality", Toast.LENGTH_LONG).show()
                }
            }
        }
    }
    
    // Lifecycle management
    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }
    
    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }
    
    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }
    
    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }
}
```

### activity_main.xml

```xml title="app/src/main/res/layout/activity_main.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <!-- Optional toolbar -->
    <androidx.appcompat.widget.Toolbar
        android:id="@+id/toolbar"
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize"
        android:background="?attr/colorPrimary"
        android:theme="@style/ThemeOverlay.AppCompat.Dark.ActionBar"
        app:title="Beco Map Example" />

    <!-- Map view takes up remaining space -->
    <com.beco.BecoMapView
        android:id="@+id/map_view"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1" />

</LinearLayout>
```

### AndroidManifest.xml

```xml title="app/src/main/AndroidManifest.xml"
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.becomap">

    <!-- Required permissions -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme">

        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="portrait">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>
```

### build.gradle (app level)

```gradle title="app/build.gradle"
android {
    compileSdk 34

    defaultConfig {
        applicationId "com.example.becomap"
        minSdk 21
        targetSdk 34
        versionCode 1
        versionName "1.0"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
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
    
    // Android dependencies
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'androidx.core:core-ktx:1.12.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
    implementation 'com.google.android.material:material:1.11.0'
}
```

## Key Features Demonstrated

### 1. SDK Initialization
- Proper SDK initialization with API key
- Error handling for initialization failures

### 2. Map Loading
- Asynchronous map loading with callbacks
- Comprehensive error handling for different failure types
- Success handling with venue information

### 3. Event Handling
- Map click events with coordinate information
- Floor change notifications
- Camera movement tracking

### 4. Permission Management
- Runtime permission requests for location services
- Graceful handling of permission denial
- Conditional feature enabling based on permissions

### 5. Lifecycle Management
- Proper map lifecycle handling
- Memory management
- Resource cleanup

## Running the Example

1. **Replace placeholders**: Update `YOUR_API_KEY` and `your-venue-id` with actual values
2. **Build and run**: Install the app on a device or emulator
3. **Grant permissions**: Allow location permissions when prompted
4. **Interact with map**: Tap, zoom, and navigate the map

## Next Steps

- [Navigation Example](./navigation-app) - Add navigation features
- [POI Search Example](./poi-search) - Implement point of interest search
- [Camera Controls](../guides/camera-controls) - Learn advanced camera features
- [Location Services](../guides/location-services) - Implement location tracking
