const LocationInfo = ({ poiList = [] }) => {
  console.log({ poiList })

  return (
    <div>
      {poiList.length > 0 && (
        <div>
          <h2>Points of Interest</h2>
          <ul>
            {poiList.map((poi) => (
              <div key={poi.id}>
                <li key={poi.name}>{poi.name}</li>
                {
                  Array.from(poi.categories).map((category, index) => {
                    return (<li key={category}>{category}</li>)
                  }
                  )
                }
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LocationInfo;