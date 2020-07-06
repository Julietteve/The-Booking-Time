const Filter =(props) =>{
    const {onChangeIn, onChangeOut, dateIn, dateOut, valueIn,valueOut,minIn, minOut,onChangeCountry, valueCountry, onChangePrice, valuePrice, onChangeRooms, valueRooms} = props
    const paises= [ "Todos los países","Argentina", "Uruguay", "Brasil", "Chile"]
    const precios= ["Cualquier precio", "$", "$$", "$$$", "$$$$"]
    const tamaños =["Cualquier tamaño", "Hotel pequeño", "Hotel mediano", "Hotel grande"]
    return (
        <div className= "filter">
            <input name= {dateIn} onChange={onChangeIn} value={valueIn} type="date" min={minIn}></input>
            <input name= {dateOut} onChange={onChangeOut} value={valueOut} type="date" min={minOut}></input>
            <select  onChange={onChangeCountry} > 
               {paises.map( (pais,index,) =>(<option key={index}value ={valueCountry}>{pais}</option>))}
            </select>
            <select onChange={onChangePrice}> 
               {precios.map((precio,index) =>(<option key={index} value={valuePrice}>{precio}</option>))}
            </select>
            <select onChange={onChangeRooms}> 
               {tamaños.map( (tamaño,index) =>(<option key={index} value={valueRooms}>{tamaño}</option>))}
            </select>
        </div>
    )
}

export default Filter