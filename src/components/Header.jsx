import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Header = () => {

    const cartValue = useSelector(state => state.cart);
    return (
        <div className='nav-items'>
            <div className='nav'>
                <div>
                    <Link to="/">
                        <img className='menu-icon'
                            src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png'
                            alt='menu-btn'
                            style={{ width: '40px', height: '40px' }} /></Link>


                </div>
                <div className='menu-list' style={{ marginLeft: '20px', textAlign: 'center' }}>
                    <ul>
                        <Link to="/" style={{ marginLeft: '10px' }}>Home</Link>
                        <Link to="/cart" style={{ marginLeft: '10px' }}>Cart</Link>
                        <Link to="/contact" style={{ marginLeft: '10px' }}>Contact</Link>

                    </ul>
                </div>



            </div>

            <div style={{ marginRight: '30px' }}>
                <p style={{ fontSize: '30px' }}>My Bag <span style={{ color: 'red' }}>{cartValue.length}</span></p>
            </div>
        </div>
    )
}

export default Header;