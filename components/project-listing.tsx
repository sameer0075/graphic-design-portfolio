import styles from "../styles/project-listing.module.scss";
import commonStyles from "../styles/common.module.scss";

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

export default function ProjectListing({ project }: ProjectListingProps) {
  const { image, mobileImage, name, description, tools } =
    project;

  return (
    <div className={`project ${styles.projectListing}`}>
      <div className={styles.projectItemContainer}>
        {/* <a
          href={link ?? code}
          title={link ? `Open site of ${name}` : `View Code for ${name}`}
        > */}
          <picture>
            {mobileImage && (
              <source srcSet={mobileImage.src} media="(max-width:967px)" />
            )}
            <img src={image.src} alt={name} className={styles.projectImage} />
          </picture>
        {/* </a> */}
        <div id="projectInfo" className={styles.projectInfo}>
          {/* <a
            href={link ?? code}
            title={link ? `Open site of ${name}` : `View Code for ${name}`}
          > */}
            <h2 className={commonStyles.playfulHover}>{name}</h2>
          {/* </a> */}
          {description.split("\n").map((str, index) => (
            <p key={index}>{str}</p>
          ))}
          <h3>Tools used:</h3>
          <ul className={styles.toolsList}>
            {tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
