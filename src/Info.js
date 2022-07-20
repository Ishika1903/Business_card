import photo from "./myphoto.jpeg";
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

export default function Info() {
  return (
    <div className="container">
      <div className="box">
        <div className="myphoto">
          <img src={photo} alt="myphoto" className="photo" />
        </div>
        <div className="details">
            <span className="name">Ishika Shahaney</span><br></br>
            <span className="designation">Frontend Developer</span><br></br>
            <span className="website">ishahaney.org</span>
           
        </div>
        <div className="buttons">
            <a href="mailto: ishahaney1903gmail.com" target="_blank"><button className="email-btn"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;Email</button></a>
            <a href="https://www.linkedin.com/in/ishika1903/" target="_blank"><button className="linkedin-btn"><i class="fa-brands fa-linkedin-in"></i>&nbsp;&nbsp;LinkedIn</button></a>
        </div>
        <div className="about">
            <>
            <About />
            <Interests/>
            <Footer />
            </>
        </div>

      </div>
    </div>
  );
}
