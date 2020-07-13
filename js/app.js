import HotelContainer from "./hotelContainer"
import Filter from "./filter"
import Header from "./header"
import {hotelsData} from "./data.js"

class App extends React.Component {
    state = {
            availabilityFrom:"",
            availabilityTo:"",
            hotel: [],
            filteredHotels: [],
            filterBy: {
                country: "Todos los países",
                price: "Cualquier precio",
                room: "Cualquier tamaño"
            }
        }

    componentDidMount() {
        this.setState({availabilityFrom:"fecha de entrada"})
        this.setState({availabilityTo:"fecha de salida"})
        this.setState({hotel: hotelsData})
        this.setState({filteredHotels: hotelsData})
        console.log("mounted")
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.filterBy !== prevState.filterBy) {
          this.setState({ 
              filteredHotels: this.handleFilters()
            })
        }
      }

    handleFilterInputs = (inputValue,inputName) => {
       this.setState({
           filterBy :{...this.state.filterBy, [inputName]: inputValue}
        })
    };

    handleFilterInputsDates = (inputValue,inputName) => {
        const date = moment(inputValue).format('dddd LL');
        this.setState({ 
            [inputName]: date
         })
     };

    handleFilters =()=> { 
        const filterByCountry = this.state.hotel.filter(hotel =>
        {
            if(this.state.filterBy.country === "Todos los países"){
                return hotel;
            }
             return (hotel.country === this.state.filterBy.country)
            });

        const filterByPrice = filterByCountry.filter(hotel => {
            if( this.state.filterBy.price === "Cualquier precio"){
                return hotel;
            }
            return (hotel.price === this.state.filterBy.price.length)
            });
       
        const filterByRooms = filterByPrice.filter(hotel =>{
            if ( this.state.filterBy.room === "Hotel pequeño") {
                return hotel.rooms <= 10;
            } else if (this.state.filterBy.room === "Hotel mediano") {
                return hotel.rooms >= 10 && hotel.rooms <= 20;
            } else if (this.state.filterBy.room === "Hotel grande") {
                return hotel.rooms >= 20;
            } else if (this.state.filterBy.room === "Cualquier tamaño") {
                return hotel;
            } 
            });
                    return filterByRooms
        }

    render() {
        const {availabilityFrom, availabilityTo,filteredHotels} = this.state
        return (
            <div>
                <div className="header-filter">
                <Header 
                dateIn={availabilityFrom}
                dateOut={availabilityTo}
                />
                <Filter 
                handleDateIn= {this.handleFilterInputsDates}
                handleDateOut= {this.handleFilterInputsDates}
                handleCountry= {this.handleFilterInputs}
                handlePrice= {this.handleFilterInputs}
                handleRooms= {this.handleFilterInputs}
                />
            </div>
                <HotelContainer 
                filteredHotels={filteredHotels}
                />
            </div>
        )
    }
}

export default App;
