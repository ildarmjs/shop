import { useEffect, useState } from "react"
import axios from 'axios'
import rating from './assets/img/rating.svg'
import cartWhite from './assets/img/cartWhite.svg'
import arrowBack from './assets/img/arrowBack.svg'
import { useParams, Link } from "react-router-dom"
import { Riviews } from "./Riviews"
// import { Riviews } from "./Riviews"

export const Product = () => {


	let params = useParams()
	const [product, setProduct] = useState(null)

	useEffect(() => {

		axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products/' + params.productId)
			.then((res) => {
				const product = res.data
				setProduct(product)
			})
	}, [])


	const [isProductInCart, setIsProductIncart] = useState(false)

	// ...
	const addProductToCartHandler = () => {
		alert('Товар успешно добавлен в корзину')
		setIsProductIncart(true)
	}

	return (
		<div>
			<div>
				<div className="arrowBack">
					<Link to={"/"}>
						<img src={arrowBack} alt="" />
						Назад
					</Link>
				</div>
				{
					product === null
						? 'Грузится'
						: <div className="product">
							<img src={product.image} alt="PhotoProduct" />
							<div className="info">
								<p className="title">{product.title}</p>
								<p className="price">$ {product.price}</p>
								<div className="rating">
									<p>Rating: {product.rating.rate}</p>
									<img src={rating} alt="" />
								</div>
								<div className="category">
									<span>Category:</span>
									<p>{product.category}</p>
								</div>
								<p className="description">{product.description}</p>
								<button onClick={addProductToCartHandler}>
									<img src={cartWhite} alt="" />
									{isProductInCart ? 'Go to cart' : 'Add to cart'}
								</button>
							</div>

						</div>

				}

				<Riviews />
			</div>
		</div>

	)
}