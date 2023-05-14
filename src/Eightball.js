import { useState } from "react";
import './Eightball.css';

const Eightball = ({answers}) => {

    const [color, setColor] = useState("black");
    const [text, setText] = useState("Think of a question");
    const [green, setGreen] = useState(0);
    const [goldenrod, setGoldenrod] = useState(0);
    const [red, setRed] = useState(0);

    const chooseRandom = () => Math.floor(Math.random() * answers.length);

    function generate(randomIdx) {
        const bgColor = answers[randomIdx].color;

        if (bgColor === 'green') {
            setGreen(green + 1);
        } else if (bgColor === 'goldenrod') {
            setGoldenrod(goldenrod + 1);
        } else {    
            setRed(red + 1);
        }

        setColor(bgColor);
        setText(answers[randomIdx].msg);
    }

    function reset() {
        setColor('black');
        setText('Think of a question');
        setGreen(0);
        setGoldenrod(0);
        setRed(0);
    }

    return (
        <>
            <div className="Eightball" style={{ backgroundColor: color }} onClick={() => generate(chooseRandom())} >
                <p>{text}</p>
            </div>
            <button onClick={reset}>reset</button>

            <h4>Green: {green}</h4>
            <h4>Goldenrod: {goldenrod}</h4>
            <h4>Red: {red}</h4>
            
        </>
    );
}

Eightball.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
      ]
}

export default Eightball;