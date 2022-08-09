import React from 'react';
import Input from './Input';
//import AcUnitIcon from '@mui/icons-material/AcUnit';
import Countdown from 'react-countdown';


const FormComponent = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <Input placeholder="Enter the grid size" />
        <Input placeholder="Enter the no. of players" />
        <button>Lets play the game!</button>
        <Countdown />
    </form>
  )
}

export default FormComponent