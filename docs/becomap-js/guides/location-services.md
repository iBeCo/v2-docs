---
sidebar_position: 4
---

# Location Services

Work with real-time positioning and location tracking.

## Basic Location Setup

```kotlin
mapView.setLocationEnabled(true)

val locationManager = mapView.getLocationManager()
locationManager.startLocationUpdates()
```

## Location Tracking

```kotlin
locationManager.setLocationListener { location ->
    Log.d("Location", "User at: ${location.latitude}, ${location.longitude}")
}
```
