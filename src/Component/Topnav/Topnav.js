import './topnav.css'

function TopNav() {
    return ( 
        <>
            <div className='header bg-dark'>
        <div className='row my-row-div'>
          <div className='brand my-1'>
            <h1>Sasta Amazon</h1>
          </div>
          <div className='inp-container p-0 my-10 h-25 w-50 bg-white'>{/* p-padding, my-margin y axis,  h-height ,   w-width  */}
            <div className='dropdown m-0 p-0'>
              <select className='select-btn m-0 p-0 w-100' >
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <input className='form-control' placeholder='Type to Search '></input>
            <button className='btn btn-info'>Search</button>
          </div>
          <div className='login-container p-0'>
            <i className='fa fa-user-circle user-icon'></i>
            <h5><a href='#'>Login</a></h5>/<h5><a href='#'>Register</a></h5>
          </div>
          <div className='cart-wishlist'>
            <ul className='p-0'>
              <li className='list-icon'><i className='fa fa-heart'></i></li>
              <li className='list-icon'><i className='fa fa-shopping-cart'></i></li>
            </ul>
          </div>
        </div>
      </div>
        </>
     );
}

export default TopNav;