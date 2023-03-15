import React from "react";
import NewBoxForm from "./NewBoxForm";


const Box = ({id,handleRemove,width = 5, height = 5, backGroundColor = "teal"}) => {
    const remove = () => handleRemove(id);
    return(
        <div>
            <div 
                style = {{
                    height: `${height}`,
                    width: `${width}`,
                    backGroundColor
                }}
            />
            <button onClick = {remove} > X </button>
        </div>
    )
}

export default Box;
