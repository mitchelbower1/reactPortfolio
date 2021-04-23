import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <div class="homeContainer">
      <div class="titlebar">
        <h1 class="titletext">Front End Engineer</h1>
      </div>

      <div class="pictureContainer">
        <img
          className="profilePic"
          src={`${process.env.PUBLIC_URL}/profilePic.jpg`}
          alt="Mitchel Bower"
        />
        <h2 class="profileName"> Mitchel Bower</h2>
        <h3 class="profileDescription">
          front end dev - software engineer - full stack web dev
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
