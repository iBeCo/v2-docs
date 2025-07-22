---
sidebar_position: 3
---

# Advanced Features Demo

This page demonstrates the advanced features we've added to our documentation site.

## 🎉 Announcement Bar

You should see an announcement bar at the top of the page promoting the Beco Android SDK v1.0 release!

## 📦 npm2yarn Plugin

The npm2yarn plugin automatically converts npm commands to show yarn and pnpm alternatives. Here's an example:

```bash npm2yarn
npm install @beco/android-sdk
```

This will automatically show tabs for npm, yarn, and pnpm!

## 🎨 Enhanced Syntax Highlighting

We now support additional languages for mobile development:

### Kotlin Code
```kotlin
class MainActivity : AppCompatActivity() {
    private lateinit var mapView: BecoMapView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // highlight-next-line
        BecoSDK.initialize(this, "YOUR_API_KEY")
        
        mapView = findViewById(R.id.map_view)
        mapView.loadMap("venue-id")
    }
}
```

### Java Code
```java
public class MainActivity extends AppCompatActivity {
    private BecoMapView mapView;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // highlight-start
        BecoSDK.initialize(this, "YOUR_API_KEY");
        // highlight-end
        
        mapView = findViewById(R.id.map_view);
        mapView.loadMap("venue-id");
    }
}
```

### Swift Code (for future iOS SDK)
```swift
import BecoSDK

class ViewController: UIViewController {
    @IBOutlet weak var mapView: BecoMapView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // highlight-next-line
        BecoSDK.initialize(apiKey: "YOUR_API_KEY")
        
        mapView.loadMap(venueId: "venue-id")
    }
}
```

### Gradle Configuration
```gradle
android {
    compileSdk 34
    
    defaultConfig {
        minSdk 21
        targetSdk 34
    }
}

dependencies {
    // highlight-start
    implementation 'com.beco:android-sdk:1.0.0'
    implementation 'com.google.android.gms:play-services-location:21.0.1'
    // highlight-end
}
```

### XML Layout
```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <!-- highlight-start -->
    <com.beco.BecoMapView
        android:id="@+id/map_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
    <!-- highlight-end -->

</LinearLayout>
```

### JSON Configuration
```json
{
  "venue": {
    "id": "venue-123",
    "name": "Shopping Mall",
    "floors": [1, 2, 3],
    "defaultFloor": 1
  },
  "mapOptions": {
    "showCompass": true,
    "showFloorPicker": true,
    "allowRotation": true
  }
}
```

## 🚀 Live Code Blocks

Live code blocks allow users to edit and run code directly in the browser! Here's an interactive React example:

```jsx live
function BecoMapDemo() {
  const [venueId, setVenueId] = React.useState('demo-venue');
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  const loadMap = () => {
    setIsLoaded(true);
    setTimeout(() => {
      alert(`Map loaded for venue: ${venueId}`);
      setIsLoaded(false);
    }, 1000);
  };
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #25c2a0', 
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>🗺️ Beco Map Demo</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Venue ID: 
          <input 
            type="text" 
            value={venueId}
            onChange={(e) => setVenueId(e.target.value)}
            style={{ 
              marginLeft: '10px', 
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </label>
      </div>
      <button 
        onClick={loadMap}
        disabled={isLoaded}
        style={{
          backgroundColor: '#25c2a0',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: isLoaded ? 'not-allowed' : 'pointer',
          opacity: isLoaded ? 0.6 : 1
        }}
      >
        {isLoaded ? 'Loading...' : 'Load Map'}
      </button>
      
      {isLoaded && (
        <div style={{ 
          marginTop: '10px', 
          padding: '10px',
          backgroundColor: '#e8f5e8',
          borderRadius: '4px'
        }}>
          📍 Loading map for venue: <strong>{venueId}</strong>
        </div>
      )}
    </div>
  );
}
```

Try editing the code above! You can:
- Change the venue ID
- Modify the styling
- Add new features
- Experiment with React hooks

## 🎯 Magic Comments

We support special comments for highlighting code:

```kotlin
class NavigationExample {
    fun startNavigation() {
        // This will error
        val invalidRoute = null
        
        // highlight-next-line
        val route = calculateRoute(origin, destination)
        
        // highlight-start
        if (route != null) {
            navigationManager.startNavigation(route)
        }
        // highlight-end
    }
}
```

## 📱 Mobile SDK Examples

Here are some practical examples for mobile development:

### Android Permissions
```xml
<!-- Required permissions for Beco SDK -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```

### Proguard Rules
```properties
# Beco SDK
-keep class com.beco.** { *; }
-dontwarn com.beco.**

# Google Play Services
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**
```

### YAML Configuration
```yaml
# CI/CD configuration for Android builds
android:
  build_tools: "34.0.0"
  compile_sdk: 34
  target_sdk: 34
  min_sdk: 21
  
dependencies:
  - com.beco:android-sdk:1.0.0
  - com.google.android.gms:play-services-location:21.0.1
  
test:
  unit_tests: true
  integration_tests: true
```

## 🎉 Summary

These advanced features make our documentation more:

- **Interactive** with live code blocks
- **Flexible** with npm2yarn support for different package managers
- **Comprehensive** with enhanced syntax highlighting for mobile languages
- **Engaging** with the announcement bar for important updates

Try editing the live code block above to see the interactive features in action!
