---
sidebar_position: 5
---

# POI Management

Manage and display points of interest on your maps.

## Adding POIs

```kotlin
val poi = POI(
    id = "poi-1",
    name = "Coffee Shop",
    location = LatLng(43.6532, -79.3832),
    floor = 1
)

mapView.addPOI(poi)
```

## POI Events

```kotlin
mapView.setOnPOIClickListener { poi ->
    Log.d("POI", "Clicked: ${poi.name}")
}
```
