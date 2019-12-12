import React, {useState, useEffect} from 'react'
import './App.css'
import qs from 'qs'
import axios from  'axios'

function App() {

  const [notes, setNotes] = useState([])
  
  async function getNotesAndPush() {
    const note = []
    try {
    const response = await axios.get('http://localhost:5000/notes')
    response.data.forEach(item => {
        note.push(item.text)
      })
      setNotes(note)
    } catch(err) {
      console.error(err.message)
    }
  }

  async function postNote(event) {
    event.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:5000/notes',
      data: qs.stringify({
        title: 'ola',
        body: event.target.value
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    console.log('submitei')
  } 

  useEffect(() => {
    getNotesAndPush()
  }, [])
  

    return ( 
      <div>
        <ul>
          {notes.map((note, id) =>{
              return(<li key={id}>{note}</li>)
            })}
        </ul>
        <form onSubmit = {postNote}/>
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
             <button type='submit' onClick={postNote}>Enviar</button>
      </div>
    )
}

export default App
