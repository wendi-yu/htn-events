import './EventCard.css'
import arrow from '../../resources/arrow.png'

import Button from 'react-bootstrap/Button'

import DateBlock from '../DateBlock/DateBlock.js'
import Organizer from '../Organizer/Organizer.js'

function EventCard(props) {


    return (
        <div className="event_card" id={props.event.id}>
            <DateBlock
                start_time={props.event.start_time}
                end_time={props.event.end_time}
            >
            </DateBlock>
            <div className="description_block">
                <p className="event_title">{props.event.name}</p>
                {props.event.speakers.length !== 0 && <Organizer
                    profile_pic={props.event.speakers[0].profile_pic}
                    name={props.event.speakers[0].name}
                    >
                </Organizer>}
                <p className="event_type">{props.event.event_type}</p>
                <p className="event_description">{props.event.description}</p>
            </div>
            <Button variant="event" href={props.loggedIn ? props.event.private_url : props.event.public_url}>
                <img
                    alt=""
                    src={arrow}
                    height="15"
                    width="30">
                </img>
            </Button>
        </div>
    )

}

export default EventCard
