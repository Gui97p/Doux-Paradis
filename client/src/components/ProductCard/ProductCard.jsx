import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

import test from './Test.png';
import formatCurrency from '../../util/formatCurrency';

import { Link } from 'react-router-dom';

function ProductCard({ data }) {
    const { name, price } = data;

    return <Link to="products" className="product_card_link"><div className="product_card">
        <div className="effects">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <img src={test} alt="product image" />
        <div className="texts">
            <p>{name}</p>
            <p>Apartir de <span>{formatCurrency(price, 'BRL')}</span></p>
        </div>
        <button>Reservar</button>
    </div></Link>;
}

ProductCard.propTypes = {
    data: PropTypes.object,
}.isRequired;

export default ProductCard;
