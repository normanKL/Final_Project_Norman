import {useState} from 'react'
import Breed from './breed'

const pet = (props) => {

    const [show, setShow] = useState(false)

        const handleClick = () => {setShow (!show)}

    return (
    <div className='pet-profile'>
        <p className='pet-breed'>
            {props.pet.breed.map((breed, index)=> (
                <Breed breed={breed} key={index}/>
            ))}
        </p>
        <img src={props.pet.image} onClick ={handleClick} alt="image"/>
        <h4 className='pet-intro'>My name is </h4>
        <h3 className='pet-name'>{props.pet.pet_name}</h3>
        
        {show && 
        <div className='pet-know'>
            <p className='details-title'>Know More About Me!</p>
            <p className='details'>I am a {props.pet.type}</p>
            <p className='details'>Age: {props.pet.age}</p>
            <p className='details'>Sex: {props.pet.sex}</p>
            <p className='details'>Spayed/Neutered: {props.pet.spayed}</p>
            <p className='details'>Vaccinated: {props.pet.vaccinated}</p>
            <p className='details'>Dewormed: {props.pet.dewormed}</p>
            <p className='details'>Posted: {props.pet.posted}</p>
        </div>
        }
 
    </div>
    )
}

 export default pet