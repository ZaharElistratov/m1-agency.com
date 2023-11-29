import {FC, MouseEvent} from 'react';
import {useRouter} from "next/router";

import introTranslation from "@/data/intro.json";

import Container from "@/ui/Container/Container";
import Link from "next/link";
import Icon from "@/ui/Icon/Icon";
import Image from "next/image";

import styles from './Intro.module.scss'

const Intro: FC = () => {
    const {locale} = useRouter()

    const intro = introTranslation.filter(item => item.locale === locale)

    const scrollToBlock = (event: MouseEvent<HTMLAnchorElement>, elementId: string) => {
        event.preventDefault();

        const element = document.getElementById(elementId) as HTMLElement

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <section className={styles.intro} id='intro'>
            <Container className={styles.container}>
                <div className={styles.offer}>
                    <h1 className={styles.title} dangerouslySetInnerHTML={{__html: intro[0].title}}/>
                    <Link
                        className={styles.scroll}
                        href='/'
                        onClick={(event) => scrollToBlock(event, 'about')}
                    >
                        <Icon id='scroll-down' width={100} height={230}/>
                    </Link>
                </div>
                <Image className={styles.img} src='/img/home/intro/img.png' alt='M1' width={1200} height={1150}/>
            </Container>
        </section>
    );
};

export default Intro;