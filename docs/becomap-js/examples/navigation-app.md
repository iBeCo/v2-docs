---
sidebar_position: 2
---

# Navigation App Example

A complete navigation app with turn-by-turn directions.

## NavigationActivity.kt

```kotlin
class NavigationActivity : AppCompatActivity() {
    private lateinit var mapView: BecoMapView
    private lateinit var navigationManager: NavigationManager
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_navigation)
        
        setupMap()
        setupNavigation()
    }
    
    private fun setupMap() {
        mapView = findViewById(R.id.map_view)
        mapView.loadMap("your-venue-id")
    }
    
    private fun setupNavigation() {
        navigationManager = mapView.getNavigationManager()
        
        val origin = LatLng(43.6532, -79.3832)
        val destination = LatLng(43.6542, -79.3822)
        
        navigationManager.calculateRoute(origin, destination) { route ->
            navigationManager.startNavigation(route)
        }
    }
}
```
