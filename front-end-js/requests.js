const BASE_URL = "http://localhost:3000"
const USER_URL = `${BASE_URL}/user`
// const FAST_URL = `${BASE_URL}/fasts`

const loadUser = () => {        
    fetch (USER_URL ['POST'])
    .then(res => res.json())
    .then (json => { 
      json.forEach(user => renderUser(user))

    })

}

