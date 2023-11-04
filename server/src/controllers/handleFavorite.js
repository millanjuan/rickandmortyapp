let myFavorites = [];

const postFav = (req, res) => { 
    myFavorites.push(req.body)
    return res.json(myFavorites);
};

const deleteFav = (req, res) => {
    const {id} = req.params;
    const FavFiltered = myFavorites.filter((char) => {
        return char.id !== id; // ! To check Number
    });

    myFavorites = FavFiltered;

    res.json(myFavorites)

}

module.exports = { postFav, deleteFav };