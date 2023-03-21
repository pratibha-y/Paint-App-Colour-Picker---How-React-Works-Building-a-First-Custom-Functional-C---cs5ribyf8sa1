import React from 'react';
import { useState } from 'react';
import "../styles/Child.css";

const Selection = ({applyColor})=>{
    let [bg, setBg] = useState({background:""})
    return(
        <div style={bg} onClick={()=>applyColor(setBg)} className={"fix-box"}>
            <h2 className={'subheading'}>Selection</h2>
        </div>
    );
}
export default Selection;
