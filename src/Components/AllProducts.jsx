import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import ErrorCard from "./ErrorCard";



const AllProducts = () => {
    const data = useLoaderData();

    const navigate = useNavigate();

    const { category } = useParams();

    const [cards, setCards] = useState([]);
    useEffect(() => {
        if (category) {
            const filter = [...data].filter(cards => cards.category === category);
            setCards(filter);
        }
        else {
            setCards(data);
        }
    }, [data, category])

    return (
        <div className="py-5 lg:py-0 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* {
                    cards.map(i => <Card i={i}></Card>)
                } */}
                {
                    (cards.length) ? cards.map(i => <Card key={i.product_id} i={i}></Card>) : <ErrorCard></ErrorCard>
                }
            </div>
        </div>
    );
};

export default AllProducts;