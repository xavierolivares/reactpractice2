import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name, i) => <h2 key={i} >{name}</h2>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {nameList}
        </div>
    )
}

export default NameList
