const Header =(props)=>{

    let {dateIn, dateOut} = props
    
    return(
        <div className="header">
            <img className="banner-img" src="images/banner.jpg" alt="img"/>
            <p className="title"> The Booking Time </p>
            <p className="dates"> 
            Desde  
             <span className="in-out-dates"> {dateIn} </span> 
            hasta 
            <span className="in-out-dates"> {dateOut} </span></p>
        </div>
    )
}

export default Header;