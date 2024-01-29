import { Helmet } from "react-helmet";
import Cover from "../Home/Share/Cover/Cover";
import contactImage from "../../assets/contact/banner.jpg"
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import ContactFrom from "./ContactFrom/ContactFrom";

const Contact = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>BISTRO BOSS | CONTACT US</title>
                    {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
                </Helmet>
            </div>
            <div>
                <div>
                    <Cover image={contactImage} title={'CONTACT US'} description={'Would you like to try a dish?'}></Cover>
                </div>
                <div className="my-10">
                    <SectionTitle subHeading={'---Visit Us---'} heading={'OUR LOCATION'}></SectionTitle>
                </div>
                <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                    <div>
                        <div className="bg-[#D1A054] ml-5 md:ml-0 h-9 w-80 flex flex-center items-center text-white text-2xl justify-center">
                            <BiSolidPhoneCall />
                        </div>
                        <div className="bg-[#F3F3F3] md:ml-5 ml-8 w-72 h-48 justify-center items-center flex flex-col">
                            <p className="text-2xl font-bold ">PHONE</p>
                            <p className="mt-2 font-semibold">+38 (012) 34 56 789</p>

                        </div>
                    </div>
                    <div>
                        <div className="bg-[#D1A054] ml-5 md:ml-0 h-9 w-80 flex flex-center items-center text-white text-2xl justify-center">
                            <FaLocationDot />
                        </div>
                        <div className="bg-[#F3F3F3] md:ml-5 ml-8 w-72 h-48 justify-center items-center flex flex-col">
                            <p className="text-2xl font-bold ">ADDRESS</p>
                            <p className="mt-2 font-semibold">+38 (012) 34 56 789</p>

                        </div>
                    </div>
                    <div className="">
                        <div className="bg-[#D1A054] h-9 ml-5 md:ml-0 w-80 flex flex-center items-center text-white text-2xl justify-center">
                            <IoIosTime />
                        </div>
                        <div className="bg-[#F3F3F3] md:ml-5 ml-8 w-72 h-48 justify-center items-center flex flex-col">
                            <p className="text-2xl font-bold ">WORKING HOURS</p>
                            <p className="mt-2 font-semibold">Mon - Fri: 08:00 - 22:00</p>
                            <p className="mt-2 font-semibold">Sat - Sun: 10:00 - 23:00</p>

                        </div>
                    </div>
                </div>
            </div>
            <ContactFrom></ContactFrom>
        </div>
    );
};

export default Contact;