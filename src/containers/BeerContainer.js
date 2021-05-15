import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import './BeerContainer.css'
import { useEffect, useState } from 'react';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        getBeers();
    }, []);

    const getBeers = function(){
        const fetchPage1 = fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
        const fetchPage2 = fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
        const fetchPage3 = fetch("https://api.punkapi.com/v2/beers?page=3&per_page=80");
        const fetchPage4 = fetch("https://api.punkapi.com/v2/beers?page=4&per_page=80");
        const fetchPage5 = fetch("https://api.punkapi.com/v2/beers?page=5&per_page=80");
        const fetchPage6 = fetch("https://api.punkapi.com/v2/beers?page=6&per_page=80");
        const fetchAll = [fetchPage1, fetchPage2, fetchPage3, fetchPage4, fetchPage5, fetchPage6]
        Promise.all(fetchAll)
        .then((responses) => Promise.all(responses.map(res => res.json())))
        .then(result => result.flat())
        .then(data => setBeers(data));
    };

    const onBeerClick = function(beer){
        setSelectedBeer(beer);
    };




    return (
        <div id="beer-container">
            <div>
                <BeerList beers={beers} onBeerClick={onBeerClick} id="beer-list"/>
                <div id="buttons">
                    <button>Back</button>
                    <button id="forward-button">Forward</button>                    
                </div>                
            </div>
            {selectedBeer ? <BeerDetail id="beer-detail" selectedBeer={selectedBeer}/> : null}
        </div>
    )

}

export default BeerContainer;