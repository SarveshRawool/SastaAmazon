import './sidenav.css'
function SideNav() {
    return ( 
        <>
        <div className="side-nav">
            <div className="section-title">
                <h3>Catagory</h3>
            </div>
            <div className='accordion'>
                    <div className='accordion-item individual-category'>
                        <div className='accordion-header'>
                            <button className='accordion-button' data-bs-target="#men-category" data-bs-toggle='collapse'>
                                <div className='catagory-title'>
                                    <a href='#'>Men</a>
                                </div>
                            </button>
                        </div>

                    <div className='accordion-collapse collapse show' id="men-category">
                        <div className='accordion-body'>
                            <ul>
                                <li className='sub-items'><a href='#'>Coats</a></li>
                                <li className='sub-items'><a href='#'>Boots</a></li>
                                <li className='sub-items'><a href='#'>Party ware</a></li>
                                <li className='sub-items'><a href='#'>Shirts</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </>
     );
}

export default SideNav;