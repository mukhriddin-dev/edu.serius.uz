import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"
              data-aos="fade-right"
            >
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a>
            </div>

            <div
              className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
              data-aos="fade-left"
            >
              <h3>Nega aynan biz ?</h3>
              <p>
                Esse voluptas cumque vel exercitationem. Reiciendis est hic
                accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
                voluptate sed facere corporis dolores excepturi. Libero
                laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
              </p>

              <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon">
                  <i className="bx bx-fingerprint"></i>
                </div>
                <h4 className="title">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon">
                  <i className="bx bx-gift"></i>
                </div>
                <h4 className="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>

              <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon">
                  <i className="bx bx-atom"></i>
                </div>
                <h4 className="title">
                  <a href="">Dine Pad</a>
                </h4>
                <p className="description">
                  Explicabo est voluptatum asperiores consequatur magnam. Et
                  veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}
    </>
  );
};

export default About;
