import React from "react"
import {treatments} from "../Treatments/treatments-data";
import TreatmentDetail from "../Treatments/TreatmentDetail";

const AboutUs = () =>{
    return(
        <div className="aboutus-section">
            <section className="section">
                <div className="container aboutus-background">
                    <h1 className="title">Quienes somos</h1>
                    <h2 className="subtitle">
                        El lujoso spa en Orogold,en México, ofrece un refugio sublime en pleno corazón de la ciudad.
                    </h2>
                    <h2>Los huéspedes pueden disfrutar de un gimnasio de última generación, una relajante sauna o duchas
                    a chorro durante su escapada de 5 estrellas en nuestro hotel boutique en París. Por otra parte, nuestra
                    nueva asociación con ZEAL COSMETICS asegura la disponibilidad de una gama de relajantes tratamientos faciles y corporales para mimarse y revitalizarse.</h2>
                </div>

            </section>
        </div>

    )
};
export default AboutUs;