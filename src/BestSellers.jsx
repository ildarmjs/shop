import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export const BestSellers = () => {


	let navigate = useNavigate()

	const [products, setProducts] = useState([])

	useEffect(() => {
		axios.get("https://masterclass.kimitsu.it-incubator.ru/api/products")
			.then((res) => {
				const products = res.data;
				setProducts(products)
			});
	}, []);

	const navigateToProductHandler = (id) => {
		navigate('product/' + id)
	}

	return (
		<div>
			<div className="cards">

				{
					products.map((el) => {
						return (
							<div className="card" key={el.id}>
								<img src={el.image} alt="img" />
								<h4>{el.title}</h4>
								<p className="price">${el.price}</p>
								<button onClick={() => navigateToProductHandler(el.id)}>Show more</button>
							</div>
						)
					})
				}


			</div>

		</div>
	)
}