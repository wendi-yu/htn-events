import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './App.css';

import logo from './logo.png'

import EventCard from './EventCard/EventCard.js'
import Header from './Header/Header.js'
import { useEffect, useState } from 'react';


function App() {
  const url = "https://api.hackthenorth.com/v3/events";

  const filterPrivate = event => event.permission !== "private"

  const [events, setEvents] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    async function getEvents() {
      const eventObj = await axios.get(url);
      var events = eventObj.data
      console.log(events)
      const filters = [filterPrivate]
      filters.forEach(filterFn => events = events.filter(filterFn))

      setEvents(events.sort((a, b) => a.start_time - b.start_time));
    }
    getEvents();
  }, [])


  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <img
            alt="Hack the North logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-middle brand_logo">
          </img>
          <Navbar.Brand as="p" className="brand">HACK THE NORTH</Navbar.Brand>
        </Container>
      </Navbar>
      <Header></Header>
      <ul>
        {events.map((value, _) => 
        <li key={value.id}>
          <EventCard event={value} loggedIn={loggedIn}></EventCard>
        </li>)}
      </ul>

    </div>
  )
}

export default App;
