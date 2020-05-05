import React, {useState} from "react"

const Form = () =>  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleFormSubmit = e =>{
        e.preventDefault();
        
    }
    return(
        <div className="form">
            <form action={ e => handleFormSubmit}>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="nombre" onChange={ e =>e.target.value} />

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