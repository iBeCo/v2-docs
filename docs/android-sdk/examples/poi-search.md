---
sidebar_position: 3
---

# POI Search Example

Example showing how to search and display points of interest.

## POISearchActivity.kt

```kotlin
class POISearchActivity : AppCompatActivity() {
    private lateinit var mapView: BecoMapView
    private lateinit var searchView: SearchView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_poi_search)
        
        setupMap()
        setupSearch()
    }
    
    private fun setupSearch() {
        searchView = findViewById(R.id.search_view)
        
        searchView.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String?): Boolean {
                query?.let { searchPOIs(it) }
                return true
            }
            
            override fun onQueryTextChange(newText: String?): Boolean {
                return false
            }
        })
    }
    
    private fun searchPOIs(query: String) {
        val poiManager = mapView.getPOIManager()
        poiManager.searchPOIs(query) { results ->
            results.forEach { poi ->
                mapView.addPOI(poi)
            }
        }
    }
}
```
