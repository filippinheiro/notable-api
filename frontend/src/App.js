import React, {useState, useEffect} from 'react'
import './App.css'
import qs from 'qs'
import axios from  'axios'
import Card from 'react-bootstrap/Card'

function App() {

  const [notes, setNotes] = useState([])
  
  async function getNotesAndPush() {
    try {
      const response = await axios.get('http://localhost:5000/notes')
      setNotes(response.data)
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
        {notes.map((item, id) => 
        <Card style={{ width: '18rem', gravity: 'center' }} className = 'card-block'>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>)
        } 
      </div>
    )
}

export default App
