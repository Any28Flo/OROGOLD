import axios from "axios"

class AppointmentService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        });
        this.service = service;
    }
    create = (username,email,phone) =>{
        console.log(`service-${username},${email},${phone}`);
        return this.service.post('/create',{username, email, phone})
        .then(response => response)
    };

}

export default AppointmentService;