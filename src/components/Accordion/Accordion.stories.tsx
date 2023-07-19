import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        collapsed: {control: 'boolean'},
    },
}

export default meta

type Story = StoryObj<typeof Accordion>

const callback = action('accordion mode change event fired')

export const UsersCollapsedMode: Story = {
    args: {
        title: "Users",
        collapsed: true,
    }
}

export const MenuUncollapsedMode: Story = {
    args: {
        title: "Menu",
        collapsed: false,
    }
}


const AccordionWithState = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion collapsed={value} title="Menu" onClick={() => setValue(!value)}/>
    )
}

export const ModeChanging: Story = {
    render: () => <AccordionWithState/>
}

/*export const UsersCollapsedMode = () => <Accordion title="Users" collapsed={true} onClick={callback}/>
export const MenuUncollapsedMose = () => <Accordion title="Menu" collapsed={false} onClick={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion collapsed={value} title="Menu" onClick={() => setValue(!value)}/>
    )
}*/

