import React from 'react';
import './App.css';
import { Layout, Header, HeaderRow, Textfield, Navigation, Drawer, Footer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './App.css';

//All components are rendered in within the div tags below 

function App() {
    return (
        <div style={{height: 'auto', width: 'auto', margin: 'auto'}}className="demo-big-content">
            <Layout>
                <Header className="header-design" title="Title" scroll>
                    <HeaderRow title="Robert's Weather Application">
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/weatherView">Home</Link>
                            <Link to="/Contact">Contact</Link>
                            <Link to="/WeatherInfoList">WeatherInfoList</Link>
                            <Link to="/About">About Weather App</Link>
                        </Navigation>
                        
                    </HeaderRow>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/weatherView">Home</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/WeatherInfoList">WeatherInfoList</Link>
                        <Link to="/About">About WeatherApp</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                    <Footer className="footer-design" title="Title" scroll>
                   <p className="p2"> CONNECT WITH US! </p>
                   <div className="social-links-container">
                   <a
                     href="https://www.youtube.com/">
                     <FontAwesomeIcon icon={faYoutube} size="3x"/></a>
                    <a
                     href="https://www.facebook.com/">
                     <FontAwesomeIcon icon={faFacebook} size="3x"/></a>
                     <a
                     href="https://www.twitter.com/">
                     <FontAwesomeIcon icon={faTwitter} size="3x"/></a>
                     <a
                     href="https://www.Instagram.com/">
                     <FontAwesomeIcon icon={faInstagram} size="3x" /></a>
                     </div>
                </Footer>
                </Content>    
            </Layout>
        </div>
    );
}

export default App;


 
