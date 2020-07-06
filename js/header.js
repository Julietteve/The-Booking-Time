const Header =(props)=>{
    return(
        <div className="header">
            <h2 className="dates">{`Desde el ${props.dateIn} hasta el ${props.dateOut}`}</h2>
        </div>
    )
}

export default Header;