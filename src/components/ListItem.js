const ListItem = ({beer, onBeerClick}) => {

    const handleClick = function(){
        onBeerClick(beer)
    }

    return <li onClick={handleClick}>{beer.name}</li>

}

export default ListItem;