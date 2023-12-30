
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={"ORDER ONLINE"}
            >
                
            </SectionTitle>
            <div className='my-10'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <h2 className='uppercase -mt-14 text-white text-center text-2xl '>Salads</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <h2 className='uppercase -mt-14 text-white text-center text-2xl '>Pizza</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <h2 className='uppercase -mt-14 text-white text-center text-2xl '>Soups</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <h2 className='uppercase -mt-14 text-white text-center text-2xl '>desserts</h2>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Category;