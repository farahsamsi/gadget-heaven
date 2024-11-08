import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'


const Categories = ({ categories }) => {
    return (
        <div className="lg:w-1/5  ">
            <div role="tablist" className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-1 gap-6 tabs tabs-boxed items-start border bg-white p-6">
                {
                    categories.map(category => <button role="tab" key={category.category}>
                        <NavLink
                            to={`categories/${category.category}`}

                            className={({ isActive }) => `tab w-full rounded-[32px] text-[#66666A] bg-[#F2F2F3] text-lg font-semibold h-[52px] text-left justify-start ${isActive ? 'tab-active' : ''}`}
                        >{category.category}
                        </NavLink> </button>)
                }
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array
}

export default Categories;