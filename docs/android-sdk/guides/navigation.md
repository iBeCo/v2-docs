---
sidebar_position: 3
---

# Navigation

Implement turn-by-turn indoor navigation in your Android application.

## Overview

The Beco SDK provides comprehensive navigation features including route calculation and turn-by-turn directions.

## Basic Navigation Setup

```kotlin
val navigationManager = mapView.getNavigationManager()

navigationManager.calculateRoute(
    from = origin,
    to = destination
) { route ->
    // Handle calculated route
}
```

## Starting Navigation

```kotlin
navigationManager.startNavigation(route)
```

## Next Steps

- [Location Services](./location-services) - Work with real-time positioning
- [POI Management](./poi-management) - Navigate to points of interest
