import React from "react"
import Form from "../Form/Form";
const Hero = () =>{
    return(
        <div className="hero bg-img">
            <section className="hero is-fullheight-with-navbar ">
                <div className="hero-body">
                    <div className="container level">
                        <div className="level-left">
                            <div className="level-item has-text-left">
                                <div>
                                    <h1 className="is-size-1 has-text-warning">OROGOLD</h1>
                                    <p className="subtitle is-5">
                                        <strong>Cuando belleza y glamour <br/> van de la mano</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div>
                                    <h1 className="is-size-1 has-text-white">Reserva ahora tu cita</h1>
                                    <Form/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
   )
};

export default Hero;
