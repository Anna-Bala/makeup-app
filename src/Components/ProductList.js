import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SingleProduct from './SingleProduct';

const ProductList = () => {
    const [productData, setProductData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        .then(res => {
          const data = res.data;
            setProductData(data);
            console.log(data);
            setIsLoaded(true);
        })
        .catch(error => {
            console.log(error);
            setIsError(true);
        })
      }, []);

      const Spinner = () => (
        <div class="spinner-border" role="status">
      
        </div>
      )

      const Error = () => (
        <p>Something went wrong!</p>
      )

      const List = () => (
        <div className="product__list">
        {productData.map((product, id) => {
            return(
                <SingleProduct img={product.image_link} name={product.name} desc={product.description} key={id}/>
            );
        })
    }
      </div>
      )
        if(isError) return <Error/>
        if (!isLoaded) return <Spinner/>

      return(
          <List/>
      )
}

export default ProductList;