const Box = (props) => {

    return (
        <div className="Box" style={{backgroundColor: props.color}}>
            {props.changed ? <p>changed!</p> : null}
        </div>
    )
}

export default Box;