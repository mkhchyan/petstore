import React, { FC } from 'react';
import '../assets/styles/style.scss';

const Footer: FC = () => {

    const currentDate = new Date();
    const year: number = currentDate.getFullYear();

    return (
        <div className="Footer">
            <div className="Reserved">
                <div className="Container">
                    <p>
                        © {year} All
                        rights reserved. Petstore.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;