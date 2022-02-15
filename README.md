```
/* flatMap()の使い方 */
restaurants.flatMap(restaurant =>
    (restaurant.type.includes(searchState.type) && restaurant.address.includes(searchState.pref)) ? (
        <Text>{restaurant.name}</Text>
    ): []
) 
```