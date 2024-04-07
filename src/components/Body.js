import Restaurantcard from './Restaurantcard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
	// local state variable
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		{
			const data = await fetch(
				'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9415915&lng=79.8083133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
			);
			const json = await data.json();

			//optional chaining
			setListOfRestaurants(
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || [],
			);
			setFilteredRestaurant(
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || [],
			);
		}
	};

	// const filterTopRatedRestaurants = () => {
	// 	const filteredList = listOfRestaurants.filter(
	// 		(res) => res.info.avgRating > 4.0,
	// 	);
	// 	setListOfRestaurants(filteredList);
	// };

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							const filteredRestaurant = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase()),
							);
							setFilteredRestaurant(filteredRestaurant);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4.3,
						);
						setFilteredRestaurant(filteredList);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{filteredRestaurant.map((restaurant) => (
					<Restaurantcard key={restaurant.info.id} resInfo={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
