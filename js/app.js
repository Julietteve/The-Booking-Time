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
                room: "Cualquier tamaño",
                availabilityFrom:"",
                availabilityTo:"",
            }
        }

    componentDidMount() {
        this.setState({availabilityFrom:"fecha de entrada"})
        this.setState({availabilityTo:"fecha de salida"})
        this.setState({hotel: hotelsData})
        this.setState({filteredHotels: hotelsData})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.filterBy !== prevState.filterBy) {
          this.setState({ 
              filteredHotels: this.handleFilters()
            })
        }
      }

    handleFilterInputs = (inputValue,inputName) => {
        console.log(inputValue,inputName)
       this.setState({
           filterBy :{...this.state.filterBy, [inputName]: inputValue}
        })
    };

    handleFilterInputsDates = (inputValue,inputName) => {
        let date = moment(inputValue).format('dddd LL');
        this.setState({ 
            [inputName]: date
         })
     };

     dateConvert = (date) =>{
         return date.setHours(23),
                date.setMinutes(59),
                date.setSeconds(59),
                date.valueOf()
     }

    handleFilters = () => { 
        
        let today = new Date().valueOf();
        let availabilityDatesIn = [];
        let availabilityDatesOut= [];
        let availabilityFromToDate= new Date(this.state.filterBy.availabilityFrom.split("-").join(","));
        let availabilityToToDate= new Date(this.state.filterBy.availabilityTo.split("-").join(","));
        this.dateConvert(availabilityFromToDate);
        this.dateConvert(availabilityToToDate);
      

        let filterByCountry = this.state.hotel.filter(hotel =>{
            if(this.state.filterBy.country === "Todos los países"){
                return hotel;
            }
            return (hotel.country === this.state.filterBy.country)
            });

        let filterByPrice = filterByCountry.filter(hotel => {
            if( this.state.filterBy.price === "Cualquier precio"){
                return hotel;
            }
            return (hotel.price=== this.state.filterBy.price.length)
            });
       
        let filterByRooms = filterByPrice.filter(hotel =>{
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
        
    // Para poder filtrar sobre los filtros select o data picker sin orden determinado, filtro por fechas al final. Al inicio de la funcion solo lograba hacer funcionar los filtros en orden, requiriendo el filtro por fecha haciendo dependiente al de pais, precio y tamaño.
           
        if (availabilityFromToDate < today && availabilityFromToDate)
        {
            sweetAlert("¡Atención!",
            "La fecha de entrada debe ser posterior a la fecha actual", 
            "warning");
    
            return availabilityDatesIn;
        }
        else
        {
            availabilityDatesIn = filterByRooms.filter((hotel) => {
                return (
                    availabilityFromToDate >= hotel.availabilityFrom &&
                    availabilityFromToDate <= hotel.availabilityTo);
              });
        }

        if (availabilityDatesIn.length > 0 && availabilityToToDate <
            availabilityFromToDate && availabilityFromToDate)
        {
            sweetAlert("¡Atención!",
            "La fecha de salida debe ser posterior a la fecha de entrada",
            "warning");

            return availabilityDatesOut
        }
        else if (availabilityDatesIn.length)
        {
            availabilityDatesOut = availabilityDatesIn.filter(hotel =>{
            return availabilityToToDate <= hotel.availabilityTo;
            })
        }

        availabilityDatesOut = filterByRooms.filter((hotel) => {
                return ( availabilityToToDate >= hotel.availabilityFrom &&
                        availabilityToToDate <= hotel.availabilityTo);
            });

            if (availabilityToToDate > 0) {
                return availabilityDatesOut
            } else if (availabilityFromToDate > 0) {
                return availabilityDatesIn
            }

            return filterByRooms
        }

    render() {

        let {availabilityFrom, availabilityTo,filteredHotels} = this.state

        return (
            <div>
                <div className="header-filter">
                    <Header 
                        dateIn={availabilityFrom}
                        dateOut={availabilityTo}
                    />
                    <Filter 
                        handleDateIn= {(a,b)=>{
                            this.handleFilterInputsDates(a,b);
                            this.handleFilterInputs(a,b)
                        }}
                        handleDateOut= {(a,b)=>{
                            this.handleFilterInputsDates(a,b);
                            this.handleFilterInputs(a,b)
                        }}
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
