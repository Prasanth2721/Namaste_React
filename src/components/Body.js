import Restaurantcard from './Restaurantcard';
import { useState } from 'react';
import resList from '../utils/mockdata';

const Body = () => {
	// local state variable
	const [ListofRestaurants, setListofRestaurant] = useState(resList);
	// normal JS variable

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = ListofRestaurants.filter(
							(res) => res.info.avgRating >= 4.0,
						);
						setListofRestaurant(filteredList);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{ListofRestaurants.map((restaurant) => (
					<Restaurantcard key={restaurant.info.id} resInfo={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
