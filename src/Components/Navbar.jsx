const Navbar = () => {
    var getcoins = localStorage.getItem("coins")
    return (
        <>
            <style>

            </style>
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="/">DELOSNEWS</a>
                    <a href="/list-articles" style={{marginLeft:"150px", color: "#fff"}}>Click here for search more articles</a>
                    <div className="d-flex navbar-brand">
                        <a href="user" className="d-flex navbar-brand">COINS : {getcoins}<span className="ps-3">|</span></a>
                        
                        <a href="user" className="d-flex navbar-brand">PROFILE</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar