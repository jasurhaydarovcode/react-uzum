import React from 'react'

const Product = ({ item }) => {
    const { image,
        imgSubtitle,
        title,
        rating,
        ratingVoice,
        monthlyPayment,
        oldPrice,
        price,
    } = item


    return (
        <div>

            <img src={image} alt={title} />
            {/* <span>{imgSubtitle}</span> */}
            <h5>{title}</h5>
            <div>
                <p>{rating} <span>({ratingVoice})</span></p>
            </div>
            <p>{monthlyPayment}</p>
            <del>{oldPrice}</del>
            <h6>{price}</h6>
        </div>
    )
}

export default Product