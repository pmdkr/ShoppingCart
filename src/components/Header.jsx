import React from 'react'

const Header = () => {
    return (
        <div className='nav-items'>
            <div className='nav'>
                <img className='menu-icon' src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png' alt='menu-btn' style={{width:'40px', height:'40px'}}/>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>

            </div>

            <div>
                <p >My Bag </p>
            </div>
        </div>
    )
}

export default Header