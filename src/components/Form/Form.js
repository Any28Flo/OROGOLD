import React, {useState} from "react"
import AppointmentService from "./../../services/appointment-service";
const Form = () =>  {
    const appointmentService = new AppointmentService();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleFormSubmit = e =>{
        console.log("hola")
       appointmentService.create(name,email,phone)
            .then(response =>{
                if(response.status === 200){
                    console.log("sucess")
                }
            })
        
        
    }
    return(
        <div className="form">
            <form onSubmit= { e =>{
                e.preventDefault();
                handleFormSubmit()
            }}>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="nombre" value={name} onChange={e =>setName(e.target.value)}/>

                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />

                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="number" placeholder="telefono" value={phone} onChange={e => setPhone(e.target.value)} />

                    </p>
                </div>
                <button type="submit" className="button is-warning">Reserva ahora</button>

            </form>


        </div>
    )
};

export default Form