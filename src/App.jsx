import './App.css'
import petArray from './pet.json'
import Pet from './components/pet'


const App = () => {

  return (
    <div className='main-page'>

    <div className='page-title'>
      <div></div>
      <img src='https://cdn-icons-png.flaticon.com/512/8454/8454627.png' alt='logo'/>
      <h1>Hugo Animal Welfare Society</h1>
    </div>

    <div className='flex-container'>

      <div className='homepage'>
        <div className='introduction'>
        <h4>About Hugo Animal Welfare Society</h4>
        <img src='https://www.barossamag.com/wp-content/uploads/2019/06/PetsWinter19-1.jpg' alt='our shelter'/>
        <p>Hugo Anima  l Welfare Society is a non-profit animal shelter in Seri Kembangan that has been in operation since 2010. We receive the surrender of unwanted dogs and cats which we will vaccinate, deworm, neuter/spay, and put up for adoption. Currently, there are over 500 dogs and 450 cats under the care of the shelter. The shelter and all costs involved in running it are entirely funded by the generous donations of the public as well as proceeds from charitable events. Our team consists of four office staff, a number of part-time veterinarians, two vet assistant, seven kennel workers, and one driver. We are a registered Society under the Registry of Societies of Malaysia that is led by an elected committee.</p>
        <p>Hugo Animal Welfare Society accepts unwanted pets and stray animals – puppies, adult dogs, kittens and adult cats. We also have hundreds of animals waiting for a forever home.</p>
        </div>

        <div className='introduction-buttons'>
          <h3>Donate & Save Lives</h3>
          <p>Help more than 26,000 rescuers & shelters to save animals!</p>
          <button>Donate Now!</button>
        </div>
        <div className='contacts'>
          <h4>Contact Us</h4>
          <h5>Hugo Animal Welfare Society HQ </h5>
          <p>No.101, Jalan Sangat Besar, 43300 Seri Kembangan, Selangor</p>
          <p>Contact Number: 603-123 1234</p>
        </div>
      </div>

  
      <div className='array'>

        <div className='adoption-title'>
        <button>Adoption Centre</button>
        </div>

         <div>
            <p className='profiles'>
            {petArray.map((pet, index)=> (
              <Pet pet={pet} key={pet.id} />))}
            </p> 
          </div>
         
        </div>

    </div>

   </div> 
  )
}

export default App
