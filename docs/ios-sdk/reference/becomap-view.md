---
sidebar_position: 1
---

# BecoMapView

The main map view component for displaying indoor maps and handling user interactions.

## Class Declaration

```kotlin
class BecoMapView : View
```

## Overview

`BecoMapView` is the primary component for displaying indoor maps in your Android application. It provides comprehensive functionality for map rendering, user interaction, camera control, and location services.

## Public Methods

### Map Loading

#### loadMap()

Loads a map for the specified venue.

```kotlin
fun loadMap(
    venueId: String, 
    callback: (MapLoadResult) -> Unit
)
```

**Parameters:**
- `venueId`: The unique identifier for the venue
- `callback`: Callback function called when map loading completes

**Example:**
```kotlin
mapView.loadMap("venue-123") { result ->
    when (result) {
        is MapLoadResult.Success -> {
            Log.d("Map", "Loaded: ${result.venue.name}")
        }
        is MapLoadResult.Error -> {
            Log.e("Map", "Error: ${result.message}")
        }
    }
}
```

#### isMapLoaded()

Checks if a map is currently loaded.

```kotlin
fun isMapLoaded(): Boolean
```

**Returns:** `true` if a map is loaded, `false` otherwise

### Camera Control

#### setCameraPosition()

Sets the camera position on the map.

```kotlin
fun setCameraPosition(
    target: LatLng,
    zoom: Float,
    bearing: Float = 0.0f,
    tilt: Float = 0.0f
)
```

**Parameters:**
- `target`: The target location for the camera
- `zoom`: The zoom level (15.0 - 22.0)
- `bearing`: The camera bearing in degrees (0-360)
- `tilt`: The camera tilt in degrees (0-60)

#### animateCamera()

Animates the camera to a new position.

```kotlin
fun animateCamera(
    target: LatLng,
    zoom: Float,
    bearing: Float = 0.0f,
    tilt: Float = 0.0f,
    duration: Long = 1000,
    callback: ((Boolean) -> Unit)? = null
)
```

**Parameters:**
- `target`: Target camera position
- `zoom`: Target zoom level
- `bearing`: Target bearing
- `tilt`: Target tilt
- `duration`: Animation duration in milliseconds
- `callback`: Optional completion callback

#### getCameraPosition()

Gets the current camera position.

```kotlin
fun getCameraPosition(): CameraPosition
```

**Returns:** Current camera position with target, zoom, bearing, and tilt

### Floor Management

#### setCurrentFloor()

Sets the currently displayed floor.

```kotlin
fun setCurrentFloor(floor: Int)
```

**Parameters:**
- `floor`: The floor number to display

#### getCurrentFloor()

Gets the currently displayed floor.

```kotlin
fun getCurrentFloor(): Int
```

**Returns:** Current floor number

#### getAvailableFloors()

Gets all available floors for the loaded venue.

```kotlin
fun getAvailableFloors(): List<Int>
```

**Returns:** List of available floor numbers

### Location Services

#### setLocationEnabled()

Enables or disables location services.

```kotlin
fun setLocationEnabled(enabled: Boolean)
```

**Parameters:**
- `enabled`: Whether to enable location services

#### showUserLocation()

Shows or hides the user location indicator.

```kotlin
fun showUserLocation(show: Boolean)
```

**Parameters:**
- `show`: Whether to show user location

#### getUserLocation()

Gets the current user location if available.

```kotlin
fun getUserLocation(): BecoLocation?
```

**Returns:** Current user location or null if not available

### Map Configuration

#### setMapOptions()

Configures map display options.

```kotlin
fun setMapOptions(options: MapOptions)
```

**Parameters:**
- `options`: Map configuration options

#### setMapStyle()

Applies custom styling to the map.

```kotlin
fun setMapStyle(style: MapStyle)
```

**Parameters:**
- `style`: Custom map styling configuration

### Zoom Control

#### zoomIn()

Zooms in by one level.

```kotlin
fun zoomIn()
```

#### zoomOut()

Zooms out by one level.

