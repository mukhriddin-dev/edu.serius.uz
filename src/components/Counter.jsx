import React from 'react';
import CountUp from 'react-countup';
<CountUp end={100} />
const Counter = () => {
    return (
        <>
            <section id="counts" className="counts">
                <div className="container">

                    <div className="row" data-aos="fade-up">

                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="ri-group-fill"></i>
                                <span
                                    className="purecounter">
                                        <CountUp suffix=" ta" start={0} end={100} duration={4.75} />
                                    </span>
                                <p>O'quvchilar</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="ri-time-fill"></i>
                                <span
                                    className="purecounter">
                                    <CountUp suffix=" daqiqa" start={0} end={120} duration={5.75} />
                                </span>
                                <p>Dars soati</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-headset"></i>
                                <span
                                    className="purecounter">
                                        <CountUp suffix=" ta" start={0} end={8} duration={6.75} />
                                    </span>
                                <p>O'qituvchilar</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-people"></i>
                                <span
                                    lassName="purecounter">
                                        <CountUp suffix=" ta" start={0} end={14} duration={6.95} />
                                    </span>
                                <p>Guruhlar</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
};

export default Counter;