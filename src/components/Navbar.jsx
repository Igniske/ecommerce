import './Navbar.css';


const Navbar = () =>{

    return(
        <>
          <div className="navbar container">
            <div className='brand-name margin-left'>
              This brand
            </div>
            <div className='search-input container'>
                <input className='navbar-input'></input>
                <button>Search</button>
            </div>
            <div className='links'>
              <ul className='links-list container'>
                <li>Welcome, "user"</li>
                <li>Links</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
          <div className="sub-navbar links-list ">
            <ul className='links-list container'>
                <li>Sales</li>
                <li>Hot today</li>
                <li>Coming soon</li>
            </ul>
          </div>
        </>
    )
}

export default Navbar;