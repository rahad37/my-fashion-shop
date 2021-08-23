import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct, removeSelectedProduct}  from '../redux/actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log('Err ', err);
        });

        // dispatch(selectedProduct(response.data))
        dispatch(selectedProduct(response.data))
    };
    useEffect(()=>{
        if (productId && productId !== '') fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId]);

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
        <div className="ui placeholder segment" >
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider bold">AND</div>
                <div className="middle aligned row"></div>
                <div className="column lp">
                    <img src={image} alt={title} className="ui large image"/>
                </div>
                <div className="column rp" style={{textAlign: 'left', paddingLeft: '30px', paddingTop: '50px'}}>
                    <h1>{title}</h1>
                
                <h2>
                    <a className='ui teal tag label' style={{fontSize: '18px'}}>${price}</a>
                </h2>
                <h3 className="ui brown block healer" style={{fontSize: '20px', backgroundColor: '#CAD3C8', padding: '5px'}}>{category}</h3>
                <p style={{fontSize: '17px'}}>{description}</p>
                <div className="ui vertical animated button" tabIndex='0' style={{backgroundColor: '#FC427B'}}>
                    <div className="hidden content">
                        <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add To Cart</div>
                </div>
                </div>
            </div>
        </div>)}
        </div>
    );
};

export default ProductDetail;