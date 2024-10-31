import React from 'react'

const Main = ({datos}) => {
    const {nombre ='', email='', extra='', tel='', informacion='' } = datos
    return (
        <div className='email-container'>
            <div className='email-header'>
                <h2>asunto</h2>
                <p className='email-form'>
                    De:{""}
                    <span>
                        {nombre} - ({email})
                    </span>
                </p>
            </div>
            <div className='email-body'>
                <p>{extra}</p>
            </div>
        </div>
    );
};

export default Main
