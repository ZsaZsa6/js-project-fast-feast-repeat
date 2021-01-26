const BASE_URL = "http://localhost:3000"

const FASTS_URL = `${BASE_URL}/fasts`
const FAST_URL = `${BASE_URL}/fast`

const loadFasts = () => {        
    fetch (FASTS_URL)
    .then(res => res.json())
    .then (json => { 
      json.forEach(fast => renderFast(fast))

    })

}