```kotlin
fun zoomOut()
```

#### setZoom()

Sets a specific zoom level.

```kotlin
fun setZoom(zoom: Float)
```

**Parameters:**
- `zoom`: Target zoom level (15.0 - 22.0)

#### setZoomLimits()

Sets minimum and maximum zoom levels.

```kotlin
fun setZoomLimits(minZoom: Float, maxZoom: Float)
```

**Parameters:**
- `minZoom`: Minimum allowed zoom level
- `maxZoom`: Maximum allowed zoom level

## Properties

### isLocationEnabled

```kotlin
var isLocationEnabled: Boolean
```

Gets or sets whether location services are enabled on the map.

### currentFloor

```kotlin
val currentFloor: Int
```

Gets the currently displayed floor number (read-only).

### cameraPosition

```kotlin
val cameraPosition: CameraPosition
```

Gets the current camera position (read-only).

### settings

```kotlin
val settings: MapSettings
```

Gets the map settings object for configuring user interactions.

## Event Listeners

### setOnMapClickListener()

Sets a listener for map click events.

```kotlin
fun setOnMapClickListener(listener: (LatLng) -> Unit)
```

**Parameters:**
- `listener`: Function called when map is clicked

### setOnMapLongClickListener()

Sets a listener for map long press events.

```kotlin
fun setOnMapLongClickListener(listener: (LatLng) -> Unit)
```

### setOnFloorChangeListener()

Sets a listener for floor change events.

```kotlin
fun setOnFloorChangeListener(listener: (Int) -> Unit)
```

### setOnCameraChangeListener()

Sets a listener for camera position changes.

```kotlin
fun setOnCameraChangeListener(listener: (CameraPosition) -> Unit)
```

### setOnCameraIdleListener()

Sets a listener for when camera movement stops.

```kotlin
fun setOnCameraIdleListener(listener: () -> Unit)
```

### setOnLocationChangeListener()

Sets a listener for user location updates.

```kotlin
fun setOnLocationChangeListener(listener: (BecoLocation) -> Unit)
```

## Lifecycle Methods

### onResume()

Call this method in your Activity's `onResume()`.

```kotlin
fun onResume()
```

### onPause()

Call this method in your Activity's `onPause()`.

```kotlin
fun onPause()
```

### onDestroy()

Call this method in your Activity's `onDestroy()`.

```kotlin
fun onDestroy()
```

### onLowMemory()

Call this method in your Activity's `onLowMemory()`.

```kotlin
fun onLowMemory()
```

## Utility Methods

### screenToMap()

Converts screen coordinates to map coordinates.

```kotlin
fun screenToMap(screenPoint: Point): LatLng
```

### mapToScreen()

Converts map coordinates to screen coordinates.

```kotlin
fun mapToScreen(mapPoint: LatLng): Point
```

### getVisibleRegion()

Gets the currently visible map region.

```kotlin
fun getVisibleRegion(): LatLngBounds
```

## Example Usage

```kotlin
class MapActivity : AppCompatActivity() {
    private lateinit var mapView: BecoMapView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_map)
        
        mapView = findViewById(R.id.map_view)
        
        // Load map
        mapView.loadMap("venue-id") { result ->
            if (result is MapLoadResult.Success) {
                setupMap()
            }
        }
    }
    
    private fun setupMap() {
        // Configure camera
        mapView.setCameraPosition(
            target = LatLng(43.6532, -79.3832),
            zoom = 18.0f
        )
        
        // Enable location
        mapView.setLocationEnabled(true)
        
        // Set up listeners
        mapView.setOnMapClickListener { point ->
            Log.d("Map", "Clicked: $point")
        }
        
        mapView.setOnFloorChangeListener { floor ->
            Log.d("Map", "Floor: $floor")
        }
    }
    
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
}
```

## See Also

- [NavigationManager](./navigation-manager) - For navigation functionality
- [POIManager](./poi-manager) - For managing points of interest
- [LocationManager](./location-manager) - For location services
- [Display a Map Guide](../guides/display-a-map) - Comprehensive usage guide
