import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Doctors from '../components/Doctors';
import ServiceDetailBanner from '../components/ServiceDetailBanner';
import ServiceDetailMain from '../components/ServiceDetailMain';
import useServices from '../hooks/useServices';

const ServiceDetail = () => {
  const [singleService, setSingleService] = useState({});
  const { generalServices } = useServices();
  const params = useParams();
  useEffect(() => {
    const singleGeneralService = generalServices.find(service => service.id === parseInt(params.id));

    if (singleGeneralService) {
      setSingleService(singleGeneralService);
    }
  }, [params.id, generalServices]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServiceDetailBanner service={singleService} />
      <ServiceDetailMain service={singleService} />
      <Doctors />
    </>
  );
};

export default ServiceDetail;