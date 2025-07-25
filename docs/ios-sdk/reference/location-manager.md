---
sidebar_position: 4
---

# LocationManager

Manages location services and positioning.

## Class Declaration

```kotlin
class LocationManager
```

## Public Methods

### startLocationUpdates()

Starts receiving location updates.

```kotlin
fun startLocationUpdates()
```

### stopLocationUpdates()

Stops receiving location updates.

```kotlin
fun stopLocationUpdates()
```

### setLocationListener()

Sets a listener for location updates.

```kotlin
fun setLocationListener(listener: (BecoLocation) -> Unit)
```
