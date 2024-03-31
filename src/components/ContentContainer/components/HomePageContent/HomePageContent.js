import './HomePageContent.css'
import video from './IMG_5527.mp4'

function HomePageContent () {
    return (
        <div className="homePageContent">
            <video autoPlay muted loop className="homePageContent_backgroundVideo">
               <source src={video} type="video/mp4"/>
            </video>
            
            <div className="homePageContent_graddient" />

            <section className="homePageContent_contentContainer">
                <section className="homePageContent_videoBlock">
                    <video autoPlay muted loop className="homePageContent_videoSmall">
                        <source src={video} type="video/mp4"/>
                    </video>
                </section>

                <section className="homePageContent_textBlock">
                    <h1 className="homePageContent_heading">
                        Liia <br /> Khananova
                    </h1>

                    <p className="homePageContent_borderRight">
                        I am a Graphic Designer passionate about 
                        <br /><em>creating</em> and <em>recreating</em> 
                    </p>

                </section>


            </section>
        
            
        
        </div>
    ) 
}
export default HomePageContent