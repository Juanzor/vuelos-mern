import React from 'react';

const Navbar2 = () => {
    return (
        <nav
            class='navbar container bg-dark  navbar-expand-lg bg-body-tertiary'
            data-bs-theme='dark'
        >
            <div class='container-fluid '>
               {/*  <div className='container d-flex '> */}
                    <a class='navbar-brand' href='/'>
                        Vuelos
                    </a>
                    <button
                        class='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse ' id='navbarTogglerDemo02'>
                        <ul class='navbar-nav  me-auto mb-2 mb-lg-0'>
                            <li class='nav-item'>
                                <a class='nav-link' href='/baja'>
                                    Baja
                                </a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link ' href='/modificar/'>
                                    Modificación
                                </a>
                            </li>
                        </ul>
                    </div>
               {/*  </div> */}
            </div>
        </nav>
    );
};

export default Navbar2;
