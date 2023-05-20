import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")
    if(props.collapsed === false){
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else{
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }

}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
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