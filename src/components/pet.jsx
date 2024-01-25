import {useState} from 'react'
import Breed from './breed'

const pet = (props) => {

    return (
    <div className='pet-profile'>
        <img src={props.pet.image} alt="image"/>
        <h4>My name is </h4>
        <h3>{props.pet.pet_name}</h3>
        
        <p>
            {props.pet.breed.map((breed, index)=> (
                <Breed breed={breed} key={index}/>
            ))}
        </p>
    </div>
    )
}

 export default pet