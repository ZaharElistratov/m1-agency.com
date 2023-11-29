import {FC} from 'react';
import {useRouter} from "next/router";

import aboutTranslation from "@/data/about.json";

import Container from "@/ui/Container/Container";

import styles from './About.module.scss'

const About: FC = () => {
    const {locale} = useRouter()

    const about = aboutTranslation.filter(item => item.locale === locale)

    return (
        <section className={styles.about} id='about'>
            <Container className={styles.container}>
                <h2 className={styles.title}>{about[0].title}</h2>
                <div className={styles.body}>
                    {about[0].list.map((item, index) =>
                        <div className={styles.item} key={index}>
                            {item.map((paragraph, index) =>
                                <p className={styles.text} key={index}>
                                    <span>{paragraph.title}</span> {paragraph.text}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default About;