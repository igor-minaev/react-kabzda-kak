import React, {useState} from 'react';

type OnOffPropsType = {
    //on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    console.log('OnOff rendering')
    const [on,setOn]=useState(false)
    const OnStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: on ? "green" : 'white'
    }
    const OffStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: !on ? "red" : 'white'
    }
    const SwitchStyle = {
        width: "15px",
        height: "15px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: on ? "green" : 'red'
    }
    return (
        <div style={{marginBottom:"10px"}}>
            <div style={OnStyle} onClick={()=>setOn(true)}>On</div>
            <div style={OffStyle}  onClick={()=>setOn(false)}>Off</div>
            <div style={SwitchStyle}></div>
        </div>
    );
};

