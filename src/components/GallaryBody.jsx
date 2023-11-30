import React from "react";
import './GallaryBody.css'
function GallaryBody(props){
    const imageData = props.imageData;
    return(
        <div>
            <div>
            {
            imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
            })
            }
            </div>
        </div>
    )
}

export default GallaryBody;