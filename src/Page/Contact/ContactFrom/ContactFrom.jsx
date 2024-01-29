
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { IoIosSend } from "react-icons/io";


const ContactFrom = () => {
    return (
        <div className="my-10">
            <div>
                <SectionTitle subHeading={'---Send Us a Message---'} heading={'CONTACT FORM'}></SectionTitle>
            </div>
            <div className="bg-[#F3F3F3] max-w-5xl mx-auto">
                <div className="mt-10 md:flex gap-5 justify-around  ">
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Name*</span>

                            </div>
                            <input type="text" placeholder="Enter your name" className="input input-bordered md:w-[400px] w-full" />

                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Email*</span>

                            </div>
                            <input type="text" placeholder="Enter your email" className="input input-bordered md:w-[400px] w-full" />

                        </label>
                    </div>

                </div>
                <div className="md:flex justify-center">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Phone*</span>

                        </div>
                        <input type="number" placeholder="Enter your phone number" className="input input-bordered md:w-[930px] w-full" />

                    </label>
                </div>
                <div className="md:flex justify-center">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-xl font-semibold">Message*</span>
                           
                        </div>
                        <textarea className="textarea textarea-bordered md:w-[930px] w-full md:h-56 h-32" placeholder="Write your message here "></textarea>
                        
                    </label>
                </div>
                <div className="mt-5 flex justify-center">
                    <button className="btn text-white text-xl font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130]" >Send Message <IoIosSend /></button>
                </div>
            </div>

        </div>
    );
};

export default ContactFrom;