import React from 'react';
import GSAP from 'react-gsap-enhancer';
import {TweenLite, TimelineLite} from 'gsap';

import Nav from './Nav';
import bannerImage from '../images/home-banner.jpg';
import LoadingPane from './small-components/LoadingPane';




function nameFadeIn(){
  return TweenLite.fromTo("#titleName", 1.5, {opacity: 0, y: 0},{opacity: 1, y: 30, delay: 1.5});
};
function quoteFadeIn(){
  return TweenLite.fromTo("#titleQuote", 1.5, {opacity: 0, y: 0},{opacity: 1, y: 35, delay: 2});
};
function firstBoxDrawAnimation(){
  let tl = new TimelineLite();
  return tl.fromTo("#l1", 1, {height:0}, {height:'90.3%', ease:"Power1.easeIn", delay: .8})
    .fromTo("#l3", 3, {width:0}, {width:'150%', ease: "Power1.easeOut"});
};
function secondBoxDrawAnimation(){
  let tl = new TimelineLite();
  return tl.fromTo("#l2", 4, {width:0}, {width:'150%', ease:"Power1.easeInOut" , delay: .8});
};

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  loaded(){
    this.setState({loading: false});
    this.addAnimation(nameFadeIn);
    this.addAnimation(quoteFadeIn);
    this.addAnimation(firstBoxDrawAnimation);
    this.addAnimation(secondBoxDrawAnimation);
    }

  render() {
    let isLoading = this.state.loading;
    const clearBackground = {
      backgroundColor: 'rgba(240, 89, 65, 0)'
    }
    const hidden = {
      opacity: 0
    }
    if(isLoading){return (
      <div>
        <LoadingPane/>
        <img src={bannerImage} alt="homepage" className="img-full_banner" style={hidden} onLoad={this.loaded.bind(this)}/>
      </div>
    )
      }else{
      return(
        <div>
          <div className="overlay-home_banner">
          </div>
          <img src={bannerImage} alt="homepage" className="img-full_banner"/>
          <header className="flex-container column space-between homepage-container">
            <hgroup className="flex-container center column text-inverse">
              <div className="title-box">
                <span id="l1"></span>
                <span id="l2"></span>
                <span id="l3"></span>
                <h1 id="titleName" style={clearBackground}>Devin O&#8217;Leary</h1>
                <h4 id="titleQuote" style={clearBackground}>creating authentic solutions for the web</h4>
              </div>
            </hgroup>
            <Nav />
          </header>
        </div>
      );
    }
  }
}

export default GSAP()(HomePage);
