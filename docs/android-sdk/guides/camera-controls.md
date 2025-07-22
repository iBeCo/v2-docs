---
sidebar_position: 2
---

# Camera Controls

Learn how to control the map camera, zoom levels, and viewport in your Android application.

## Camera Basics

The camera controls how users view the map, including position, zoom level, rotation, and tilt.

### Camera Position

The camera position is defined by several parameters:

- **Target**: The geographic point the camera is looking at
- **Zoom**: The zoom level (higher values = closer view)
- **Bearing**: The camera's orientation in degrees (0 = north)
- **Tilt**: The camera's angle in degrees (0 = looking straight down)

### Setting Camera Position

```kotlin
// Set camera to specific coordinates
mapView.setCameraPosition(
    target = LatLng(43.6532, -79.3832),
    zoom = 18.0f,
    bearing = 45.0f,
    tilt = 30.0f
)
```

### Animating Camera Movement

Smooth camera transitions provide better user experience:

```kotlin
// Animate camera to new position
mapView.animateCamera(
    target = LatLng(43.6532, -79.3832),
    zoom = 20.0f,
    bearing = 0.0f,
    duration = 1000 // milliseconds
) { completed ->
    if (completed) {
        Log.d("BecoMap", "Camera animation completed")
    } else {
        Log.d("BecoMap", "Camera animation was interrupted")
    }
}
```

## Zoom Controls

### Programmatic Zoom

Control zoom levels programmatically:

```kotlin
// Zoom in by one level
mapView.zoomIn()

// Zoom out by one level
mapView.zoomOut()

// Set specific zoom level
mapView.setZoom(18.5f)

// Zoom to specific level with animation
mapView.animateZoom(19.0f, 500) // 500ms duration
```

### Zoom Limits

Set minimum and maximum zoom levels:

```kotlin
// Set zoom constraints
mapView.setZoomLimits(
    minZoom = 15.0f,
    maxZoom = 22.0f
)

// Get current zoom limits
val limits = mapView.getZoomLimits()
Log.d("BecoMap", "Min zoom: ${limits.min}, Max zoom: ${limits.max}")
```

### Zoom to Bounds

Automatically adjust camera to show specific area:

```kotlin
// Zoom to show all POIs
val bounds = LatLngBounds.Builder()
    .include(LatLng(43.6530, -79.3830))
    .include(LatLng(43.6535, -79.3825))
    .build()

mapView.zoomToBounds(bounds, padding = 100) // 100px padding
```

## Camera Constraints

### Restricting Camera Movement

Limit where users can pan the camera:

```kotlin
// Restrict camera to specific bounds
val bounds = LatLngBounds(
    southwest = LatLng(43.6500, -79.3900),
    northeast = LatLng(43.6600, -79.3800)
)

mapView.setCameraBounds(bounds)

// Remove camera bounds
mapView.clearCameraBounds()
```

### Disable User Interactions

Control which gestures are allowed:

```kotlin
// Disable specific gestures
mapView.settings.apply {
    isZoomGesturesEnabled = false
    isPanGesturesEnabled = false
    isRotateGesturesEnabled = false
    isTiltGesturesEnabled = false
    isScrollGesturesEnabled = true
}

// Re-enable all gestures
mapView.settings.enableAllGestures()
```

## Camera Events

### Listening to Camera Changes

Monitor camera movements and respond accordingly:

```kotlin
// Listen to camera position changes
mapView.setOnCameraChangeListener { cameraPosition ->
    Log.d("BecoMap", "Camera moved to: ${cameraPosition.target}")
    Log.d("BecoMap", "Zoom level: ${cameraPosition.zoom}")
    Log.d("BecoMap", "Bearing: ${cameraPosition.bearing}")
    Log.d("BecoMap", "Tilt: ${cameraPosition.tilt}")
    
    // Update UI based on camera position
    updateLocationInfo(cameraPosition.target)
}

// Listen for when camera stops moving
mapView.setOnCameraIdleListener {
    Log.d("BecoMap", "Camera movement finished")
    
    // Good time to load additional data or update UI
    loadNearbyPOIs()
}

// Listen for camera movement start
mapView.setOnCameraMoveStartedListener { reason ->
    when (reason) {
        CameraMoveStartedReason.GESTURE -> {
            Log.d("BecoMap", "Camera moved by user gesture")
        }
        CameraMoveStartedReason.API_ANIMATION -> {
            Log.d("BecoMap", "Camera moved by API call")
        }
        CameraMoveStartedReason.DEVELOPER_ANIMATION -> {
            Log.d("BecoMap", "Camera moved by developer animation")
        }
    }
}
```

