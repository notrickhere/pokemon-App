const react = require('react')
const pokemon = require('../models/pokemon')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Show extends React.Component {

    render() {
        return (
            <div>
                <h1 style={myStyle}> Gotta Catch 'Em All </h1>
                <h2>{pokemon.name}</h2>
                <img src={`pokemon.img`}></img>
            </div>
        );
    }
}

module.exports = Show