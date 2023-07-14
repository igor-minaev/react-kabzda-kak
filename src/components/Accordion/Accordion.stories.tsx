import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')

export const UsersCollapsedMode = () => <Accordion title="Users" collapsed={true} onClick={callback}/>
export const MenuUncollapsedMose = () => <Accordion title="Menu" collapsed={false} onClick={callback}/>

export const ModeChanging=()=>{
    const [value,setValue]=useState<boolean>(true)
    return(
        <Accordion collapsed={value} title="Menu" onClick={()=>setValue(!value)}/>
    )
}

