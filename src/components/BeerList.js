import { useEffect, useState } from 'react';
import ListItem from './ListItem';

const BeerList = ({beers, onBeerClick}) => {

    const beerItems = beers.map((beer, index) => {
        return <ListItem beer={beer} key={index} onBeerClick={onBeerClick}/>
    })

    const [beerPage, setBeerPage] = useState(1);
    
    const [pageBeerItems, setPageBeerItems] = useState(null);

    useEffect(() => {
        setPageBeerItems(beerItems.slice(((beerPage - 1) * 20), ((beerPage) * 20)));
    })
    
    const handleBackClick = function () {
        setBeerPage(beerPage-1)
    }

    const handleForwardClick = function () {
        setBeerPage(beerPage+1)
    }

    return (
        <div id="beer-list-div">
            <ul id="beer-list">
                {pageBeerItems}
            </ul>
            <div id="buttons">
                <button id="back-button" onClick={handleBackClick}>Back</button>
                <button id="forward-button" onClick={handleForwardClick}>Forward</button>                    
            </div> 
        </div>
    )
}

export default BeerList;