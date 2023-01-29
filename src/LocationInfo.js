import poi_categories from './poi_categories.json';

const LocationInfo = () => {
  const [poiList, setPoiList] = useState([]);

  useEffect(() => {
    async function fetchPoi() {
      if (!selectedImage) return;
      const res = await axios.get(
        `https://api.tomtom.com/search/2/poiSearch/${selectedImage.location}.json?limit=10&key=${process.env.REACT_APP_TOMTOM_API_KEY}`
      );

      const filteredResults = res.data.results
        .filter(result => result.poi.categories.some(category => poi_categories.includes(category)))
        .map(result => ({
          id: result.id,
          name: result.poi.name,
          categories: new Set(result.poi.categories.filter(category => poi_categories.includes(category)))
        }))
        .reduce((acc, curr) => {
          const key = curr.name;
          if (!acc[key]) {
            acc[key] = {
              name: key,
              categories: curr.categories
            };
          } else {
            curr.categories.forEach(category => acc[key].categories.add(category));
          }
          return acc;
        }, {});

      const items = Object.values(filteredResults)
      setPoiList(items);
      console.log({ items });
    }
    fetchPoi();
  }, [selectedImage]);


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