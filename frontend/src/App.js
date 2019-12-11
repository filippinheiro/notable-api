import React, {useState, useEffect} from 'react'
import './App.css'
import axios from  'axios'

function App() {

  const [notes, setNotes] = useState([])
  
  async function getNotes() {
    const note = []
    await axios.get('http://localhost:5000/notes').then(response => {
      response.data.forEach(item => {
        note.push(item.text)
      })
      setNotes(note)
    }).catch(err => {
      console.error(err.message)
    })
  }

  async function postNote(event) {
    event.preventDefault()
    const body = FormData(event.target)
    axios.post('http://localhost:5000/notes', {
      title: 'ola',
      body
    }).then(response => {
      console.log(response)
    }).catch(err => err)
  } 

  useEffect(() => {
    getNotes()
  }, [])
  

    return ( 
      <div>
        <ul>
          {notes.map((note, id) =>{
              return(<li key={id}>{note}</li>)
            })}
        </ul>
        <form onSubmit = {event => {
          const err = postNote(event)
          if(err) 
            console.log('erro postando nota')
        }}/>
            <label htmlFor='title'>Título</label>
            <input id='title'
                    type='text'
                    name='title'
                    placeholder='titulo'/>
            <label htmlFor='note'>Nota</label>
            <input id='nota'
                    type='text'
                    name='note'
                    placeholder='Nota'/> 
             <button type='submit'>Enviar</button>
      </div>
    )
}

export default App
