import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/projects");
  const projects = await res.json();

  return {
    props: { projects },
  };
}

function Projects({ projects }) {
  return (
    <div>
      <Header />
      <h1>Mes Projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Projects;
