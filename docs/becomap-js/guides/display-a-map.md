---
sidebar_position: 1
---

# Display a Map

Learn how to display and configure indoor maps in your Android application.

## Basic Map Display

The `BecoMapView` is the primary component for displaying indoor maps. Here's how to set it up:

### XML Layout

```xml title="activity_main.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <com.beco.BecoMapView
        android:id="@+id/map_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:beco_venue_id="your-venue-id"
        app:beco_initial_floor="1" />

</LinearLayout>
```

### Kotlin Code

```kotlin title="MainActivity.kt"
class MapActivity : AppCompatActivity() {
    private lateinit var mapView: BecoMapView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        mapView = findViewById(R.id.map_view)
        
        // Load the map
        mapView.loadMap("your-venue-id") { result ->
            when (result) {
                is MapLoadResult.Success -> {
                    // Map loaded successfully
                    Log.d("BecoMap", "Map loaded: ${result.venue.name}")
                    setupMapFeatures()
                }
                is MapLoadResult.Error -> {
                    // Handle error
                    Log.e("BecoMap", "Failed to load map: ${result.message}")
                    showErrorDialog(result.message)
                }
            }
        }
    }
    
    private fun setupMapFeatures() {
        // Configure map after successful load
        mapView.setLocationEnabled(true)
        mapView.showUserLocation(true)
    }
}
```

## Map Configuration

### Setting Initial View

Configure the initial camera position and floor when the map loads:

```kotlin
mapView.setInitialView(
    floor = 1,
    center = LatLng(43.6532, -79.3832),
    zoom = 18.0f,
    bearing = 0.0f
)
```

### Map Options

Customize map behavior with various options:

```kotlin
val mapOptions = MapOptions.Builder()
    .setShowFloorPicker(true)
    .setShowCompass(true)
    .setShowZoomControls(false)
    .setAllowRotation(true)
    .setAllowTilt(false)
    .build()

mapView.setMapOptions(mapOptions)
```

### Customizing Map Style

Apply custom styling to match your app's design:

```kotlin
val mapStyle = MapStyle.Builder()
    .setBackgroundColor(Color.WHITE)
    .setWallColor(Color.GRAY)
    .setFloorColor(Color.LIGHT_GRAY)
    .setPathColor(Color.BLUE)
    .setTextColor(Color.BLACK)
    .build()

mapView.setMapStyle(mapStyle)
```

## Map Events

Listen to map events to respond to user interactions:

### Basic Events

```kotlin
// Map click events
mapView.setOnMapClickListener { point ->
    Log.d("BecoMap", "Map clicked at: ${point.latitude}, ${point.longitude}")
    Log.d("BecoMap", "Floor: ${point.floor}")
}

// Map long press events
mapView.setOnMapLongClickListener { point ->
    Log.d("BecoMap", "Map long pressed at: ${point.latitude}, ${point.longitude}")
    showContextMenu(point)
}

// Floor change events
mapView.setOnFloorChangeListener { floor ->
    Log.d("BecoMap", "Floor changed to: $floor")
    updateFloorIndicator(floor)
}
```

### Camera Events

```kotlin
// Camera movement events
mapView.setOnCameraChangeListener { cameraPosition ->
    Log.d("BecoMap", "Camera moved to: ${cameraPosition.target}")
    Log.d("BecoMap", "Zoom level: ${cameraPosition.zoom}")
}

// Camera idle events
mapView.setOnCameraIdleListener {
    Log.d("BecoMap", "Camera movement finished")
    // Good time to update UI or load additional data
}
```

## Advanced Features

### Multi-Floor Support

Handle buildings with multiple floors:

```kotlin
// Get available floors
val floors = mapView.getAvailableFloors()
Log.d("BecoMap", "Available floors: $floors")

// Switch to specific floor
mapView.setCurrentFloor(2)

// Listen for floor changes
mapView.setOnFloorChangeListener { newFloor ->
    updateFloorSelector(newFloor)
}
```

### Map Bounds

Restrict camera movement to specific areas:

```kotlin
// Set map bounds
val bounds = LatLngBounds(
    southwest = LatLng(43.6500, -79.3900),
    northeast = LatLng(43.6600, -79.3800)
)

mapView.setCameraBounds(bounds)
```

### Loading States

Handle different map loading states:

```kotlin
mapView.setOnMapLoadStateChangeListener { state ->
    when (state) {
        MapLoadState.LOADING -> {
            showLoadingIndicator(true)
        }
        MapLoadState.LOADED -> {
            showLoadingIndicator(false)
            enableMapInteractions(true)
        }
        MapLoadState.ERROR -> {
            showLoadingIndicator(false)
            showErrorMessage("Failed to load map")
        }
    }
}
```

## Lifecycle Management

Properly manage the map view lifecycle:

```kotlin
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
```

## Best Practices

### Performance Tips

1. **Lazy Loading**: Only load maps when needed
2. **Memory Management**: Properly dispose of map resources
3. **Caching**: Enable map tile caching for better performance

```kotlin
// Enable caching
mapView.setCacheEnabled(true)
mapView.setCacheSize(50 * 1024 * 1024) // 50MB cache
```

### Error Handling

Always implement proper error handling:

```kotlin
mapView.loadMap("venue-id") { result ->
    when (result) {
        is MapLoadResult.Success -> {
            // Success handling
        }
        is MapLoadResult.NetworkError -> {
            showRetryDialog("Network error. Please check your connection.")
        }
        is MapLoadResult.AuthenticationError -> {
            showErrorDialog("Invalid API key. Please contact support.")
        }
        is MapLoadResult.VenueNotFound -> {
            showErrorDialog("Venue not found. Please check the venue ID.")
        }
        is MapLoadResult.UnknownError -> {
            showErrorDialog("An unexpected error occurred: ${result.message}")
        }
    }
}
```

## Next Steps

- [Camera Controls](./camera-controls) - Learn how to control the map camera
- [Navigation](./navigation) - Add navigation features to your map
- [POI Management](./poi-management) - Display and manage points of interest
- [Examples](../examples/basic-map) - See complete working examples
