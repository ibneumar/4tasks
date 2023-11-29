import React from 'react';

const Header = ({counter, total, resetCart}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-primary">
                <div className="container">
                    <a className="navbar-brand text-light" href="#"><i className="bi bi-shop fz-30"></i> Store</a>
                    {/* <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                    <ul className="navbar-nav ms-auto relative">
                        <li className="nav-item">
                        <a className="nav-link text-light"><i className="bi bi-cart3 fz-20"></i><span className='counter'>{counter}</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light">Rs: {total}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" title="Reset Cart" onClick={resetCart}><i className="bi bi-recycle fz-20"></i></a>
                        </li>
                    </ul>
                    {/* </div> */}
                </div>
            </nav>
        </>
    )
}

export default Header;