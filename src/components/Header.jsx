import React from 'react'
import { useSelector } from 'react-redux'


const Header = () => {

    const cartValue = useSelector(state => state.cart);
    return (
        <div className='nav-items'>
            <div className='nav'>
                <div>
                    <img className='menu-icon'
                        src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png'
                        alt='menu-btn'
                        style={{ width: '40px', height: '40px' }} />

                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Contact</li>

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