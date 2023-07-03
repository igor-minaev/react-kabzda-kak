import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendering")
    return (
        <div>q
            {/*1 variant*/}
            {/*<AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>*/}
            {/* 2 variant*/}
            <AccordionTitle title={props.title} onClick={() => props.onClick(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    // 1 variant
    /*collapsed: boolean
    onClick: (collapsed: boolean) => void*/
    // 2 variant
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}