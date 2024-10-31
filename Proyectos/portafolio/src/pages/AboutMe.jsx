import React from 'react'

export const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className='free'>
                <ul className="list">
                    <h3>free time</h3>
                    <li className='lista'>Los simpson</li>
                    <li className='lista'>Lecturas ciencia ficcion</li>
                    <li className='lista'>escuchar música</li>
                    <li className='lista'>Programar mis homework</li>
                </ul>
            </div>
            <div>
                <img className='foto2' src="../src/assets/aboutme.jpg" alt="" />
            </div>
            <div className='tarjeta'>
                <p>Soy estudiante de Biología apasionado por la intersección entre la ciencia y la tecnología. Me interesa especialmente la bioinformática y cómo los datos pueden transformar nuestra comprensión del mundo natural.

                    Con habilidades en programación y análisis de datos, me dedico a explorar soluciones para proyectos ambientales y a utilizar datos para hacer investigaciones más efectivas. Estoy emocionado por la oportunidad de combinar mis conocimientos biológicos con herramientas tecnológicas para abordar problemas reales.</p>
            </div>

        </div>
    )
}

