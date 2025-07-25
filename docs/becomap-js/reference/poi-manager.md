---
sidebar_position: 3
---

# POIManager

Manages points of interest on the map.

## Class Declaration

```kotlin
class POIManager
```

## Public Methods

### addPOI()

Adds a point of interest to the map.

```kotlin
fun addPOI(poi: POI)
```

### removePOI()

Removes a point of interest from the map.

```kotlin
fun removePOI(poiId: String)
```

### searchPOIs()

Searches for points of interest.

```kotlin
fun searchPOIs(
    query: String,
    callback: (List<POI>) -> Unit
)
```
