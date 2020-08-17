import Hotel from "./hotel.js"

const HotelContainer = (props)=>{

    let {filteredHotels}= props

    return(
            <div className="hotels">
                {filteredHotels.length === 0 ? (<p className="not-found">No hay resultados para esta búsqueda</p>)
                : filteredHotels.map((hotel,index) =>(
                    <Hotel
                        key={index}
                        photo={hotel.photo}
                        slug={hotel.slug}
                        name= {hotel.name}
                        location ={`${hotel.city}, ${hotel.country}`}
                        description ={hotel.description}
                        beds={hotel.rooms}
                        price={hotel.price}
                    />
                    ))}
            </div>
    )
}

export default HotelContainer