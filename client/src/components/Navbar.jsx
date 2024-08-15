import React from 'react';

const Navbar = () => {
    return (
        <nav
            className='navbar bg-dark navbar-expand-md bg-body-tertiary'
            data-bs-theme='dark'
        >
            <div className='container-fluid'>
                <div className='container d-flex'>
                    <a className='navbar-brand' href='/'>
                        Vuelos
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse ' id='navbarNavAltMarkup'>
                        
                        <div className='navbar-nav d-flex'>
                            <a className='nav-link ' aria-current='page' href='/alta'>
                                Alta
                            </a>
                            <a className='nav-link' href='/baja'>
                                Baja
                            </a>
                            <a className='nav-link' href='/modificar/'>
                                Modificación
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
