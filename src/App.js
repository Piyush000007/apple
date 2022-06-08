import React from 'react'
import './App.css'
import Header from './Header'
import Alert from './Alert'
import Section from './Section'
import Footer from './Footer'




function App() {
    return (
        <div>
       <Header/>
       <Alert/>
       <Section title="iphone 12" className="first-hightlight-wrapper"/>
       <Section title="iPhone 12 Pro" className="second-hightlight-wrapper"/>
       <Section title="Mac or IPad" className="third-hightlight-wrapper"/>
     <Footer/>
       </div>
    )
}

export default App