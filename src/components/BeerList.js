import ListItem from './ListItem';

const BeerList = ({beers, onBeerClick}) => {

    const beerItems = beers.map((beer, index) => {
        return <ListItem beer={beer} key={index} onBeerClick={onBeerClick}/>
    })

    return (
        <div id="beer-list-div">
            <ul id="beer-list">
                {beerItems}
            </ul>
        </div>
    )
}

export default BeerList;