import { useEffect, useState } from "react";

const useServices = function () {
    const [generalServices, setGeneralServices] = useState([]);
    const [cancerServices, setCancerServices] = useState([]);
    const [specialtyServices, setSpecialtyServices] = useState([]);

    useEffect(() => {
        fetch('/ServiceInfo.json')
            .then(res => res.json())
            .then(data => {
                setGeneralServices(data.generalServices)
                setCancerServices(data.cancerServices)
                setSpecialtyServices(data.specialtyServices)
            })
    }, []);

    return {
        generalServices,
        cancerServices,
        specialtyServices
    };
}

export default useServices;