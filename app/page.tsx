import Image from "next/image";
import { FaInstagram, FaPinterest } from "react-icons/fa";

import styles from "../styles/home.module.scss";
import commonStyles from "../styles/common.module.scss";

import Header from "../components/header";
import IntroOverlay from "../components/intro-overlay";
import { projectsList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import Logo from "../images/logo.jpeg";

export default function Homepage() {
  return (
    <div className={styles.homeContainer}>
      <IntroOverlay />
      <div id="afterAnimation">
        <Header logoLink="/" />
        <main>
          <section className={styles.hero}>
            <div className={styles.cta}>
              <h1 id="title" className={styles.title}>
                I create
                <span className={commonStyles.playful}> playful </span>{" "}
                experiences.
              </h1>
              <div id="portraitContainer" className={styles.portraitContainer}>
                <Image
                  src={Logo}
                  alt="Portrait of Khadija Butt"
                  className={styles.portrait}
                  priority
                />
              </div>
            </div>
            <p id="jobTitle" className={styles.jobTitle}>
              Khadija Butt / Graphic Designing
            </p>
          </section>
          <section
            id="blogPreviewContainer"
            className={styles.blogPreviewContainer}
          >
            <h2>About Me</h2>
            <p>
              Welcome, I am Khadija Butt, a passionate Graphic Designer. I specialize in the art of logo design, branding, and template creation. With a unique blend of creativity and expertise, I bring your vision to life, crafting designs that speak volumes about your brand&apos;s identity. Whether it&apos;s a logo that captures your essence or templates that streamline your workflow, I am dedicated to delivering exceptional results tailored to your needs. Let&apos;s collaborate and turn your ideas into impactful visuals that leave a lasting impression.
            </p>
          </section>
          <section className={styles.projectContainer} id="projects">
            <div className={styles.projectTitleContainer}>
              <h2>My Projects</h2>
            </div>

            <div className={styles.projectListingsContainer}>
              {projectsList.map((project, index) => (
                <ProjectListing project={project} key={index} />
              ))}
            </div>
          </section>
        </main>
        <footer>
          <h2>Connect with Me</h2>
          <ul id="footerLinks" className={styles.footerLinks}>
            <li>
              <a
                href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Khadija's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://pin.it/2NDBMG68v"
                target="_blank"
                rel="noopener noreferrer"
                title="Go to Khadija's GitHub"
              >
                <FaPinterest />
                <span className={commonStyles.hiddenText}>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/enchant_design_studio_223?igsh=MTY2MTlvbnhzenp4dQ=="
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Khadija on LinkedIn"
              >
                <FaInstagram />
                <span className={commonStyles.hiddenText}>LinkedIn</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
