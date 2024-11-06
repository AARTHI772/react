import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const MultipleInput = () => {

    const navigate = useNavigate()

    const[container,setContainer]=useState([])

         const addInputField = event => {

        event.preventDefault()

        setContainer([...container,

            {
            
                name:'',
                lastname:''

            },
        
        ])

      
        }

    const deleteInput = index => {
      
        const updatedContainer = [...container]

        updatedContainer.splice(index, 1)

        setContainer(updatedContainer)
    }

    const handleInputChange = (event, index) => {

        const { value } = event.target

        const updatedContainer = [...container]

        updatedContainer[index] = value

        setContainer(updatedContainer)
    }

    let result = container.map((value, index) => (

        <div key={index}>

            <input 
                type="text"

                value={value}

                onChange={event => handleInputChange(event, index)}
            />

            <button onClick={() => deleteInput(index)}>X</button>

            <br />

        </div>
    ))

    useEffect(() => {

        console.log(container)

    }, [container])

    const handleSubmit = event => {

        event.preventDefault()
    }


  return (

    <div>

<button onClick={event => addInputField(event)}>Add  5 Input Field</button>

<form onSubmit={handleSubmit}>

    {result}

    <input type="submit" value="Submit" />

</form>


    </div>
  )
}

export default MultipleInput