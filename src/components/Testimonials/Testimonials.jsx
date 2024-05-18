import { useEffect, useState } from "react";
import Titles from "../Titles/Titles";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <section>
            <Titles
                subTitle={"---What Our Clients Say---"}
                title={"TESTIMONIALS"}
            ></Titles>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center justify-center mx-24 my-16 gap-4 text-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h2 className="font-semibold text-xl">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;