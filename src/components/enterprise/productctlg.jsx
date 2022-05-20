import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function SignIn() {
  return <Button variant="contained">Sign In</Button>;
}
function LearnMore() {
  return <Button variant="contained">Learn More</Button>;
}
function Cancel() {
  return <Button variant="contained">Cancel</Button>;
}

const head = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'text/plain'
  }
};

export default class Productctlg extends Component {
	
	state = {
    products: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/product-catalog/get-product-catalog',head)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }
  render() {
    return (
	
      <div className="productcatalog">
        <div class="row">
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">VoIP</h5>
        <p class="card-text">Offers a flexible communication platform that bridges networking, voice and collaboration to enable businesses to focus on their goals..</p>
        <a href="/enterprisevoice" class="btn btn-warning">Create Order</a>
 		<a href="#" class="btn btn-warning">Contact an Expert</a>
        
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Direct Internet Access</h5>
        <p class="card-text">Offers direct Internet access to Enterprise customer for customer daily data needs with various bandwidth.</p>
        <a href="#" class="btn btn-warning">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div>
<ul>
        {
          this.state.products
            .map(product =>
              <li key={product.prdCtlgId}>{product.productName}</li>
            )
        }
      </ul>
</div>
      </div>
      
    );
  }
}