import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Card = ({ i }) => {
    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = i;
    return (
        <div className="card w-full p-5 bg-white border">
            <figure className="">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl w-full h-48 object-cover" />
            </figure>
            <div className="card-body p-0">
                <h2 className="text-2xl font-semibold mt-4">{product_title}</h2>
                <p className='flex-grow'>{description}</p>
                <div className="card-actions">
                    <Link to={`/productDetails/${product_title}`}>
                        <button className="btn btn-outline rounded-[32px] text-[#9538E2] border-[#9538E2]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object
}

export default Card;