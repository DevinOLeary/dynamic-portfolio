import React from 'react';
import GSAP from 'react-gsap-enhancer';
import {TweenLite, TimelineLite} from 'gsap';

import Nav from './Nav';
import bannerImage from '../images/home-banner.jpg';
import LoadingPane from './small-components/LoadingPane';




function nameFadeIn(){
  return TweenLite.fromTo("#titleName", 1.5, {opacity: 0, y: 0},{opacity: 1, y: 40, delay: 1.5});
};
function quoteFadeIn(){
  return TweenLite.fromTo("#titleQuote", 1.5, {opacity: 0, y: 0},{opacity: 1, y: 40, delay: 2});
};
function firstBoxDrawAnimation(){
  let tl = new TimelineLite();
  return tl.fromTo("#l1", 1, {height:0}, {height:238, ease:"Power1.easeIn", delay: .8})
    .fromTo("#l3", 3, {width:0}, {width:'150%', ease: "Power1.easeOut"});
};
function secondBoxDrawAnimation(){
  let tl = new TimelineLite();
  return tl.fromTo("#l2", 4, {width:0}, {width:'150%', ease:"Power1.easeInOut" , delay: .8});
};

@GSAP()
class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      img: {opacity: 0}
    }
  }

  loaded(){
    this.setState({loading: false, img: {opacity: 1}});
    this.addAnimation(nameFadeIn);
    this.addAnimation(quoteFadeIn);
    this.addAnimation(firstBoxDrawAnimation);
    this.addAnimation(secondBoxDrawAnimation);
    }

  render() {
    let isLoading = this.state.loading;
    if(isLoading){return (
      <div>
        <LoadingPane/>
        <img src={bannerImage} alt="homepage" className="img-full_banner" style={this.state.img} onLoad={this.loaded.bind(this)}/>
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
                <h1 id="titleName">Devin O&#8217;Leary</h1>
                <h4 id="titleQuote">creating authentic solutions for the web</h4>
              </div>
            </hgroup>
            <Nav />
          </header>
        </div>
      );
    }
  }
}

export default HomePage;
