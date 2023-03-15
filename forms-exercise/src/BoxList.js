import {React, useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [box, setBox ] = useState([]);
    const add = boxObj => {
        setBox(box => [...box, boxObj]);

    };
    const remove = (id) => {
        setBox(box => box.filter(boxes => boxes.id !== id));
    }
    //we probably need to map through the components of the box
    const boxMap = box.map(boxes => {
        <Box 
            key = {boxes.id}
            id = {boxes.id}
            width = {boxes.width}
            height = {boxes.height}
            backGroundColor = {boxes.backGroundColor}
            handleRemove = {remove}
        />
    })
    
    return(
        <div>
           <NewBoxForm createBox={add}/>
           {boxMap}
        </div>
    )
}


export default BoxList;