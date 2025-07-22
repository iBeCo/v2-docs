# Map Configuration

Learn how to configure and customize maps in your Android application using the Becomap SDK.

## Basic Map Setup

### Creating a Map View

```kotlin
import com.becomap.BecomapView
import com.becomap.MapConfiguration

class MapActivity : AppCompatActivity() {
    private lateinit var mapView: BecomapView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_map)
        
        mapView = findViewById(R.id.map_view)
        
        // Configure the map
        val config = MapConfiguration.Builder()
            .venueId("your_venue_id")
            .showUserLocation(true)
            .showPointsOfInterest(true)
            .build()
            
        mapView.configure(config)
    }
}
```

## Map Customization

### Styling Options

```kotlin
val styleConfig = MapStyleConfiguration.Builder()
    .backgroundColor(Color.WHITE)
    .floorIndicatorColor(Color.BLUE)
    .pathColor(Color.GREEN)
    .userLocationColor(Color.RED)
    .build()

mapView.setStyle(styleConfig)
```

### Interactive Features

```kotlin
// Enable map interactions
mapView.setInteractionEnabled(true)

// Set zoom limits
mapView.setMinZoom(1.0f)
mapView.setMaxZoom(5.0f)

// Enable floor switching
mapView.setFloorSwitchingEnabled(true)
```

## Points of Interest

### Adding Custom POIs

```kotlin
val poi = PointOfInterest.Builder()
    .id("custom_poi_1")
    .name("Custom Store")
    .position(latitude, longitude)
    .floor(1)
    .category("retail")
    .build()

mapView.addPointOfInterest(poi)
```

### POI Categories

```kotlin
// Show only specific POI categories
mapView.setVisiblePoiCategories(listOf("restaurant", "restroom", "elevator"))

// Customize POI appearance
val poiStyle = PoiStyle.Builder()
    .icon(R.drawable.custom_poi_icon)
    .textColor(Color.BLACK)
    .textSize(14f)
    .build()

mapView.setPoiStyle("restaurant", poiStyle)
```

## Event Handling

### Map Event Listeners

```kotlin
mapView.setOnMapClickListener { position ->
    Log.d("Map", "Clicked at: $position")
}

mapView.setOnPoiClickListener { poi ->
    Log.d("Map", "POI clicked: ${poi.name}")
}

mapView.setOnFloorChangedListener { floor ->
    Log.d("Map", "Floor changed to: $floor")
}
```

## Performance Optimization

### Memory Management

```kotlin
override fun onDestroy() {
    super.onDestroy()
    mapView.destroy()
}
```

### Caching

```kotlin
// Enable offline caching
mapView.setOfflineMode(true)

// Set cache size
mapView.setCacheSize(100 * 1024 * 1024) // 100MB
```

## Advanced Configuration

### Multi-floor Support

```kotlin
val multiFloorConfig = MultiFloorConfiguration.Builder()
    .defaultFloor(1)
    .showFloorIndicator(true)
    .floorTransitionAnimation(true)
    .build()

mapView.setMultiFloorConfiguration(multiFloorConfig)
```

### Accessibility

```kotlin
// Enable accessibility features
mapView.setAccessibilityEnabled(true)

// Set accessibility labels
mapView.setAccessibilityLabel("Indoor Navigation Map")
``` 