import {TweenLite, TimelineLite} from 'gsap';

let tl = new TimelineLite();

export default {
  fadeInDown(target){
    return TweenLite.fromTo(target, 1.5, {opacity:0, y:-20}, {opacity: 1, y:0});
  },
  fadeIn(target){
    return TweenLite.fromTo(target,.7, {opacity: 0}, {opacity:1});
  },
  fadeOut(target){
    return tl.to(target, .4, {opacity:0}).to(target, .4, {height: '0px', opacity: 0});
  }

};
