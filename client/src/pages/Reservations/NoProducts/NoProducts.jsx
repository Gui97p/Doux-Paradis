import React from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './NoProducts.css';

function NoProducts() {
    return (<section className="noproducts">
        <FaShoppingCart className="cart"/>
        <h1>Nenhum produto foi adicionado ainda</h1>
        <Link to="/products" className="button"><ImArrowLeft2 /> Visualizar produtos</Link>
    </section>);
}

export default NoProducts;
