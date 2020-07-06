import Hotel from "./hotel"
import Filter from "./filter"
import Header from "./header"
import {hotelsData} from "./data.js"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateIn: moment().format('LL'), 
            dateOut: moment().format('LL'),
            hotel : [],
        };
    
        this.handleDate = this.handleDate.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleRooms = this.handleRooms.bind(this);
      }

    componentDidMount(){
        this.setState({hotel:hotelsData})
    }

    handleDate(e){
           const date = moment(e.target.value).format('LL');;
           this.setState({[e.target.name]: date})
    }

    handleCountry(e){
        const target = e.target.value
        const filterByCountry = hotelsData.filter(hotel =>(
            hotel.country === target
        ))
        target === "Todos los países" ? this.setState({hotel:hotelsData}):
        this.setState( { hotel: filterByCountry})
    }

    handlePrice(e){
        const target = e.target.value.length
        const filterByPrice = hotelsData.filter(hotel =>(
            hotel.price ===  target
        ))
        e.target.value === "Cualquier precio"? this.setState({hotel:hotelsData}): 
        this.setState({hotel: filterByPrice})
    }

    handleRooms(e){
        const target = e.target.value
        const hotelesPequeños = hotelsData.filter(hotel=>hotel.rooms<=10)
        const hotelesMedianos = hotelsData.filter(hotel=>hotel.rooms>=10 && hotel.rooms<=20)
        const hotelesGrandes = hotelsData.filter(hotel =>(hotel.rooms>=20)) 
        if( target === "Hotel pequeño"){
            this.setState({hotel : hotelesPequeños})
        } else if ( target === "Hotel mediano"){
            this.setState({hotel : hotelesMedianos})
        } else if ( target === "Hotel grande"){
            this.setState({ hotel: hotelesGrandes})
        } else{
            this.setState({ hotel:hotelsData})
        }
    }

    render(){
        const {hotel,dateIn,dateOut}= this.state
        return(
            <div>
               <Header dateIn={dateIn} dateOut={dateOut}/>
               <Filter
               onChangeIn={this.handleDate}
               dateIn= "dateIn"
               valueIn= {dateIn}
               minIn= {dateIn}
               dateOut="dateOut"
               onChangeOut={this.handleDate}
               valueOut={dateOut}
               minOut={dateIn}

               onChangeCountry= {this.handleCountry}
               valueCountry= {this.state.hotel.country}

               onChangePrice = {this.handlePrice}
               valuePrice={this.state.hotel.price}

               onChangeRooms = {this.handleRooms}
               valueRooms={this.state.hotel.rooms}

               />
               <div className="hotelContainer">
               { hotel.map((hotel,index) =>(
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
               </div>

        )
    }
}

export default App;