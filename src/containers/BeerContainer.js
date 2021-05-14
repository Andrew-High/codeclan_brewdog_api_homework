import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import { useEffect, useState } from 'react';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        getBeers();
    }, []);

    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers?per_page=10')
        .then(results => results.json())
        .then(data => setBeers(data));
    };

    const onBeerClick = function(beer){
        setSelectedBeer(beer);
    };




    return (
        <div>
            <BeerList beers={beers} onBeerClick={onBeerClick}/>
            {selectedBeer ? <BeerDetail selectedBeer={selectedBeer}/> : null}
        </div>
    )

}

export default BeerContainer;