import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

import './Table.css';
import test from './Test.png';

function Table() {
    return (<section className="table">
        <div className="container normal_width">
            <div className="thead">
                <div className="th">Produtos</div>
                <div className="th">Preço</div>
                <div className="th">Quantidade</div>
            </div>
            <div className="tbody">
                <div className="row">
                    <div className="tr">
                        <img src={test} alt="product image" />
                        <p>Barrinha</p>
                    </div>
                    <div className="tr price">R$ 120,00</div>
                    <div className="tr">
                        <div className="qtt">
                            <AiOutlineMinus />
                            <input type="text" name="qtt" id="qtt" />
                            <AiOutlinePlus />
                        </div>
                        <button type="button" className="trash">
                            <BsFillTrashFill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default Table;
