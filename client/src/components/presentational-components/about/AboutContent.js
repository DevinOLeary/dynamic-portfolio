import React from 'react';



//components
import TimelineHeader from './TimelineHeader';
import LoadingPane from '../../small-components/LoadingPane';
import TimelineContent from './TimelineContent';
import HeadShot from './HeadShot';

const AboutContent = (props) => {
  if(props.loading === true){return <LoadingPane/>}else{
    return (
      <main>
        <div>
          <section className="flex-container row even-spacing reverse-wrap body-section">
            <div className="flex-container center column ">
              <TimelineHeader {...props} loadTime={props.loadTime}/>
              <div className="flex-container center column timeline-body">

                  {props.activeTimePeriod.length > 0 ?
                      <TimelineContent active={props.activeTimePeriod[0]}/>
                    :
                      <article className="content-body_read">
                        <h2 className="text-center">#lifegoals</h2>
                        <br/>
                        <p>
                          Live intentionally
                          <span className="vertical-dash">|</span>
                          Continually add tools
                          <span className="vertical-dash">|</span>
                          Maximize experiences
                          <span className="vertical-dash">|</span>
                          Go a step farther
                          <span className="vertical-dash">|</span>
                          Make the steps count
                        </p>
                        <br/>
                        <h3>I am an essentialist,</h3>
                        <p>filling my life with next level experiences, meaningful relationships, and passionate work, whatever it may be. Life is too short to not live exceptionally.</p>
                      </article>
                }

              </div>
            </div>
              {props.headshot &&
                <HeadShot {...props} loadPic={props.loadPic}/>
              }
          </section>
          <section className="body-section ">
            <hgroup className="header-offset flex-container column">
              <h2 className="text-center">my passions</h2>
              <hr className="divider-colored"/>
            </hgroup>
            <div className="flex-container center">
              <article className="flex-container column center display-box">
                <div className="inner-box flex-container center column">
                  <h3>biking:</h3>
                  <p className="content-body_read">Mountain, road, gravel, town, unicycle. Being able to ride my bikes in cool places and with interesting people ties into pretty much all the things that I see as important in this world, namely nature preservation, community, and health, and tech is the powerful tool that can bring it all together.</p>
                  <br/>
                  <h3>the environment:</h3>
                  <p className="content-body_read">I get pretty heated when I think about the ways we are destroying the environment, but then I get really excited and inspired when I can talk about all the amazing people out their devoting their skills and resources to save the planet and everything on it. Wherever I am in life, I hope that my skills and resources can be used with the same intention.</p>
                  <h3>community:</h3>
                  <p className="content-body_read">I get energized by people doing innovative things to bring
                  everyone together in their community. My life mission is to
                  maximize my role in creating community, and using the web to extend the range infinitely.</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default AboutContent;
