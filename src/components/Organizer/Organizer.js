import './Organizer.css'

function Organizer(props) {

    return (
        <div className="organizer_block">
            {props.profile_pic && <img className="organizer_profile"
                alt="avatar"
                src={props.profile_pic}
                height="30"
                width="30">
            </img>}
            <p className="organizer">{props.name}</p>
        </div>
    )
}

export default Organizer

