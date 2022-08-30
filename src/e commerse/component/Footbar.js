import React from "react";

export default function Footbar() {
    return (
        <div>
            <div className="container my-1 w-100 p-3 py-5" style={{ backgroundColor: "white",width:"100px" }}>
                <footer className=" text-lg-start text-black">
                    <div className="container">
                        <section className="">
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        <b style={{ fontSize: "50px" }}> E-Shop</b>
                                    </h6>
                                    <p>
                                        Online shopping is a form of electronic commerce which
                                        allows consumers to directly buy goods or services from a
                                        seller over the Internet using a web browser or a mobile
                                        app.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Products
                                    </h6>
                                    <p>
                                        <a>Men's Clothing</a>
                                    </p>
                                    <p>
                                        <a>Women's Clothing</a>
                                    </p>
                                    <p>
                                        <a> Electronics</a>
                                    </p>
                                    <p>
                                        <a>Jewelery</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a>Home</a>
                                    </p>
                                    <p>
                                        <a>Products</a>
                                    </p>
                                    <p>
                                        <a>About us</a>
                                    </p>
                                    <p>
                                        <a>Contact</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                        Contact
                                    </h6>
                                    <p>
                                        <i className="fa fa-home mr-3"></i> Punjab, LDH 10012, India
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope mr-3"></i> E.Shop@gmail.com
                                    </p>
                                    <p>
                                        <i className="fa fa-phone mr-3"></i> + 01 234 567 88
                                    </p>
                                    <p>
                                        <i className="fa fa-print mr-3"></i> + 01 234 567 89
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr className="my-3" />

                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    <div className="p-3">
                                        © 2020 Copyright:
                                        <a>E-Shop.com</a>
                                    </div>
                                </div>

                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end ">
                                    <a
                                        className="btn btn-outline-black btn-floating m-1  "
                                        role="button"
                                    >
                                        <i className="fa fa-facebook-f fa  "></i>
                                    </a>

                                    <a
                                        className="btn btn-outline-black btn-floating m-1 "
                                        role="button"
                                    >
                                        <i className="fa fa-twitter"></i>
                                    </a>

                                    <a
                                        className="btn btn-outline-black btn-floating m-1 "
                                        role="button"
                                    >
                                        <i className="fa fa-google"></i>
                                    </a>

                                    <a
                                        className="btn btn-outline-black btn-floating m-1 "
                                        role="button"
                                    >
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </div>
    );
}
