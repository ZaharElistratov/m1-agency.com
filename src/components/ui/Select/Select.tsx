import {FC, useState} from 'react';
import {useRouter} from "next/router";

import Icon from "@/ui/Icon/Icon";

import styles from './Select.module.scss'

interface SelectProps {
    defaultSelectText?: string,
    optionList: string[]
}

const Select: FC<SelectProps> = ({defaultSelectText, optionList}) => {
    const [selectText, setSelectText] = useState<string>(defaultSelectText || '')
    const [isOpen, setOpen] = useState<boolean>(false)

    const router = useRouter()

    const handleListDisplay = () => {
        setOpen(current => !current)
    };

    const handleOptionClick = (event: any) => {
        setSelectText(event.target.getAttribute("data-name"))
        router.push({query: {...router.query}}, undefined, {
            locale: event.target.getAttribute("data-name")
        })
        setOpen(false)
    }

    return (
        <div className={styles.select}>
            <div className={styles.head} onClick={handleListDisplay}>
                <span>{selectText}</span>
                <Icon id='arrow-down' width={32} height={32}/>
            </div>
            {isOpen && (
                <ul className={styles.body}>
                    {optionList.map(option =>
                        <li
                            className={styles.option}
                            data-name={option}
                            onClick={handleOptionClick}
                            key={option}
                        >
                            {option}
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Select;