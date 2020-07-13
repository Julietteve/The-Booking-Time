const Filter =(props) =>{
    const {handleDateIn, handleDateOut, handleCountry, handlePrice, handleRooms} = props
    
    const paises=[ "Todos los países","Argentina", "Uruguay", "Brasil", "Chile"]
    const precios=["Cualquier precio", "$", "$$", "$$$", "$$$$"]
    const tamaños =["Cualquier tamaño", "Hotel pequeño", "Hotel mediano", "Hotel grande"]
    
    return (
        <div className= "filter">
            <div className="filter-module">
                <i className="fas fa-sign-in-alt icon"></i>
                    <input 
                        name= "availabilityFrom"
                        onChange={(e)=>handleDateIn(e.target.value, e.target.name)}
                        type="date" 
                    />
            </div>
            <div className="filter-module">
                <i className="fas fa-sign-in-alt fa-rotate-180 icon"></i>
                    <input 
                        name= "availabilityTo" 
                        onChange={(e)=>handleDateOut(e.target.value, e.target.name)}
                        type="date"
                    />
            </div>
            <div className="filter-module">
                <i className = "fas fa-map-marker-alt icon" ></i>
                    <select 
                        name="country"
                        onChange={(e)=>handleCountry(e.target.value, e.target.name)}> 
                        {paises.map( (pais,index,) =>(
                            <option
                                key={index}
                                value ={pais}>
                                {pais}
                            </option>))}
                    </select>
            </div>
            <div className="filter-module">
                <i className = " fas fa-dollar-sign icon"></i>
                    <select  
                        name= "price" 
                        onChange={(e)=>handlePrice(e.target.value, e.target.name)}> 
                        {precios.map((precio,index) =>(
                            <option 
                                key={index}
                                value={precio}>
                                {precio}
                            </option>))}
                    </select>
            </div>
            <div className="filter-module">
                <i className = "fas fa-bed icon"> </i>
                     <select 
                        name="room" 
                        onChange={(e)=>handleRooms(e.target.value, e.target.name)}> 
                        {tamaños.map((tamaño,index) =>(
                            <option 
                                key={index} 
                                value={tamaño}>
                                {tamaño}
                            </option>))}
                    </select>
            </div>
        </div>
    )
}

export default Filter