import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div className='App'>
            <PageTitle title="This is APP component"/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title="Menu" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*<Accordion title="Users" collapsed={false}/>*/}
            Article 2
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            {/* <OnOff on={true}/>
            <OnOff on={false}/>*/}
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion title='Menu'/>
            <UncontrolledRating/>

        </div>
    );
}

const PageTitle = (props: any) => {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
