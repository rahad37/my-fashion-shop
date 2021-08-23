import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state)=> state.allProducts.products);
    // const { id, title } = products[0];
    const renderList = products.map((product)=>{
        const {id, title, image, price, category} = product;
        return (
            <div className='five wide column' key={id} style={{padding: '10px', align: 'center', width: '340px', margin: '0 auto'}}>
            <Link to={`/product/${id}`}>
            <div className="ui cards">
                <div className="card" style={{height: '400px'}}>
                    <div className="image">
                        <img src={image} alt={title} style={{height: '280px'}} />
                    </div>
                    <div className="content" >
                        <div className="header">{title}</div>
                        <div>
                            <div style={{float: 'left'}} className="meta price">$ {price}</div>
                            <div style={{float: 'right'}} className="meta">{category}</div>
                        </div>                                              
                    </div>
                </div>
            </div>
            </Link>
        </div>
        );
    })
    return (
        <>{renderList}</>
    );
};

export default ProductComponent;