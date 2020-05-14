import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
    // we use state because the function render will watch
    // for any change on it, and will update the component
    // if anything here changes
    state = {
        products: [],
        productInfo: {},
        currentPage: 1
    }
    // method called as soon the component is shown
    componentDidMount() {
        this.loadProducts();
    }

    // arrow function so the "this" is not overwritten
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
        this.setState({
            products: docs,
            productInfo,
            currentPage: page
        });
    };

    nextPage = () => {
        const { currentPage, productInfo } = this.state;

        if (currentPage === productInfo.pages) {
            return;
        } else {
            const pageNumber = currentPage + 1;
            this.loadProducts(pageNumber);
        }
    };

    prevPage = () => {
        const { currentPage, productInfo } = this.state;

        if (currentPage === 1) {
            return;
        } else {
            const pageNumber = currentPage - 1;
            this.loadProducts(pageNumber);
        }
    };

    render() {
        const { products, currentPage, productInfo } = this.state;
        const pages = this.state.productInfo.pages;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Access</Link>
                        {/* <a target="_blanket" href="">Access</a> */}
                    </article>
                ))}
                <div className="actions">
                    <button disabled={currentPage === 1} onClick={this.prevPage}>Previous</button>
                    <button disabled={currentPage === pages} onClick={this.nextPage}>Next</button>
                </div>
            </div>
        )
    }
}
