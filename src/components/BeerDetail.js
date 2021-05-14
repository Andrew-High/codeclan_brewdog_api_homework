const BeerDetail = ({selectedBeer}) => {
    return (
        <div id="beer-detail">
            <h3>{selectedBeer.name}</h3>
            <p>{selectedBeer.tagline}</p>
            <p>ABV: {selectedBeer.abv}%</p>
            <p id="beer-description">{selectedBeer.description}</p>
            <img src= {selectedBeer.image_url} width="66" height="240" alt=""/>
        </div>
    )
}

export default BeerDetail;