import styles from "./projects.module.scss";
import { Typography, ProjectCard } from "../../components";
import projects from "./data";

export default function Projects() {
  return (
    <section className={styles.projects} id='projects'>
      <Typography
        variant='h3'
        style={{ textAlign: "center", marginBottom: "5rem" }}
      >
        My Projects
      </Typography>
      {projects.map(
        ({ image, type, title, stack, link, repo, description }, index) => {
          return (
            <ProjectCard
              key={index}
              image={image}
              type={type}
              title={title}
              stack={stack}
              link={link}
              repo={repo}
            >
              {description}
            </ProjectCard>
          );
        }
      )}
    </section>
  );
}

// { image, type, title, children, stack, link, repo }
