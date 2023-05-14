import './Box.css';

const Box = (props) => {
    console.log('props.color', props.color);
    console.log('props.changed', props.changed);
    return (
        <div className="Box" style={{backgroundColor: props.color}}>
            {props.changed ? <p>changed!</p> : null}
        </div>
    )
}

export default Box;