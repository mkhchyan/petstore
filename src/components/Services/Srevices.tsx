import React, { FC } from 'react';
import { GiTripleNeedle } from 'react-icons/gi'
import { FiScissors } from 'react-icons/fi'
import { RiHeartsFill, RiMedalLine,RiHomeHeartFill } from 'react-icons/ri';
import { FaDog, FaFileContract } from 'react-icons/fa';
import { MdStore } from 'react-icons/md';
import { Title } from '../ui';
import '../../assets/styles/style.scss'

interface Service {
    icon: JSX.Element | string;
    title: string;
    info: string;
}


const services: any = [
    {
        icon: <GiTripleNeedle />,
        title: "Vet Services",
    },
    {
        icon: <FaFileContract />,
        title: "Pet Insurance",
    },
    {
        icon: <FiScissors />,
        title: "Grooming",
    },
    {
        icon: <FaDog />,
        title: "Pet Sitting, Boarding, Walking",
    },
    {
        icon: <RiHeartsFill />,
        title: "Adoptions",
    },
    {
        icon: <RiMedalLine />,
        title: "Training",
    },
    {
        icon: <MdStore />,
        title: "Health and food",
    },
    {
        icon: <RiHomeHeartFill />,
        title: "Pets Hotel",
    },
]


const Services: FC = () => {

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item: Service, index: number) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}


export default Services;