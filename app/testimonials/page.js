import React from 'react'
import Header from '../components/Header'

const testimonialsData = [
    {
      text: "Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus, aliquet morbi.",
      name: "John Smith",
      role: "Erat netus",
      image: "/avatar2.jpg",
    },
    {
      text: "Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus, aliquet morbi.",
      name: "John Smith",
      role: "Erat netus",
      image: "/avatar4.jpg",
    },
    {
      text: "Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit class dapibus, aliquet morbi.",
      name: "John Smith",
      role: "Erat netus",
      image: "/avatar5.jpg",
    },
  ];

const page = () => {
    return (
        <>
      {/* <Head>
        <title>Testimonials - TeacherTest</title>
        <meta name="description" content="区块链寒假测试" />
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/styles.min.css" />
      </Head> */}

      <nav className="navbar navbar-expand-md sticky-top py-3 navbar-dark" id="mainNav">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                <path fillRule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
              </svg>
            </span>
            <span>TeacherTest</span>
          </a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Header/>
        </div>
      </nav>

      <section className="py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Testimonials</p>
              <h2 className="fw-bold"><strong>What People Say About us</strong></h2>
              <p className="text-muted">No matter the project, our team can handle it.&nbsp;</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
            {testimonialsData.map((testimonial, index) => (
              <div className="col mb-4" key={index}>
                <div className="d-flex flex-column align-items-center align-items-sm-start">
                  <p className="bg-dark border rounded border-dark p-4">{testimonial.text}</p>
                  <div className="d-flex">
                    <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src={testimonial.image} alt="Testimonial avatar" />
                    <div>
                      <p className="fw-bold text-primary mb-0">{testimonial.name}</p>
                      <p className="text-muted mb-0">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-dark">
        <div className="container py-4 py-lg-5">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
              <h3 className="fs-6 text-white">Services</h3>
              <ul className="list-unstyled">
                <li><a className="link-light" href="#">Service 1</a></li>
                <li><a className="link-light" href="#">Service 2</a></li>
                <li><a className="link-light" href="#">Service 3</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
              <h3 className="fs-6 text-white">About</h3>
              <ul className="list-unstyled">
                <li><a className="link-light" href="#">Company</a></li>
                <li><a className="link-light" href="#">Team</a></li>
                <li><a className="link-light" href="#">Legacy</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
              <h3 className="fs-6 text-white">Careers</h3>
              <ul className="list-unstyled">
                <li><a className="link-light" href="#">Job openings</a></li>
                <li><a className="link-light" href="#">Employee success</a></li>
                <li><a className="link-light" href="#">Benefits</a></li>
              </ul>
            </div>
            <div className="col-lg-3 text-center text-lg-start d-flex flex-column item social">
              <h3 className="fs-6 text-white">Follow us</h3>
              <p className="text-muted">Follow us on social media</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a className="d-flex justify-content-center align-items-center border rounded-circle border-light m-2" href="#"><i className="icon ion-social-facebook"></i></a>
                <a className="d-flex justify-content-center align-items-center border rounded-circle border-light m-2" href="#"><i className="icon ion-social-twitter"></i></a>
                <a className="d-flex justify-content-center align-items-center border rounded-circle border-light m-2" href="#"><i className="icon ion-social-instagram"></i></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center pt-3">
            <p className="text-white mb-0">© 2023 Company</p>
            <p className="text-white mb-0">Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
    )
}

export default page
