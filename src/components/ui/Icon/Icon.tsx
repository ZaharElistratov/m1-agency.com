import {FC} from "react";

interface IconProps {
    className?: string,
    id: string,
    width: number,
    height: number,
}

const Icon: FC<IconProps> = ({className, id, height, width}) => {
    return (
        <svg className={className} height={height} width={width}>
            <use href={`/img/icons.svg#${id}`}/>
        </svg>
    );
};

export default Icon;