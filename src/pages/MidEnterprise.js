

import React, { Component } from "react";
import './Pages.css';


class MidEnterprise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    render() {
        return (
            <div>
                <h5 className="title">Explore our business solutions</h5>
                <div class="row">
                    <div class="col-sm-6 mid-card">
                        <div class="card">
                            <div class="card-body" style={{ background: '#f7c944' }}>
                                <h4 class="card-title text-center">VOICE</h4>
                                <div className="content">
                                    <div className="item">
                                        <h6><a href='#'>Local Voice Services</a></h6>
                                        <p class="card-text">Traditional phone and trunking service</p>
                                    </div>
                                    <div className="item">
                                        <h6><a href='#'>International</a></h6>
                                        <p class="card-text">Traditional phone and trunking service</p>
                                    </div>
                                    <div className="item">
                                        <h6><a href='#'>e911</a></h6>
                                        <p class="card-text">Traditional phone and trunking service</p>
                                    </div>
                                    <div className="item">
                                        <h6><a href='#'>Long-Distance Toll Free</a></h6>
                                        <p class="card-text">Traditional phone and trunking service</p>
                                    </div>
                                    <div className="item">
                                        <h6><a href='#'>Local Voice Services</a></h6>
                                        <p class="card-text">Traditional phone and trunking service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mid-card">
                        <div class="card">
                            <div class="card-body" style={{ background: '#e5e5e5' }}>
                                <h5 class="card-title text-center">NETWORKING</h5>
                                <div className="content">
                                    <div className="item">
                                        <h6><a href='#'>Ethernet</a></h6>
                                        <p class="card-text">Traditional phone and trunking serviceTraditional phone and trunking service</p>
                                    </div>
                                    <div className="item">
                                        <h6><a href='#'>Internet</a></h6>
                                        <p class="card-text">Traditional phone and trunking serviceTraditional phone and trunking service</p>
                                    </div>
                                    <div className="item">
                                        <h6><a href='#'>Broadband</a></h6>
                                        <p class="card-text">Traditional phone and trunking Traditional phone and trunking service service</p>
                                    </div>
                                    <div className="item">
                                        <h6><a href='#'>Voice Services</a></h6>
                                        <p class="card-text">Traditional phone and trunking service</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // const MidEnterprice = () => {
    //     return <h1>Contact Me</h1>;
};

export default MidEnterprise;