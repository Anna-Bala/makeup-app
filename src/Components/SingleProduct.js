import React from 'react';

const SingleProduct = (props) => {
    return(
        // <Card>
        //     <CardImg top src={props.img} alt="product_image" />
        //     <CardBody>
        //         <CardTitle tag="h5">{props.name}</CardTitle>
        //         <CardText>{props.desc}</CardText>
        //     </CardBody>
        // </Card>
        <>
        <div className="card">
            <img src={props.img} className="card-img-top" alt="product_image"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    </>
    )
}

export default SingleProduct;