import React, { useState } from 'react';

export const Home = () => {
    const [showInput, setShowInput] = useState(false);

    const handleContactClick = () => {
        setShowInput(true);
    };

    return (
        <div className='Home'>
            <div className='nombre'>Cesia Alejandra Pajaro Contreras</div>
            <div>
                {!showInput && (
                    <button className='Button' onClick={handleContactClick}>
                        Contact me
                    </button>
                )}

                {showInput && (
                    <div className='contact'>
                        
                        <p><i class="fa-solid fa-envelopes-bulk"></i>
                        Email: Cesiapajaroc@hotmail.com</p>
                        <p>Teléfono: +53022532082</p>
                        <p>Ubicación: Colombia, Turbaco</p>
                    </div>
                )}
            </div>
        </div>
    );
};
