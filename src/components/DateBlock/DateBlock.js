import './DateBlock.css'

function DateBlock(props) {
    const startDate = new Date(props.start_time);
    const end_date = new Date(props.end_time);

    const day = startDate.getDate();
    const month = startDate.toLocaleString('default', { month: 'short' });

    const start = startDate.toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit', hourCycle: 'h23'});
    const end = end_date.toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit', hourCycle: 'h23'});

    const dayStyle = {
        fontSize: "24px",
    }

    const monthStyle = {
        fontSize: "16px",
    }

    const timeStyle = {
        fontSize: "8px",
    }

    return (
        <div className="date_block">
            <div style={dayStyle}>{day}</div>
            <div style={monthStyle}>{month}</div>
            <div style={timeStyle}>{start} - {end}</div>
        </div>
    )
}

export default DateBlock
