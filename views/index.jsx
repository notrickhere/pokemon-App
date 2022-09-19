const React = require('react')
const pokemon = require('../models/pokemon.js')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {

    render() {
        return (
            <div>
                <h1 style={myStyle}> See All The Pokemon! </h1>
                <ul>
                    {pokemon.map((ani, i) => {
                        return (
                            <li>
                                <a href={`/pokemon/${i}`}>
                                    {ani.name.charAt(0).toUpperCase() + ani.name.slice(1)}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


module.exports = Index;