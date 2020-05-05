import React from "react"
import {treatments} from "./treatments-data";
import TreatmentDetail from "./TreatmentDetail";
const Treatments = () =>{
    return(
        <div className="treatments-section">
            <section className="section">
                <div className="container">
                    <h1 className="title">NUESTROS TRATAMIENTOS</h1>
                    <h2 className="subtitle">
                        El tratamiento de la casa de dos horas de duración trasporta a los clientes a un oasis de relajación.
                        Incluye un masaje de espalda, hombros, piernas y pies utilizando aceites de masaje.
                    </h2>
                    <div className="container">
                        <div className="columns is-desktop">
                            {
                                treatments.map( (treatment,index) =>(
                                    <TreatmentDetail  key= {`treatment-${index}`} details={treatment}/>
                                ))
                            }

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
};
export default Treatments;