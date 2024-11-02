import { useState } from 'react';
import Breed from './breed';

const Pet = (props) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prevShow) => !prevShow);
        console.log("Toggled show:", !show); // Debug: Check if show state is toggling
    };

    return (
        <div className='pet-profile' onClick={handleClick}>
            {!show ? (
                <>
                    <p className='pet-breed'>
                        {props.pet.breed.map((breed, index) => (
                            <Breed breed={breed} key={index} />
                        ))}
                    </p>
                    <img src={props.pet.image} alt="image" />
                    <div className="pet-intro">
                    {/* <h4 style={{fontSize:'1vw'}}>My name is: </h4> */}
                    <h3 style={{fontSize:'2vw'}}>{props.pet.pet_name}</h3>
                    </div>
                </>
            ) : (
                <div className='pet-know'>
                    <p className='details-title'>Know More About Me!</p>
                    <p className='details'>I am a {props.pet.type}</p>
                    <p className='details'>Age: {props.pet.age}</p>
                    <p className='details'>Sex: {props.pet.sex}</p>
                    <p className='details'>Spayed/Neutered: {props.pet.spayed}</p>
                    <p className='details'>Vaccinated: {props.pet.vaccinated}</p>
                    <p className='details'>Dewormed: {props.pet.dewormed}</p>
                    <p className='details'>Location: {props.pet.location}</p>
                    <p className='details'>Posted: {props.pet.posted}</p>
                </div>
            )}
        </div>
    );
};

export default Pet;

