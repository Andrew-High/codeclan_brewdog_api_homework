import ListItem from './ListItem';

const BeerList = ({beers, onBeerClick}) => {

    const beerItems = beers.map((beer, index) => {
        return <ListItem beer={beer} key={index} onBeerClick={onBeerClick}/>
    })

    return (
        <div>
            <ul>
                {beerItems}
            </ul>
        </div>
    )
}

export default BeerList;