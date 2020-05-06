import React from "react"
import Map from "./Map";

const Address = () =>{
    return(
        <div>
            <section className="hero  is-medium  section">
                <div className="hero-body">

                    <div className="container level">
                        <div className="level-left">
                            <div className="level-item">
                                <Map/>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <h1>Horarios</h1>
                                <p>Lunes a viernes de 10:00 a 19:30</p>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
};
export default Address;