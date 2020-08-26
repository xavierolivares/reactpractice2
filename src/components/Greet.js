import React from 'react';

// function Greet() {
//     return <h1>Hello Vishwas</h1>
// }

const Greet = (props) => {
    const {name, trait} = props
    return (
        <div>
            <h1>Hello {name}, your strength is {trait}</h1>
        </div>
    )
}
export default Greet;