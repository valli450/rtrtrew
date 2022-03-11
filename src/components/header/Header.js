import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__circles">
                <h2 className="header__head">
                    Simple, traffic-based pricing
                </h2>
                <p className="header__text">
                    Sign-up for our 30-day trial. No credit card required.
                </p>
            </div>
        </div>
    );
}

export default Header;