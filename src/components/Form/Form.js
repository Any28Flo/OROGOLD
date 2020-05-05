import React, {useState} from "react"
import AppointmentService from "./../../services/appointment-service";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Form = () =>  {
    const appointmentService = new AppointmentService();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const MySwal = withReactContent(Swal);

    const handleFormSubmit = e =>{
        console.log("hola")
       appointmentService.create(name,email,phone)
            .then(response =>{
                if(response.status === 200){
                   MySwal.fire({
                        icon: 'success',
                        title :'Yay!',
                        text : 'Cita agendada, exitosamente!!'

                    })
                }
            })
           .catch(e =>{
               MySwal.fire({
                   icon: 'error',
                   title: 'Oops...',
                   text: e.response.msg
               })
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