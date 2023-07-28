import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import OpeningHero from "./components/OpeningHero";
import DualBlock from "./components/DualBlock";
import Footer from "./components/Footer";
import SectionSplitter from "./components/SectionSplitter";
import TripleCards from "./components/TripleCards";
import Quote from "./components/Quote";
import { DB1, DB2, TC1, Q1 } from "./ContentData";
import p1 from "./media/p1.jpeg"
import p2 from "./media/p2.jpeg"
import p3 from "./media/p3.jpeg"
import p4 from "./media/p4.jpeg"
import p5 from "./media/p5.jpeg"

const App = () => {
    return (
        <Router>
            <Header />
            <Landing />
            <OpeningHero />
            <SectionSplitter />
            <DualBlock parity={false} title={DB1.title} text={DB1.text} button={DB1.button} href={DB1.href} img={p1}/>
            <DualBlock parity={true} title={DB2.title} text={DB2.text} button={DB2.button} href={DB2.href} img={p2}/>
            <SectionSplitter/>
            <TripleCards titleA={TC1.titleA} titleB={TC1.titleB} titleC={TC1.titleC} textA={TC1.textA} textB={TC1.textB} textC={TC1.textC} 
            hrefA={TC1.hrefA} hrefB={TC1.hrefB} hrefC={TC1.hrefC} buttonA={TC1.buttonA} buttonB={TC1.buttonB} buttonC={TC1.buttonC}
            imgA={p3} imgB={p4} imgC={p5}/>
            <SectionSplitter />
            <Quote text={Q1.text} person={Q1.person}/>
            <Footer />
        </Router>
    );
};

export default App;