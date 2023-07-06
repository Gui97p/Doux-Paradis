import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

import test from './Test.png';
import formatCurrency from '../../util/formatCurrency';

function ProductCard({ data }) {
    const { name, price } = data;

    return <div className="product_card">
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
    </div>;
}

ProductCard.propTypes = {
    data: PropTypes.object,
}.isRequired;

export default ProductCard;
