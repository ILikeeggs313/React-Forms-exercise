import {React, useState} from "react";
import {v4 as uuid} from "uuid";

const NewBoxForm = ({createBox}) => {
    const[formData, setFormData] = useState({
        height: "",
        width: "",
        backGroundColor: ""
    });
    //we need to handle the changes to the form data itself
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value

        }))
    }
    //now we need a view function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        createBox({...formData, id: uuid() });
        //reset the values to 0
        setFormData({height: "", width: "", backGroundColor: ""})
    };

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="width" > Box Width</label>
                    <input 
                        id = "width"
                        type = "text"
                        onChange = {handleChange}
                        name = "width"
                        value = {formData.width} 
                    />
                    <label htmlFor="heigth" > Box Height</label>
                    <input 
                        id = "heigth"
                        type = "text"
                        onChange = {handleChange}
                        name = "heigth"
                        value = {formData.height} 
                    />
                    <label htmlFor="backGroundColor" > Box backGroundColor</label>
                    <input 
                        id = "backGroundColor"
                        type = "text"
                        onChange = {handleChange}
                        name = "backGroundColor"
                        value = {formData.backGroundColor} 
                    />
                </div>
                {/* we need a button to submit the form */}
                <button id = "createNewBox"> Create a new box</button>
            </form>
        </div>
    )
}


export default NewBoxForm;