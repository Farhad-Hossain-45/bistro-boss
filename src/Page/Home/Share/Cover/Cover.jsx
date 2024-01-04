/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';


const Cover = ({ image, title, description }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -30, max: 30 }}
                bgImage={image}
                bgImageAlt="our menu"
                strength={-200}
            >
                <div className="hero h-[500px]">
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="bg-black bg-opacity-50 md:px-48 px-20 py-16 md:py-28">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>

                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cover;