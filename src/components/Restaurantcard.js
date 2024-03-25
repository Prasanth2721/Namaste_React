import { CDN_URL } from '../utils/constants';

const Restaurantcard = (props) => {
	const { resInfo } = props;
	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		costForTwo,
		deliveryTime,
	} = resInfo?.info;
	return (
		<div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
			<img
				className="res-logo"
				alt="res-logo"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h4>{name}</h4>
			<h5>{cuisines.join(', ')}</h5>
			<h5>{avgRating}Stars</h5>
			<h5>{costForTwo}</h5>
			<h5>{deliveryTime}Mins</h5>
		</div>
	);
};
export default Restaurantcard;
