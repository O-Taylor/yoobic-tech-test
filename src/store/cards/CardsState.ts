import  axios  from 'axios'

let state = {
    api:  
}

const getCharacters = () => {
    axios({
  method: "FETCH",
  url: "https://swapi.dev/api/",
  headers: {
    "content-type": "application/json",

  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
}

export {
getCharacters()
}