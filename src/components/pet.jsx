import {useState} from 'react'
import Breed from './breed'

const pet = (props) => {

    return (
    <div className='pet-profile'>
        <p className='pet-breed'>
            {props.pet.breed.map((breed, index)=> (
                <Breed breed={breed} key={index}/>
            ))}
        </p>
        <img src={props.pet.image} alt="image"/>
        <h4 className='pet-intro'>My name is </h4>
        <h3 className='pet-name'>{props.pet.pet_name}</h3>
        <p className='pet-know'>Click my photo to know me!</p>
 
    </div>
    )
}

 export default pet