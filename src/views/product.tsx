import Component from 'inferno-component';

interface ProductNavProps {
	productArr: Array<ProductNavArr>
}

interface ProductNavArr {
	iconClass: string,
	productName: string,
	clickHandler: () => any
}

export default class Product extends Component<any, any> {

	render() {
		const ProductNav = (props: ProductNavProps) => {
			return <div className="product-nav">
				<div className="nav-container">
					{
						props.productArr.map((item) => {
							return <div className="nav-unit" onClick={item.clickHandler}>
								<div className={`nav-icon ${item.iconClass}`}></div>
								<div className="nav-text">{item.productName}</div>
							</div>
						})
					}
				</div>
			</div>
		};

		const productNavArr = [
			{
				iconClass: 'icon-product-nav-1',
				productName: '波塞东POSEIDON',
				clickHandler: () => { window.alert('here') }
			},
			{
				iconClass: 'icon-product-nav-2',
				productName: '智策INTELLIQUANT',
				clickHandler: () => { window.alert('here') }
			},
			{
				iconClass: 'icon-product-nav-3',
				productName: '尚策云INTELLICLOUD',
				clickHandler: () => { window.alert('here') }
			},
			{
				iconClass: 'icon-product-nav-4',
				productName: '智衍',
				clickHandler: () => { window.alert('here') }
			},
			{
				iconClass: 'icon-product-nav-5',
				productName: '智旭',
				clickHandler: () => { window.alert('here') }
			},
			{
				iconClass: 'icon-product-nav-6',
				productName: '智跃INTELLIDATA',
				clickHandler: () => { window.alert('here') }
			}
		];

		return <div className="view-product">
			<ProductNav productArr={productNavArr} />
		</div>;
	}
};
