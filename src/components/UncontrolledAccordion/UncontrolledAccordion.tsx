import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    console.log("UncontrolledAccordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => setCollapsed(!collapsed)}>TOOGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
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