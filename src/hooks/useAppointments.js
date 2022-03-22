import { useEffect, useState } from "react";

const useAppointments = function () {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://agile-garden-36261.herokuapp.com/appointment')
            .then(res => res.json())
            .then(data => {
                setAppointments(data.appointments);
                console.log(data);
            })
    }, []);

    return appointments;
}

export default useAppointments;