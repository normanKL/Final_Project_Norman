const breed = (props) => {

    let colorVariable 

    switch (props.breed.name) {
        case 'Domestic Medium Hair':
            colorVariable = 'cyan'
        break
        case 'Mixed Breed':
            colorVariable = 'salmon'
        break
        case 'Domestic Short Hair':
            colorVariable = 'skyblue'
        break
        case 'Australia Terrier':
            colorVariable = 'tan'
        break
    }

    return (
        <div className="breed" style={{ backgroundColor: colorVariable, color: '#FFFFFF' }}>
            {props.breed.name}
        </div>
    )
}

export default breed