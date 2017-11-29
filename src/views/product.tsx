import Component from 'inferno-component';

declare function require(path: string);


interface ProductNavArr {
	productArr: Array<ProductNavProps>
}

interface ProductNavProps {
	productId: 'bosaidong' | 'zhice' | 'zhiyan' | 'shangceyun' | 'zhixu' | 'zhiyue';
	productName: string;
	iconClass: string;
}

interface ProductPanelProps {
	productId: 'bosaidong' | 'zhice' | 'zhiyan' | 'shangceyun' | 'zhixu' | 'zhiyue';
	productClassName: string,
	bgColor: 'white' | 'lightGrey',
	bgModel: 'leftRight' | 'stackUp',
	bgImgClass: string,
	bgImgPath: string,
	productTitle: string,
	productSubTitle: string,
	productDesc: string
}

interface ProductPanelArr {
	productPanelArr: Array<ProductPanelProps>
}

enum BgClassName {
	white = 'panel-bg-white',
	lightGrey = 'panel-bg-light-grey'
}

export default class Product extends Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			displaySmallProductImg: 'none'
		};
	}

	componentDidMount() {
		// add media query listener
		let narrowerThanSmall = matchMedia('only screen and (max-width: 48em)');
		if (narrowerThanSmall.matches) {
			this.setState({
				displaySmallProductImg: 'block'
			});
		} else {
			this.setState({
				displaySmallProductImg: 'none'
			});
		}
		narrowerThanSmall.addListener((mql) => {
			if (mql.matches) {
				this.setState({
					displaySmallProductImg: 'block'
				});
			} else {
				this.setState({
					displaySmallProductImg: 'none'
				});
			}
		});
	}

	navClickHandler = (productId:string): void => {	
		let productElement = document.getElementById(productId);
		if (productElement !== null) {
			productElement.scrollIntoView({
				behavior: 'smooth',
				block: "start",
				inline: "start"
			});
		}
	}

	render() {
		const ProductNav = (props: ProductNavArr) => {
			return <div className="product-nav">
				<div className="pure-g nav-container">
					{
						props.productArr.map((item) => {
							return <div className="pure-u-1-2 pure-u-md-1-3 pure-u-lg-1-6 nav-unit" onClick={this.navClickHandler.bind(this, item.productId)}>
								<div className={`nav-icon ${item.iconClass}`}></div>
								<div className="nav-text">{item.productName}</div>
							</div>
						})
					}
				</div>
			</div>
		};

		const ProductPanel = (props: ProductPanelArr) => {
			return <div className="panel-container">
				{
					props.productPanelArr.map((item, i) => {
						let productImgPanel;
						if (item.bgModel === 'leftRight') {
							productImgPanel = <img className={`pure-image panel-img ${item.bgImgClass}`}
								src={require(`../assets/views/product/img-product-bg-${i + 1}.png`)} ></img>
						} else if (item.bgModel === 'stackUp') {
							productImgPanel = <img className={`pure-image panel-img ${item.bgImgClass}`} style={{ 'display': this.state.displaySmallProductImg }}
								src={require(`../assets/views/product/img-product-bg-${i + 1}-small.png`)} ></img>
						}

						return <div
							id={item.productId}
							className={`pure-g product-panel ${item.productClassName} ${BgClassName[item.bgColor]}`}>
							<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 left-panel">
								<div className="text-container">
									<div className="product-title" dangerouslySetInnerHTML={{ __html: item.productTitle }}></div>
									<div className="product-sub-title" dangerouslySetInnerHTML={{ __html: item.productSubTitle }}></div>
									<div className="product-desc" dangerouslySetInnerHTML={{ __html: item.productDesc }}></div>
								</div>
							</div>
							<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 right-panel">
								<div className={`img-container ${item.bgImgClass}`}>
									{productImgPanel}
								</div>
							</div>
						</div>
					})
				}
			</div>
		};

		const productNavArr: Array<ProductNavProps> = [
			{
				productId: 'bosaidong',
				iconClass: 'icon-product-nav-1',
				productName: '波塞东POSEIDON',
			},
			{
				productId: 'zhice',
				iconClass: 'icon-product-nav-2',
				productName: '智策INTELLIQUANT'
			},
			{
				productId: 'zhiyan',
				iconClass: 'icon-product-nav-4',
				productName: '智衍'
			},
			{
				productId: 'shangceyun',
				iconClass: 'icon-product-nav-3',
				productName: '尚策云INTELLICLOUD'
			},
			{
				productId: 'zhixu',
				iconClass: 'icon-product-nav-5',
				productName: '智旭'
			},
			{
				productId: 'zhiyue',
				iconClass: 'icon-product-nav-6',
				productName: '智跃INTELLIDATA'
			}
		];

		const productPanelArr: Array<ProductPanelProps> = [
			{
				productId: 'bosaidong',
				productClassName: 'product-1-bosaidong',
				bgColor: 'white',
				bgModel: 'leftRight',
				bgImgClass: 'product-bg-1',
				bgImgPath: '../assets/views/product/img-product-bg-1.png',
				productTitle: '波塞东POSEIDON',
				productSubTitle: '期货极速量化交易系统',
				productDesc: `波塞东Poseidon量化交易系统是经过大商所、上期所、中金所权威认证的次席柜台交
				易系统。国际化的OMS独立报盘子系统，大大简化了订单状态的处理过程，能有效提高全自动量化交易的效率。
				系统优化整合了全平台多档实时高速行情、专业的高度仿真回测模块、可定制的多层级独立风控以及人性化
				的交易辅助软件，为专业的交易团队提供一体化、全方位、多策略模式的软件解决方案。`
			},
			{
				productId: 'zhice',
				productClassName: 'product-2-zhice',
				bgColor: 'lightGrey',
				bgModel: 'stackUp',
				bgImgClass: 'product-bg-2',
				bgImgPath: '../assets/views/product/img-product-bg-2.png',
				productTitle: '智策INTELLIQUANT',
				productSubTitle: '跨期现PB交易系统',
				productDesc: `智策IntelliQuant是一个稳定高效，可实现跨市场、跨产品同步交易的专业PB交易系
				统。系统整合了高速行情、高效交易、严密风控、专业回测、丰富的日志报表等丰富功能模块，为专业的
				交易团队在同一界面中提供了一整套证券与期货之间的跨市场跨产品的同步交易的完美解决方案。`
			},
			{
				productId: 'zhiyan',
				productClassName: 'product-3-zhiyan',
				bgColor: 'white',
				bgModel: 'leftRight',
				bgImgClass: 'product-bg-3',
				bgImgPath: '../assets/views/product/img-product-bg-3.png',
				productTitle: '智衍',
				productSubTitle: '趋势优选回测平台',
				productDesc: `智衍回测平台（IntelliPro）是闪策采集了国内外量化交易团队的策略研究与数据
				分析需求，不断优化了模拟撮合机制，整合了权威丰富的历史行情数据，打造的综合量化策略回测平台。<br/>
				采用黑箱保护机制，为用户提供安全、独立的回归测试运行环境，保护策略安全。<br/>系统的一大优势是它对
				生产环境和回测环境进行了抽象封装，使得用户策略在生产环境和回归测试环境间可以做到一键切换无缝过渡，无需二次开发。`
			},
			{
				productId: 'shangceyun',
				productClassName: 'product-4-shangceyun',
				bgColor: 'lightGrey',
				bgModel: 'stackUp',
				bgImgClass: 'product-bg-4',
				bgImgPath: '../assets/views/product/img-product-bg-4.png',
				productTitle: '尚策云INTELLICLOUD',
				productSubTitle: '策略回测平台',
				productDesc: `尚策云回测平台（IntelliCloud）是上海闪策信息科技有限公司定制开发的策略检验平台，旨在以上证所
				信息网络有限公司的智能数据服务为基础，为券商及专业机构客户提供增值服务。<br/>平台辅助私募，公募，机构和专业量化
				交易团队实现最佳交易表现，开发和整合新的交易策略，达到风控及合规要求，使运营成本合理化。`
			},
			{
				productId: 'zhixu',
				productClassName: 'product-5-zhixu',
				bgColor: 'white',
				bgModel: 'leftRight',
				bgImgClass: 'product-bg-5',
				bgImgPath: '../assets/views/product/img-product-bg-5.png',
				productTitle: '智旭期权交易系统',
				productSubTitle: '金融衍生品交易系统',
				productDesc: `智旭期权量化交易系统（IntelliCator）是一个主打灵活、快速、可定制的金融衍生品交易系统，
				集成多来源优化行情、快速量化交易、多维度立体风控、实时报表反馈、高精度仿真回测等特性，旨在为专业的交易团队提供一站式、体验卓越的交易服务。`
			},
			{
				productId: 'zhiyue',
				productClassName: 'product-6-zhiyue',
				bgColor: 'lightGrey',
				bgModel: 'stackUp',
				bgImgClass: 'product-bg-6',
				bgImgPath: '../assets/views/product/img-product-bg-6.png',
				productTitle: '智跃INTELLIDATA',
				productSubTitle: '行情分发系统',
				productDesc: `智跃行情分发系统（IntelliData）是上海闪策信息科技有限公司规划开发，与券商合作，基于上海证券交易所低延时行情发布系统（LDDS）和
				深圳证券交易所行情系统，为单一券商的众多客户提供公平、高效、高速的行情分发服务的系统。`
			}
		];

		return <div className="view-product">
			<ProductNav productArr={productNavArr} />
			<ProductPanel productPanelArr={productPanelArr} />
		</div>;
	}
};
