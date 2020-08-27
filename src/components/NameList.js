import React from 'react'

function NameList() {
    const persons = [
        {
          name: "Bruce",
          id: 1,
          age: 30,
          skill: "React"
        },
        {
          name: "Clark",
          id: 2,
          age: 25,
          skill: "Angular"
        },
        {
          name: "Diana",
          id: 3,
          age: 28,
          skill: "Vue"
        }
    ]
    const personList = persons.map((person) => <h2 key={person.id} >I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {personList}
        </div>
    )
}

export default NameList
