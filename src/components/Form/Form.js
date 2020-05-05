import React from "react"

const Form = () =>  {
    return(
        <div className="form">
            <form action="">
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="nombre" />

                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="email" placeholder="email" />

                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="number" placeholder="telefono" />

                    </p>
                </div>
                <button className="button is-warning">Reserva ahora</button>

            </form>


        </div>
    )
};

export default Form