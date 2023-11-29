import ItemInterface from "@/screens/Home/Services/Item/Item.interface";

import Link from "next/link";
import Icon from "@/ui/Icon/Icon";
import Image from "next/image";

import styles from './Item.module.scss'

const Item = ({data, openModal}: {
    data: ItemInterface,
    openModal: (activeItem: { img: string, title: string, text: string }) => void
}) => {
    return (
        <div className={styles.item}>
            <div className={styles.portfolio}>
                <h3 className={styles.title}>{data.portfolio.title}</h3>
                {data.portfolio.market ?
                    <div className={styles.market}>
                        <Image
                            className={styles.img}
                            src={`/img/home/services/${data.portfolio.market.img}`}
                            alt={data.portfolio.market.title}
                            width={380}
                            height={360}
                        />
                        <h4 className={styles.title}>{data.portfolio.market.title}</h4>
                        {data.portfolio.list.map((item, index) =>
                            <button className={styles.button} onClick={() => openModal(item)} key={index}>
                                {data.portfolio.market?.button}
                            </button>
                        )}
                    </div>
                    :
                    <div className={styles.list}>
                        {data.portfolio.list.map((item, index) =>
                            <button className={styles.case} onClick={() => openModal(item)} key={index}>
                                {item.title}
                            </button>
                        )}
                    </div>
                }
            </div>
            <div className={styles.stats}>
                <h3 className={styles.title}>{data.stats.title}</h3>
                <div className={styles.list}>
                    {data.stats.list.map((item, index) =>
                        <div className={styles.stat} key={index}>
                            <Icon id='arrow-right' width={64} height={64}/>
                            <p><span>{item.number}</span> {item.text}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.feedback}>
                <h3 className={styles.title}>{data.feedback.title}</h3>
                <div className={styles.list}>
                    {data.feedback.list.map((item, index) =>
                        <div className={styles.testimonial} key={index}>
                            <p>{item.text}</p>
                            <Image
                                src={`/img/home/services/avatars/${item.avatar}`}
                                alt='avatar'
                                width={100}
                                height={100}
                            />
                        </div>
                    )}
                    <Link className={styles.more} href='https://t.me/M1_reviews'>{data.feedback.button}</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;