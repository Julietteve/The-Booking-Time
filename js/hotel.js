
const Hotel = (props) => {
    let {photo,slug,name,location,description,beds,price}= props
    let getDollars =  Array.from(new Array(4), (n, index) => ( 
        <i 
        className = { "fas fa-dollar-sign icon" }
        key = { `dollar-${index}` }
        style = {
            { color: index < price ? "#820233" : "#767674" } }
        />
    ));

    return (
        <div className = "hotel">
            <img className = "img-fluid cover"src = {photo} alt = {slug}/>
                <div className = "hotel-holder">
                    <h1 className = "name"> { name } </h1> 
                        <div className = "location" >
                            <p><i className = "fas fa-map-marker-alt icon" ></i>{location}</p >
                        </div> 
                    <p className = "description"> {description}</p>
                </div>
                <div className = "icon-info">
                    <div className = "size" >
                        <p><i className = "fas fa-bed icon "> </i>{`${beds} habitaciones`}</p >
                    </div>
                    <span>{getDollars}</span> 
                </div> 
                <div className="bottom">
                    <button className = "bookButton" > Reservar </button> 
                </div>
        </div>
    )
}

export default Hotel;