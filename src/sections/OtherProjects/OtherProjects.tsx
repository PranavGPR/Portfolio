import { Accordion, Typography } from "../../components";
import styles from "./otherprojects.module.scss";
import otherprs from "./data";

export default function OtherProjects() {
  return (
    <section className={styles.otherprs}>
      <div className={styles.otherprs__container}>
        <Typography variant='h3' style={{ marginBottom: "5rem" }}>
          Other Projects
        </Typography>
        <div className={styles.otherprs__accordion_container}>
          {otherprs.map(
            ({ title, type, tech, repo, link, description }, index) => {
              return (
                <Accordion
                  key={index}
                  title={title}
                  type={type}
                  tech={tech}
                  repo={repo}
                  link={link}
                  arrow={false}
                >
                  {description}
                </Accordion>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
