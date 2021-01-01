import styles from "./projects.module.scss";
import { Typography, ProjectCard } from "../../components";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <Typography variant='h2' style={{ textAlign: "center" }}>
        My Projects
      </Typography>
      <ProjectCard />
    </section>
  );
}
