import React from 'react';

// const Hello = () => <h1>hello vishie</h1>;

const Hello = () => React.createElement('div', {id: 'hello', className: 'dumdum'}, React.createElement('h1', null, 'hello vishie1'));

export default Hello;