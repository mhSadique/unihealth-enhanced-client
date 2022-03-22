import { useEffect, useState } from "react";

const useCheckIsAdmin = function () {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://agile-garden-36261.herokuapp.com/doctor')
            .then(res => res.json())
            .then(data => {
                setDoctors(data.doctors)
            })
    }, []);

    return doctors;
}

export default useCheckIsAdmin;