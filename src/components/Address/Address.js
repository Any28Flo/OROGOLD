import React from "react"
import Map from "./Map";

const Address = () =>{
    return(
        <div>
            <section className="hero  is-medium">
                <div className="hero-body">

                    <div className="container level">
                        <div className="level-left">
                            <div className="level-item">
                                <Map/>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item has-text-left">
                                <div>
                                  <h2 className="title is-uppercase">Horarios</h2>
                                    <p className="">Lunes a viernes de 10:00 a 19:30</p>
                                    <p>Sábados, domingos y fetivos de 10:00 a 18:30</p>
                                    <p>Pueden concertarse tratamientos fuera del horario de apertura indicado con cita previa</p>
                                    <h2 className="title is-uppercase">Dirección</h2>
                                    <p>Av. Insurgentes Sur 105, Roma Sur, Cuahtémoc, 06600 Ciudad de México, CDMX, México</p>
                                    <button className="button is-large ">Ver en mapa</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
};
export default Address;