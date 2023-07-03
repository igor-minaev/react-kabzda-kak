import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    console.log("UncontrolledAccordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={() => setCollapsed(!collapsed)}/>
            {/*<button onClick={() => setCollapsed(!collapsed)}>TOOGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return <h3 onClick={()=>props.setCollapsed()}>{props.title}</h3>
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