import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Footer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
// import Footer from './components/FooterComp';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
//All components are rendered in within the div tags below 

function App() {
    return (
        <div style={{height: 'auto', width: 'auto', margin: 'auto'}}className="demo-big-content">
            <Layout>
                <Header className="header-design" title="Title" scroll>
                    <HeaderRow title="Robert's Weather Application">
                        <Textfield
                            value=""
                            onChange={() => { }}
                            label="Search2"
                            expandable
                            expandableIcon="search"
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/Home">Home</Link>
                            <Link to="/weatherView">Weather View</Link>
                            <Link to="/Contact">Contact</Link>
                            <Link to="/About">About Weather App</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/Home">Home</Link>
                        <Link to="/weatherView">Weather View</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/About">About WeatherApp</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />

                    <Footer className="footer-design" title="Title" scroll>
                   <p> And this right here is a spiffy footer, where you can put stuff.</p>
        <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
        <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                </Footer>
                </Content>    
            </Layout>
        </div>
    );
}

export default App;


 
