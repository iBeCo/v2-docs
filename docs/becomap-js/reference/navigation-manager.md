---
sidebar_position: 2
---

# NavigationManager

Manages navigation and routing functionality.

## Class Declaration

```kotlin
class NavigationManager
```

## Public Methods

### calculateRoute()

Calculates a route between two points.

```kotlin
fun calculateRoute(
    from: LatLng,
    to: LatLng,
    options: RouteOptions? = null,
    callback: (RouteResult) -> Unit
)
```

### startNavigation()

Starts turn-by-turn navigation.

```kotlin
fun startNavigation(
    route: Route,
    callback: (Boolean) -> Unit
)
```

### stopNavigation()

Stops active navigation.

```kotlin
fun stopNavigation()
```

## Event Listeners

### setNavigationDelegate()

```kotlin
fun setNavigationDelegate(delegate: NavigationDelegate)
```
