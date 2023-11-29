import {FC, useEffect, useState} from 'react';
import ItemInterface from "@/screens/Home/Services/Item/Item.interface";
import cn from "classnames";
import {useRouter} from "next/router";

import servicesTranslation from "@/data/services.json";

import Container from "@/ui/Container/Container";
import Modal from "@/screens/Home/Services/Modal/Modal";
import Item from "@/screens/Home/Services/Item/Item";

import styles from './Services.module.scss'

const Services: FC = () => {
    const {locale} = useRouter()

    const services = servicesTranslation.filter(item => item.locale === locale)

    const [activeTab, setActiveTab] = useState<ItemInterface | any>(services[0].list[0])
    const [activeItem, setActiveItem] = useState({img: '', title: '', text: ''})
    const [isOpen, setOpen] = useState<boolean>(false)

    useEffect(() => {
        setActiveTab(services[0].list[0])
    }, [locale]);

    const handleChangeTab = (item: ItemInterface) => {
        setActiveTab(item)
    }

    const openModal = (activeItem: {
        img: string,
        title: string,
        text: string
    }) => {
        setActiveItem(activeItem)
        setOpen(true)
    }

    return (
        <section className={styles.services} id='services'>
            <Container>
                <Modal
                    list={services[0].list}
                    activeTab={services[0].list.indexOf(activeTab)}
                    activeItem={activeTab.portfolio.list.indexOf(activeItem)}
                    closeModal={() => setOpen(false)}
                    isOpen={isOpen}
                />
                <h2 className={styles.title}>{services[0].title}</h2>
                <div className={styles.body}>
                    <div className={styles.tabs}>
                        {services[0].list.map((item) =>
                            <button className={cn(styles.tab, item === activeTab && styles.active)}
                                    onClick={() => handleChangeTab(item)}
                                    key={item.name}
                            >
                                {item.title}
                            </button>
                        )}
                    </div>
                    <div className={styles.content}>
                        <Item data={activeTab} openModal={openModal}/>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Services;