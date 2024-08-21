import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildReaching, faEnvelope, faPhone, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import data from '../../JSON/data.json'; // Import the JSON file

function Patient() {
  const { phone, email, affectedSide, condition, speciality } = data.patient; // Access data from JSON

  return (
    <div className='flex flex-col mt-10 px-8 gap-2 w-full md:w-80'>
      <div className='flex flex-row justify-between md:gap-10'>
        <p className='text-[12px] text-[#7D7D7D]'>Phone no :</p>
        <p className='text-[12px] '><FontAwesomeIcon icon={faPhone} /> {phone}</p>
      </div>
      <div className='flex flex-row justify-between md:gap-10'>
        <p className='text-[12px] text-[#7D7D7D]'>Mail ID :</p>
        <p className='text-[12px] '><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
      </div>
      <div className='flex flex-row justify-between md:gap-10'>
        <p className='text-[12px] text-[#7D7D7D]'>Affected side :</p>
        <p className='text-[12px] '><FontAwesomeIcon icon={faChildReaching} /> {affectedSide}</p>
      </div>
      <div className='flex flex-row justify-between md:gap-10'>
        <p className='text-[12px] text-[#7D7D7D]'><FontAwesomeIcon icon={faSteam} /> Condition :</p>
        <p className='text-[12px] '>{condition}</p>
      </div>
      <div className='flex flex-row justify-between md:gap-10'>
        <p className='text-[12px] text-[#7D7D7D]'>Speciality :</p>
        <p className='text-[12px] '><FontAwesomeIcon icon={faSuitcaseMedical} /> {speciality}</p>
      </div>
    </div>
  );
}

export default Patient;
