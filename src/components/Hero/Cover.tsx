import React, { FC } from 'react';

interface CoverProps {
    coverClass?: string;
    children?: any;
}

const Cover: FC<CoverProps> = (props) => {
    const { coverClass, children } = props;
    return (
        <header className={coverClass}>
            {children}
        </header>
    )
}

export default Cover;

Cover.defaultProps = {
    coverClass: "defaultHero"
};