import ListItem from './ListItem';

const BeerList = ({beers, onBeerClick}) => {

    const beerItems = beers.map((beer, index) => {
        return <ListItem beer={beer} key={index} onBeerClick={onBeerClick}/>
    })

    const pageBeerItems = beerItems.slice(0, 20);

    return (
        <div id="beer-list-div">
            <ul id="beer-list">
                {pageBeerItems}
            </ul>
        </div>
    )
}

export default BeerList;