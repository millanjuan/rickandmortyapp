const axios = require("axios");

// exports.getCharById = (res, id) => {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         const char = response.data

//         return {
//             id,
//             name: char.name,
//             gender: char.gender,
//             species: char.species,
//             origin: char.origin.name,
//             image: char.image,
//             status: char.status,
//         }
//     })
//     .then((response) => {
//         res.writeHead(200, {"Content-Type": "application/json"} )
//         res.end(JSON.stringify(response));
//     })
//     .catch((reason) => {
//         res.writeHead(500, {"Content-Type": "text/plain"})
//         res.end(reason.response.data.error)
//     });
// }

// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (req, res) => {
//     const {id} = req.params

//     axios(URL+ id)
//     .then(({data}) => {
//         const { name, gender, species, origin, image, status} = data;
//         const character = { id, name, gender, species, origin, image, status}
        
//         return character.name
//         ? res.json(character)
//         : res.status(404).send("Character not found");
//     })
//     .catch((error) => {
//         return res.status(500).send(error.message)
//     })
// }

// module.exports = getCharById;


const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    

    try {
        
        const {id} = req.params;
        const { name, gender, species, origin, image, status} = (await axios.get(URL+ id)
        ).data;
        const character = { id, name, gender, species, origin, image, status}


        return character.name
        ? res.json(character)
        : res.status(404).send("Character not found");
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getCharById;