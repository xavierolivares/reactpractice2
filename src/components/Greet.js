import React from 'react';

// function Greet() {
//     return <h1>Hello Vishwas</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}, your strength is {props.trait}</h1>
            {props.children}
        </div>
    )
}
export default Greet;