## Advanced Camera Features

### Following User Location

Make the camera follow the user's location:

```kotlin
// Enable location following
mapView.setLocationFollowingEnabled(true)

// Set following mode
mapView.setLocationFollowingMode(LocationFollowingMode.FOLLOW_WITH_BEARING)

// Available following modes:
// - NONE: No following
// - FOLLOW: Follow location only
// - FOLLOW_WITH_BEARING: Follow location and rotation
```

### Custom Camera Animations

Create complex camera animations:

```kotlin
// Create custom camera animation
val cameraUpdate = CameraUpdateFactory.newLatLngZoom(
    LatLng(43.6532, -79.3832),
    18.0f
)

mapView.animateCamera(cameraUpdate, 2000) { completed ->
    if (completed) {
        // Chain another animation
        val nextUpdate = CameraUpdateFactory.newBearing(90.0f)
        mapView.animateCamera(nextUpdate, 1000)
    }
}

// Animate with custom interpolator
mapView.animateCamera(
    cameraUpdate,
    duration = 2000,
    interpolator = AccelerateDecelerateInterpolator()
)
```

### Camera Presets

Save and restore camera positions:

```kotlin
// Save current camera position
val currentPosition = mapView.getCameraPosition()
saveToPreferences("camera_preset_1", currentPosition)

// Restore saved camera position
val savedPosition = loadFromPreferences("camera_preset_1")
mapView.setCameraPosition(savedPosition)

// Create preset positions
val presets = mapOf(
    "entrance" to CameraPosition(LatLng(43.6530, -79.3830), 19.0f, 0.0f, 0.0f),
    "lobby" to CameraPosition(LatLng(43.6532, -79.3832), 20.0f, 0.0f, 0.0f),
    "overview" to CameraPosition(LatLng(43.6531, -79.3831), 17.0f, 0.0f, 0.0f)
)

// Quick navigation to presets
fun goToPreset(presetName: String) {
    presets[presetName]?.let { position ->
        mapView.animateCamera(position, 1500)
    }
}
```

## Camera Utilities

### Screen to Map Coordinates

Convert screen coordinates to map coordinates:

```kotlin
// Convert screen point to map coordinates
val screenPoint = Point(100, 200) // x, y in pixels
val mapCoordinates = mapView.screenToMap(screenPoint)
Log.d("BecoMap", "Screen point maps to: ${mapCoordinates.latitude}, ${mapCoordinates.longitude}")

// Convert map coordinates to screen point
val mapPoint = LatLng(43.6532, -79.3832)
val screenCoordinates = mapView.mapToScreen(mapPoint)
Log.d("BecoMap", "Map point appears at screen: ${screenCoordinates.x}, ${screenCoordinates.y}")
```

### Visible Region

Get the currently visible map area:

```kotlin
// Get visible region bounds
val visibleBounds = mapView.getVisibleRegion()
Log.d("BecoMap", "Visible area: ${visibleBounds.southwest} to ${visibleBounds.northeast}")

// Check if point is visible
val point = LatLng(43.6532, -79.3832)
val isVisible = visibleBounds.contains(point)
Log.d("BecoMap", "Point is visible: $isVisible")
```

## Best Practices

### Smooth Animations

1. **Use appropriate durations**: 300-1500ms for most animations
2. **Chain animations**: Wait for completion before starting next
3. **Respect user gestures**: Don't interrupt user-initiated movements

### Performance Considerations

1. **Limit animation frequency**: Avoid too many rapid camera changes
2. **Use camera idle events**: Perform heavy operations when camera stops
3. **Optimize for different devices**: Adjust animation complexity based on device capabilities

### User Experience

1. **Provide visual feedback**: Show loading states during camera movements
2. **Maintain context**: Don't disorient users with sudden camera jumps
3. **Respect accessibility**: Provide alternatives for users with motion sensitivity

## Next Steps

- [Navigation](./navigation) - Implement turn-by-turn navigation
- [Location Services](./location-services) - Work with user location
- [POI Management](./poi-management) - Display points of interest
- [Examples](../examples/basic-map) - See camera controls in action
