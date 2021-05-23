import { useEffect, useState } from "react";
import { Typography, Accordion, Button } from "../../components";
import styles from "./about.module.scss";
import education from "./data";

export default function About() {
  const [data, setData] = useState("");

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/pranavgpr");
    const data = await res.json();
    setData(data.avatar_url);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <section className={styles.about} id='about'>
        <div className={styles.about__container}>
          <div style={{ marginBottom: "5rem" }}>
            <Typography variant='h3'>About Me</Typography>
            <div className={styles.about__gridContainer}>
              <div className={styles.about__content}>
                <Typography variant='description'>
                  Hi, I'm Pranav. I'm a Web Developer and a Gamer 👨🏻‍💻 from
                  Madurai.
                  <br />
                  <br />
                  I'm currently pursuing my under graduation 👨🏻‍🎓 on Computer
                  Science and Engineering in University College of Engineering -
                  BIT Campus, Trichy. I love to create awesome sites with
                  beautiful CSS and SVG's. I love to code with my friends ❤.
                  Eating and Cooking 👨🏻‍🍳 are my favorites other than coding.
                  <br />
                  <br />
                  My hobby is to play games. I love to spend hours and hours in
                  playing games. I also have an idea to become a game developer
                  💪🏻.
                </Typography>
                <Button
                  href='https://drive.google.com/file/d/1t5eq798tXWKJacddPnFXsRkPLq4OePOo/view?usp=sharing'
                  style={{
                    marginTop: "3rem",
                    border: "2px solid #007acc",
                    borderRadius: "5px",
                  }}
                  target_blank={true}
                >
                  Resume
                </Button>
              </div>

              <figure className={styles.about__imageContainer}>
                <img className={styles.about__image} src={data} />
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
        </div>
      </section>
      <section id='skills' className={styles.skills}>
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

            <span className='icon icon-react'></span>

            <span className='icon icon-redux'></span>

            <span className='icon icon-next-dot-js'></span>

            <span className='icon icon-apollo-graphql-compact'></span>

            <span className='icon icon-graphql'></span>

            <span className='icon icon-node-dot-js'></span>

            <span className='icon icon-express'></span>

            <span className='icon icon-mongodb'></span>

            <span className='icon icon-firebase'></span>

            <span className='icon icon-mysql'></span>

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

            <span className='icon icon-oracle'></span>

            <span className='icon icon-postgresql'></span>

            <span className='icon icon-figma-1'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
              <span className='path4'></span>
              <span className='path5'></span>
            </span>

            <span className='icon icon-c'></span>

            <span className='icon icon-cplusplus'></span>

            <span className='icon icon-jee-3'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
              <span className='path4'></span>
              <span className='path5'></span>
            </span>

            <span className='social social-python-5'></span>
          </div>
        </div>
      </section>
    </>
  );
}
