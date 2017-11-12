import React from 'react';

import {LeftButton, RightButton} from '../../small-components/SliderButtons';
import animations from '../../small-components/animations';

class ProjectSlider extends React.Component {
  constructor(props){
    super(props)
    this.slideIndex = 1;
    this.slides = [];
  }
  componentDidMount(){
    this.showSlides(this.slideIndex);
  }

  showSlides = (n) => {
    let i;
    this.slides = document.getElementsByClassName('img-project_preview');
    if(n > this.slides.length){this.slideIndex = 1}
    if(n < 1){this.slideIndex = this.slides.length}
    for(i = 0; i < this.slides.length; i++){
      this.slides[i].style.display = 'none';
    }
    if(this.slides.length){
      let activeSlide = this.slides[this.slideIndex-1]
      activeSlide.style.display = 'block';
      animations.fadeIn(activeSlide);

    }
  }

  changeSlide = (n) => {
    this.showSlides(this.slideIndex += n);
  }
  render(){
    return (
      <section className="flex-container row center slider-container">
        <LeftButton onClick={this.changeSlide.bind(null,-1)}/>
          {this.props.children}
        <RightButton onClick={this.changeSlide.bind(null,1)}/>
      </section>
    );
  }
}

export default ProjectSlider;
