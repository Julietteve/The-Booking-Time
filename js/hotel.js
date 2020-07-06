const getDollars = price =>
    Array.from(new Array(4), (n, index) => ( <
        i className = { "fas fa-dollar-sign icon" }
        key = { `dollar-${index}` }
        style = {
            { color: index < price ? "#9E4464" : "lightgrey" } }
        />
    ));

const Hotel = (props) => {
    return (    
        <div className = "cardContainer">
        <img className = "cover"src = { props.photo} alt = {props.slug}/>
        <div className = "cardHolder">
        <h1 className = "name"> { props.name } </h1> 
        <div className = "location" >
        <p><i className = "fas fa-map-marker-alt icon" ></i>{props.location}</p >
        </div> 
        <p className = "description"> { props.description }</p>
        <div className = "icon-info">
        <div className = "size" >
        <p> <i className = "fas fa-bed icon "> </i>{`${props.beds} habitaciones`}</p >
        </div><span>{ getDollars(props.price)}</span> 
        </div> 
        <button className = "bookButton" > Reservar </button> 
        </div>
        </div> 
    )
}
export default Hotel;