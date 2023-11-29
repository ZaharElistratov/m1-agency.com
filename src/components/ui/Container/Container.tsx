import {FC, ReactNode} from 'react';
import cn from "classnames";

import styles from './Container.module.scss'

interface ContainerProps {
    className?: string,
    children: ReactNode
}

const Container: FC<ContainerProps> = ({className, children}) => {
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    );
};

export default Container;