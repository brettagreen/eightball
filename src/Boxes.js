import Box from './Box';
import { useState } from "react";

const Boxes = ({boxColors}) => {

    function returnColor() {
        return boxColors[Math.floor(Math.random() * boxColors.length)];
    }

    const [boxes, setBoxColor] = useState(boxColors.map((color, i) => <Box key={i} color={returnColor()} changed={false}/>));
    
    function handleClick(event) {
        setBoxColor(() => {
            const children = event.target.parentNode.childNodes;
            const boxIdx = Math.floor(Math.random() * boxes.length);
            const boxesCopy = [...boxes];
            let style;
            let color;

            //children.length - 1 b/c last child is <button>
            for (let x=0; x < children.length - 1; x++) {
                if (boxIdx === x) {
                    boxesCopy[x] = <Box key={x} color={returnColor()} changed={true} />
                } else {
                    style = children[x].getAttribute('style');
                    color = style.replace('background-color: ', '').replace(';', '');
                    boxesCopy[x] = <Box key={x} color={color} changed={false} />
                }
            }
            return boxesCopy;
        });
    }    

    return (
        <section>
            {boxes}
            <button onClick={handleClick}>Change</button>
        </section>
    )
}

Boxes.defaultProps = {
    boxColors: [
        "gray",
        "beige",
        "blue",
        "darkgreen",
        "darkred",
        "pink",
        "yellow",
        "turquoise",
        "silver",
        "brown",
        "teal",
        "aqua",
        "orange",
        "fuchsia",
        "wheat",
        "powderblue"
    ]
}

export default Boxes;
