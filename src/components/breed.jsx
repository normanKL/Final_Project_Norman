const breed = (props) => {

    let colorVariable 

    switch (props.breed.name) {
        case 'Domestic Medium Hair':
            colorVariable = 'cornsilk'
        break
        case 'Mixed Breed':
            colorVariable = 'salmon'
        break
        case 'Domestic Short Hair':
            colorVariable = 'skyblue'
        break
    }

    return (
        <div className="breed" style={{ backgroundColor: colorVariable, color: '#FFFFFF' }}>
            {props.breed.name}
        </div>
    )
}

export default breed