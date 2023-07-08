/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';

function Products() {
    return (<main className="products">
        <section className="container normal_width">
            <h1>Produtos</h1>
            <p>Este é seu parágrafo de introdução da seção de produtos. É o local ideal para apresentar os tipos de produtos disponíveis e destacar as
                características importantes e exclusivas. Para adicionar uma loja online, clique em "Adicionar", "Página" e, então, "Loja online" na lista.
            </p>
            <div className="area">
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
                <ProductCard data={{name: 'Barra ao leite - Brigadeiro', price: 120}}/>
            </div>
        </section>
    </main>);
}

export default Products;
