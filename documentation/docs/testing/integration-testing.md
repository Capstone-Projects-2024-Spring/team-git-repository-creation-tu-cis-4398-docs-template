---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Integration Test Documents for CityAnalytics Project

### Use Case 1 - Emergency Services Response Time
**Description:** A city planner wants to analyze the efficiency of emergency services in urban and suburban areas.
- **User Action:** User loads the CityAnalytics website.
- **User Action:** User enters a prompt to ask for average response times of emergency services.
- **User Action:** User submits the prompt.
- **Outcome:** Based on the user's response, they get results related to average emergency response times.
- **Outcome:** A graph is displayed showing the comparison of response times between urban and suburban areas.

**Assertion:** User should be able to receive detailed analytics on emergency services' response times to assess and improve city planning and safety measures.

### Use Case 2 - Public Transport Usage
**Description:** A transportation official wants to understand public transport usage patterns to improve services.
- **User Action:** User loads the CityAnalytics website.
- **User Action:** User enters a prompt to request data on public transport usage.
- **User Action:** User submits the prompt.
- **Outcome:** The website displays charts and graphs showing public transport usage trends over time.
- **User Action:** User filters the data to show pre and post-pandemic usage trends.
- **Outcome:** The website updates the display to show the requested comparison.

**Assertion:** User should be able to explore public transport usage trends to make informed decisions on service improvements and expansions.

### Use Case 3 - Pollution Levels Analysis
**Description:** An environmental scientist wants to study the patterns of air pollution across different city districts.
- **User Action:** The scientist visits the CityAnalytics website and inputs a prompt asking for air quality data.
- **Outcome:** The website provides a visual representation, such as heatmaps, of air pollution levels across the city.
- **Outcome:** Using this data, the scientist can identify pollution hotspots and trends over time.

**Assertion:** User should be able to obtain and analyze detailed environmental data to address pollution concerns effectively.

### Use Case 4 - Urban Development Impact Assessment
**Description:** A developer wants to assess the impact of a new housing complex on local infrastructure.
- **User Action:** They navigate to the CityAnalytics website and request information on current infrastructure load and capacities.
- **Outcome:** A dashboard is displayed showing the infrastructure status, including roads, public utilities, and services.
- **Outcome:** Interactive tools allow the user to simulate the impact of new developments on existing infrastructure.

**Assertion:** User should be able to simulate and assess the potential impacts of new developments on city infrastructure to plan effectively.

### Use Case 5 - Educational Facilities Allocation
**Description:** An education department official wants to optimize the allocation of educational facilities.
- **User Action:** The official accesses the CityAnalytics website and queries the distribution of educational facilities across the city.
- **Outcome:** The website displays a map highlighting the locations of schools, colleges, and universities.
- **Outcome:** Data on student populations, facility capacities, and area demographics are provided to aid in decision-making.

**Assertion:** User should be able to analyze educational facility allocations and demographics to identify areas of improvement or need for new facilities.

### Use Case 6 - Historical Landmark Preservation
**Description:** A historian wants to propose a preservation plan for historical landmarks facing urban development threats.
- **User Action:** They visit the CityAnalytics website and input a prompt for a list of endangered historical landmarks.
- **Outcome:** The website returns a map and list of landmarks with details on their historical significance and current threats.
- **Outcome:** The historian uses this information to advocate for preservation measures and funding.

**Assertion:** User should be able to access detailed information on historical landmarks to support preservation efforts effectively.
