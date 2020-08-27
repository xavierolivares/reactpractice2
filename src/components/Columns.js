import React from 'react'

function Columns() {
    const items = ['blue', 'red', 'yellow', 'green']
    return (
        <>
            {
                items.map((item, i) => <React.Fragment key={i}><td>{item}</td></React.Fragment>)
            }
            <td>Name</td>
            <td>Vishwas</td>
        </>
    )
}

export default Columns
