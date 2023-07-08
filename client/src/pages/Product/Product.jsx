import React from 'react';
import { useParams } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import './Product.css';
import test from './Test.png';

function Product() {
    const { id } = useParams();
    console.log(id);

    return (  
        <main className="product">
            <div className="top">
                <h1 className="normal_width">Product Name</h1>
            </div>
            <section className="container normal_width2">
                <div className="img">
                    <img src={test} alt="product image" />
                </div>
                <div className="infos">
                    <div className="name"><h1>Product Name</h1></div>
                    <div className="price"><h1>R$ 120,00</h1></div>
                    <div className="buttons">
                        <div className="qntd">
                            <span>Qtd:</span>
                            <div>
                                <button type="button"><BiChevronDown /></button>
                                <span>1</span>
                                <button type="button"><BiChevronUp /></button>
                            </div>
                        </div>
                        <button>Reservar</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Product;
