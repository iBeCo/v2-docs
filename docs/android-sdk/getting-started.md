---
sidebar_position: 3
---

# Getting Started

Learn how to initialize the Beco Android SDK and create your first indoor map.

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

- Learn about map configuration options
- Explore navigation features
- Customize the map appearance
