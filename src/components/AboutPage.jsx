import styles from "./AboutPage.module.css";
import {useWindowSizeType} from "../hooks/useWindowSizeType.js";
import {WindowSizeType} from "../constants/WindowSizeType.js";
import AsyncImage from "./AsyncImage.jsx";
import bioImage from '../assets/bio.png';
import indeedResume from "../constants/indeedResume.json";

function AboutPage() {
    const sizeType = useWindowSizeType();

    return (
        <div className={styles.aboutContainer}>
            {sizeType === WindowSizeType.MOBILE ? (
                <div className={[styles.bioDiv, styles.bioDivMobile].join(" ")}>
                    <AsyncImage
                        src={bioImage}
                        alt="bio"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                    <p className={styles.aboutMeParagraph}>{indeedResume.summary}</p>
                </div>
            ) : (
                <div className={[styles.bioDiv, styles.bioDivDesktop].join(" ")}>
                    <p className={styles.aboutMeParagraph}>{indeedResume.summary}</p>
                    <AsyncImage
                        src={bioImage}
                        alt="bio"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />
                </div>
            )}
            <div className={styles.resumeContainer}>
                <h2 className={styles.resumeTitle}>Experience</h2>
                <ul className={styles.list}>
                    {indeedResume.experiences.map((experience, index) => (
                        <li className={styles.listItem} key={index}>
                            <h3 className={styles.resumeHeader}>{experience.jobTitle}</h3>
                            <h4 className={styles.resumeSubHeader}>{experience.employer} - {experience.location}</h4>
                            <h4 className={styles.resumeSubHeader}>{experience.startDate} - {experience.endDate}</h4>
                            <ul className={styles.detailsList}>
                                {experience.details.map((detail, index) => (
                                    <li className={styles.detailListItem} key={index}>
                                        <p className={styles.detail}>{detail}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <h2 className={styles.resumeTitle}>Education</h2>
                <ul className={styles.list}>
                    {indeedResume.education.map((item, index) => (
                        <li className={styles.listItem} key={index}>
                            <h3 className={styles.resumeHeader}>{item.degree} ({item.type})</h3>
                            <h4 className={styles.resumeSubHeader}>{item.university}</h4>
                            <h4 className={styles.resumeSubHeader}>{item.startDate} - {item.endDate}</h4>
                            <ul className={styles.detailsList}>
                                {item.details.map((detail, index) => (
                                    <li className={styles.detailListItem} key={index}>
                                        <p className={styles.detail}>{detail}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <h2 className={styles.resumeTitle}>Skills</h2>
                {sizeType === WindowSizeType.MOBILE ? (
                    <div className={[styles.skillsContainer, styles.skillsContainerMobile].join(" ")}>
                        {indeedResume.skills.map((skill, index) => (
                            <div className={styles.skill} key={index}>{skill.name}: {skill.years}</div>
                        ))}
                    </div>
                    ):(
                    <div className={[styles.skillsContainer, styles.skillsContainerDesktop].join(" ")}>
                        {indeedResume.skills.map((skill, index) => (
                            <div className={styles.skill} key={index}>{skill.name}: {skill.years}</div>
                        ))}
                    </div>
                    )}
            </div>
        </div>
    );
}

export default AboutPage;
