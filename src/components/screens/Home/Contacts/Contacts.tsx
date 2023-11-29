import {FC} from 'react';
import {useRouter} from "next/router";

import contactsTranslation from "@/data/contacts.json";

import Container from "@/ui/Container/Container";
import Form from "@/screens/Home/Contacts/Form/Form";

import styles from './Contacts.module.scss'

const Contacts: FC = () => {
    const {locale} = useRouter()

    const contacts = contactsTranslation.filter(item => item.locale === locale)

    return (
        <section className={styles.contacts} id='contacts'>
            <Container className={styles.container}>
                <h2 className={styles.title}>{contacts[0].title}</h2>
                <div className={styles.socials}>
                    {contacts[0].list.map((item, index) =>
                        <div className={styles.item} key={index}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <a className={styles.link} href={item.link}>{item.text}</a>
                        </div>
                    )}
                </div>
                <Form/>
            </Container>
        </section>
    );
};

export default Contacts;