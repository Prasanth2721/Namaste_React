import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://cdn.vectorstock.com/i/preview-1x/87/30/food-delivery-logo-isolated-ordering-vector-8858730.jpg"
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li> Home </li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li> Cart </li>
				</ul>
			</div>
		</div>
	);
};

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
				src={
					'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
					cloudinaryImageId
				}
			/>
			<h4>{name}</h4>
			<h5>{cuisines.join(', ')}</h5>
			<h5>{avgRating}</h5>
			<h5>{costForTwo}</h5>
			<h5>{deliveryTime}</h5>
		</div>
	);
};

const resList = [
	{
		info: {
			id: '68259',
			name: 'A2B - Adyar Ananda Bhavan',
			cloudinaryImageId: 'vosewwnyey3hgwf0qxwt',
			locality: 'White Town',
			areaName: 'Puducherry',
			costForTwo: '₹300 for two',
			cuisines: ['South Indian', 'North Indian', 'Sweets', 'Chinese'],
			veg: true,
			parentId: '22',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 17,
				lastMileTravel: 2.2,
				serviceability: 'SERVICEABLE',
				slaString: '17 mins',
				lastMileTravelString: '2.2 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-03-06 22:45:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png',
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '20% OFF',
				subHeader: 'UPTO ₹50',
			},
			loyaltyDiscoverPresentationInfo: {
				logoCtx: {
					logo: 'Swiggy%20One%20Lite/One_lite_vertical_logo.png',
				},
				freedelMessage: 'FREE DELIVERY',
				badgeType: 'BADGE_TYPE_ONE_LITE',
			},
			cta: {
				link: 'https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-white-town-puducherry-pondicherry-68259',
				text: 'RESTAURANT_MENU',
				type: 'WEBLINK',
			},
			widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
		},

		info: {
			id: '78970',
			name: 'Surguru',
			cloudinaryImageId: 'zw7dduin6k2lgwcwus9z',
			locality: 'Gandhinagar',
			areaName: '100 Feet Rd',
			costForTwo: '₹250 for two',
			cuisines: ['South Indian', 'North Indian'],
			avgRating: 4.5,
			veg: true,
			parentId: '6369',
			avgRatingString: '4.5',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 25,
				lastMileTravel: 1,
				serviceability: 'SERVICEABLE',
				slaString: '25-30 mins',
				lastMileTravelString: '1.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-03-20 22:30:00',
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: 'v1695133679/badges/Pure_Veg111.png',
						description: 'pureveg',
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: 'pureveg',
									imageId: 'v1695133679/badges/Pure_Veg111.png',
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: 'seo-data-54dec03d-ee15-416a-a18c-857695609337',
		},
		cta: {
			link: 'https://www.swiggy.com/restaurants/surguru-gandhinagar-100-feet-rd-pondicherry-78970',
			text: 'RESTAURANT_MENU',
			type: 'WEBLINK',
		},
		widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
	},
];

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{resList.map((restaurant) => (
					<Restaurantcard key={restaurant.info.id} resInfo={restaurant} />
				))}
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
