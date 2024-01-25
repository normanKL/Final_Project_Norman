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
        <h4>Introduction</h4>
        <img src='https://icma.org/sites/default/files/3218_Animal%20shelter.JPG' alt='our shelter'/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='statistic'>
          <h5>Homeless</h5>
          <p>26,952</p>
          <h5>Happy</h5>
          <p>71,771</p>
        </div>
        <div className='introduction-buttons'>
          <h4>Donate & Save Lives</h4>
          <p>Help more than 26,000 rescuers & shelters to save animals!</p>
          <button>Donation Button 1</button>
        </div>
        <div className='contacts'>
          <h4>Contact Us</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>

  
      <div className='array'>

        <div className='adoption-title'>
        <h4>Adopt a pet</h4>
        </div>

         <div className='profiles'>
            {petArray.map((pet, index)=> (
              <pet pet={pet} key={pet.id}/>))}
          </div>
         
        </div>

    </div>

   </div> 
  )
}

export default App
