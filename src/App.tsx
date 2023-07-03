import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    return (
        <div className='App'>
            <PageTitle title="This is APP component"/>
            Controlled components
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title="Menu" collapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<OnOff on={on} onChange={setOn}/>*/}
            Uncontrolled components
            <UncontrolledAccordion title='Menu'/>
            <UncontrolledRating/>
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
        </div>
    );
}

const PageTitle = (props: any) => {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
