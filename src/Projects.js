import ProjectModal from "./ProjectModal";
import ProjectContent from "./ProjectContent";
import "./Projects.css";
const Projects = (props) => {
  return (
    <div className="projectsGridContainer">
      <h4 class="projectsGridTitle">Portfolio</h4>
      <div className="gridContainer">
        <ProjectModal
          imageSource={`${process.env.PUBLIC_URL}/spaceCadetLogo.png`}
          imageAlt="testProject"
          projectTitle="SpaceCadet"
          className="spaceCadetLogo"
          projectContent={<ProjectContent />}
        />

        <ProjectModal
          imageSource={`${process.env.PUBLIC_URL}/guessMyNumber.png`}
          imageAlt="testProject"
          projectTitle="Guess My Number"
          projectContent={<ProjectContent />}
        />

        <ProjectModal
          imageSource={`${process.env.PUBLIC_URL}/recipePicker.png`}
          imageAlt="testProject"
          projectTitle="Recipe Picker"
          projectContent={<ProjectContent />}
        />

        <ProjectModal
          imageSource={`${process.env.PUBLIC_URL}/elGatoGalaxy.png`}
          imageAlt="testProject"
          projectTitle="El Gato Galaxy"
          projectContent={<ProjectContent />}
        />
      </div>
    </div>
  );
};

export default Projects;
