import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    console.log('UncontrolledOnOff rendering')
    const OnStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: props.on ? "green" : 'white'
    }
    const OffStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: !props.on ? "red" : 'white'
    }
    const SwitchStyle = {
        width: "15px",
        height: "15px",
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: props.on ? "green" : 'red'
    }
    const onClicked = () => props.onChange(true)
    const offClicked = () => props.onChange(false)
    return (
        <div style={{marginBottom: "10px"}}>
            <div style={OnStyle} onClick={onClicked}>On</div>
            <div style={OffStyle} onClick={offClicked}>Off</div>
            <div style={SwitchStyle}></div>
        </div>
    );
};

