import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title="This is APP component"/>
            Article 1
            <Rating value={4}/>
            <Accordion title="Menu" collapsed={true}/>
            <Accordion title="Users" collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

const PageTitle = (props:any) => {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
