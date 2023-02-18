const LocationInfo = ({ poiList = [] }) => {
  console.log({ poiList })

  return (
    <div>
      {poiList.length > 0 && (
        <div>
          <h2>Points of Interest</h2>
          <ul>
            {poiList.map((poi, index) => (
              <div key={index}>
                <li key={index}>{poi.name}</li>
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