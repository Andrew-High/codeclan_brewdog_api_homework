const BeerDetail = ({selectedBeer}) => {
    return (
        <div>
            <h3>{selectedBeer.name}</h3>
            <p>{selectedBeer.tagline}</p>
            <p>ABV: {selectedBeer.abv}%</p>
            <p>{selectedBeer.description}</p>
            <img url= {selectedBeer.image_url}></img>
        </div>
    )
}

export default BeerDetail;