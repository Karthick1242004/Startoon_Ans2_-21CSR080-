import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import data from "../../JSON/data.json";

function Header() {
  const { name, age, id } = data.patient_name; 

  return (
    <>
      <div className='flex flex-row w-full justify-center gap-28 mt-8'>
        <div>
          <h2 className='text-[22px] text-[#343481]'>{name}, F/{age}</h2>
          <p className='text-[14px] text-[#343481]'>Patient ID: {id}</p>
        </div>
        <div>
          <FontAwesomeIcon className="border-[#343481] text-[#25255d] border-2 rounded-full px-2 py-2 text-4xl" icon={faUser} />
        </div>
      </div>
    </>
  );
}

export default Header;
