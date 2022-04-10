import React from 'react';
import back from "../assets/img/hero-img.png";


const Hero = () => {
    return (
        <>

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero">

                <div class="container">

                    <div class="row justify-content-between">

                        <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div data-aos="zoom-out">
                                <h1>Biz bilan <span>dasturlashni</span> tushunarli va qulay  muhitda o'rganing !</h1>
                                <h2>Xalqaro darajadagi bilim va hayotiy yangilanish biz bilan!</h2>
                                <div class="text-center text-lg-start">

                                    <div className="order">
                                        <p>Kursga yozilish</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                            <img src={back} class="img-fluid animated" alt="ok" />
                        </div>

                    </div>

                </div>



            </section>
            {/* <!-- End Hero --> */}
        </>
    );
};

export default Hero;