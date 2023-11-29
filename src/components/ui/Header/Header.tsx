import {FC, MouseEvent} from 'react';
import {useRouter} from "next/router";

import headerTranslation from "@/data/header.json";

import Container from "@/ui/Container/Container";
import Link from "next/link";
import Icon from "@/ui/Icon/Icon";
import Select from "@/ui/Select/Select";

import styles from './Header.module.scss'

const Header: FC = () => {
    const {locale, locales} = useRouter()

    const header = headerTranslation.filter(item => item.locale === locale)

    const scrollToBlock = (event: MouseEvent<HTMLAnchorElement>, elementId: string) => {
        if (elementId !== '') {
            event.preventDefault();

            const element = document.getElementById(elementId) as HTMLElement

            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link className={styles.logo} href='/'>
                    <Icon id='logo' width={560} height={115}/>
                </Link>
                <nav className={styles.nav}>
                    {header[0].links.map((item, index) =>
                        <Link
                            className={styles.link}
                            href={item.link}
                            onClick={(event) => scrollToBlock(event, item.block)}
                            key={index}
                        >
                            {item.name}
                        </Link>
                    )}
                </nav>
                <div className={styles.controls}>
                    <Link
                        className={styles.button}
                        href='/'
                        onClick={(event) => scrollToBlock(event, header[0].button.link)}
                    >
                        {header[0].button.name}
                    </Link>
                    <Select defaultSelectText={locale} optionList={locales || []}/>
                </div>
            </Container>
        </header>
    );
};

export default Header;