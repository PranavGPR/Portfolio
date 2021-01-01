import { Typography, Accordion } from "../../components";
import styles from "./about.module.scss";
import education from "./data";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div style={{ marginBottom: "5rem" }}>
          <Typography variant='h3'>About Me</Typography>
          <div className={styles.about__gridContainer}>
            <div className={styles.about__content}>
              <Typography variant='description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat veritatis explicabo asperiores sint perspiciatis,
                incidunt sit, esse aliquid libero atque eos. Quam voluptates
                reiciendis animi officiis sunt modi velit quas. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Ad sunt deserunt
                quasi libero molestiae, iusto dolorum. Distinctio eos iusto
                neque minima voluptate maxime tempora fugiat? Accusamus,
                distinctio. Nihil, hic labore. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Sed perferendis, praesentium
                eveniet blanditiis nihil, delectus, quidem qui ab consectetur
                velit incidunt dicta culpa voluptas explicabo consequuntur
                reprehenderit natus nesciunt veritatis.
              </Typography>
            </div>

            <figure className={styles.about__imageContainer}>
              <img className={styles.about__image} src='/Me.png' />
            </figure>
          </div>
        </div>
        <div className={styles.education}>
          <Typography variant='h4' style={{ marginBottom: "3rem" }}>
            Education
          </Typography>
          {education.map((value, index) => {
            return (
              <Accordion key={index} title={value.title} arrow={true}>
                {value.description}
              </Accordion>
            );
          })}
        </div>
        <div>
          <Typography variant='h3' style={{ marginBottom: "3rem" }}>
            Skills
          </Typography>
          <div className={styles.skills__icons}>
            <span className='icon icon-html5'></span>

            <span className='icon icon-css3'></span>

            <span className='icon icon-sass'></span>

            <span className='icon icon-javascript'></span>

            <span className='icon icon-typescript'></span>

            <span className='icon icon-jee-3'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
              <span className='path4'></span>
              <span className='path5'></span>
            </span>

            <span className='social social-python-5'></span>

            <span className='icon icon-redux'></span>

            <span className='icon icon-node-dot-js'></span>

            <span className='icon icon-express'></span>

            <span className='icon icon-react'></span>

            <span className='icon icon-next-dot-js'></span>

            <span className='icon icon-mongodb'></span>

            <span className='icon icon-firebase'></span>

            <span className='icon icon-mysql'></span>

            <span className='icon icon-oracle'></span>

            <span className='icon icon-postgresql'></span>

            <span className='icon icon-sequelize'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
              <span className='path4'></span>
              <span className='path5'></span>
              <span className='path6'></span>
              <span className='path7'></span>
              <span className='path8'></span>
              <span className='path9'></span>
              <span className='path10'></span>
              <span className='path11'></span>
              <span className='path12'></span>
              <span className='path13'></span>
              <span className='path14'></span>
              <span className='path15'></span>
              <span className='path16'></span>
              <span className='path17'></span>
              <span className='path18'></span>
              <span className='path19'></span>
              <span className='path20'></span>
              <span className='path21'></span>
              <span className='path22'></span>
              <span className='path23'></span>
              <span className='path24'></span>
              <span className='path25'></span>
              <span className='path26'></span>
              <span className='path27'></span>
            </span>

            <span className='icon icon-apollo-graphql-compact'></span>

            <span className='icon icon-graphql'></span>

            <span className='icon icon-figma-1'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
              <span className='path4'></span>
              <span className='path5'></span>
            </span>

            <span className='icon icon-c'></span>

            <span className='icon icon-cplusplus'></span>
          </div>
        </div>
      </div>
    </section>
  );
}
