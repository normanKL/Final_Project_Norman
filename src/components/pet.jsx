import {useState} from 'react'
import breed from './breed'


const pet = (props) => {

    return (
    <div className='pet-profile'>
        <img src={props.breed.image} />
        <h4>My name is </h4>
        <h3>{props.pet.pet_name}</h3>
    </div>
    )
}
 export default pet