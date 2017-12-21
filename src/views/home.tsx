import Component from 'inferno-component';
import { Link } from 'inferno-router';
import i18n from '../../i18n';

interface topBannerProps {
	sloganCn: string;
	sloganEn: string;
}

interface targetCustomerProps {
	title: string;
	subTitle: string;
	rowArr: Array<rowItem>
};

interface rowItem {
	itemClass: 'icon-private-placement' | 'icon-public-placement' | 'icon-quantitative-trading' | 'icon-quantitative-organization',
	itemText: string
};

interface weOfferProps {
	title: string;
	subTitle: string;
	offerObj: {
		leftList: Array<weOfferList>,
		rightList: Array<weOfferList>
	},
	btnText: string;
};

interface weOfferList {
	itemClass: string,
	itemText: string
};

export default class Home extends Component<any, any> {

	constructor(props) {
		super(props)
		this.state = {
			lng: i18n.language
		}
	}

	componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	componentWillMount() {
		i18n.addResourceBundle('zh-CN', 'translation', {
			sloganCn: '闪策 · 闪耀策略的光芒',
			sloganEn: 'SHANCE · MAKE YOUR STRATEGY SHINE',
			targetCustomerTitle: '定位于专业化用户',
			targetCustomerSubTitle: '闪策 · 低延迟高性能量化交易系统解决方案的世界一流领军者',
			targetCustomerItemtext: {
				text1: '私募',
				text2: '公募',
				text3: '专业量化交易<br/>自营团队',
				text4: '量化机构'
			},
			sloganPanelMainText1: '您专心策略',
			sloganPanelSubText1: 'You Own Strategy',
			sloganPanelMainText2: '我们专注技术',
			sloganPanelSubText2: 'We Pursue Technology',
			weOfferTitle: '我们提供',
			weOfferSubTitle: '闪策 · 基于API的交易系统解决方案和服务的独立供应商',
			weOfferListText: {
				text1: '高度定制化的超低延迟市场行情数据解决方案，纳秒级时间戳',
				text2: '经过实战检验、高速高效、高性能表现的平台',
				text3: '用于市场行情数据传输的优化的二进制协议',
				text4: '顶尖硬件设备（服务器及网络设备）及完美调优的运行环境',
				text5: '对股票、期货、期权交易的支持',
				text6: '全球覆盖，同一套通用API',
				text7: '结合光纤和微波技术的优化的市场行情数据链',
				text8: '与上海证券交易所及中国所有期货交易所的低延迟通道'
			},
			weOfferBtnText: '查看产品介绍'
		});

		i18n.addResourceBundle('en-US', 'translation', {
			sloganCn: 'SHANCE · MAKE YOUR STRATEGY SHINE',
			sloganEn: '闪策 · 闪耀策略的光芒',
			targetCustomerTitle: 'Designed For Professional Institutions',
			targetCustomerSubTitle: 'SHANCE · LEADER HIGH PERFORMANCE QUANTITATIVE TRADING SYSTEM SOLUTIONS',
			targetCustomerItemtext: {
				"text1": 'Private Fund',
				"text2": 'Mutual Fund',
				"text3": 'Quantitative Trading Institution',
				"text4": 'Professional Quantitative<br/>Trading Team'
			},
			sloganPanelMainText1: 'You Own Strategy',
			sloganPanelSubText1: '',
			sloganPanelMainText2: 'We Pursue Technology',
			sloganPanelSubText2: '',
			weOfferTitle: 'We Provide',
			weOfferSubTitle: `SHANCE · LEADING INDEPENDENT PROVIDER OF API-BASED 
			MARKET DATA AND TRADING SYSTEM SERVICES`,
			weOfferListText: {
				text1: `Highly customizable ultra-low latency market data solutions, 
				microseconds timestamps`,
				text2: `Stable, high-speed, efficient high-performance platform`,
				text3: `Optimized binary protocol for market data dissemination`,
				text4: `Top hardware (server and network infrastructure) and perfectly-tuned operating environment`,
				text5: `Support stocks, futures and options trading`,
				text6: `All-market coverage & Unified API`,
				text7: `Optimized Market Data Chain, combining fiber and microwave technologies`,
				text8: `Low-latency channels to all stock exchanges and futures exchanges in China`
			},
			weOfferBtnText: `View product introduction`
		});

		i18n.off('languageChanged', this.onLanguageChanged.bind(this))
	}

	onLanguageChanged(lng) {
		this.setState({
			lng: lng
		});
	}


	render() {
		let lng = this.state.lng;

		const TopBanner = (props: topBannerProps) => {
			return <div className="home-top-banner">
				<div className="panel-container">
					<div className="slogan-cn">{props.sloganCn}</div>
					<div className="slogan-en">{props.sloganEn}</div>
				</div>
			</div>
		};

		const TargetCustomer = (props: targetCustomerProps) => {
			return <div className="home-target-customer">
				<div className="title">{props.title}</div>
				<div className="sub-title">{props.subTitle}</div>
				<div className="pure-g row-flex">
					{
						props.rowArr.map((item) => {
							return <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 row-unit">
								<div className={`row-icon ${item.itemClass}`}></div>
								<div className="row-text" dangerouslySetInnerHTML={{ __html: item.itemText }}></div>
							</div>
						})
					}
				</div>
			</div>
		};

		const SloganPanel = (props) => {
			return <div className="home-slogan-panel">
				<div className="slogan-text">
					<div className="main-text">{i18n.t('sloganPanelMainText1', { lng })}</div>
					<div className="sub-text">{i18n.t('sloganPanelSubText1', { lng })}</div>
					<div className="main-text second-group-text">{i18n.t('sloganPanelMainText2', { lng })}</div>
					<div className="sub-text">{i18n.t('sloganPanelSubText2', { lng })}</div>
				</div>
			</div>
		};

		const WeOffer = (props: weOfferProps) => {
			return <div className="home-we-offer">
				<div className="panel-title">{i18n.t('weOfferTitle', { lng })}</div>
				<div className="panel-sub-title">{i18n.t('weOfferSubTitle', { lng })}</div>
				<div className="pure-g info-list">
					<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 left-list">
						{
							props.offerObj.leftList.map((item) => {
								return <div className="list-unit">
									<div className={`unit-icon ${item.itemClass}`}></div>
									<span className="unit-text">{item.itemText}</span>
								</div>
							})
						}
					</div>
					<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 right-list">
						{
							props.offerObj.rightList.map((item) => {
								return <div className="list-unit">
									<div className={`unit-icon ${item.itemClass}`}></div>
									<span className="unit-text">{item.itemText}</span>
								</div>
							})
						}
					</div>
				</div>
				<div className="check-product">
					<Link to="/product">{props.btnText}</Link>
				</div>
			</div>
		};

		const TargetCustomerRowArr = [
			{
				itemClass: 'icon-private-placement',
				itemText: i18n.t('targetCustomerItemtext.text1', { lng })
			},
			{
				itemClass: 'icon-public-placement',
				itemText: i18n.t('targetCustomerItemtext.text2', { lng })
			},
			{
				itemClass: 'icon-quantitative-trading',
				itemText: i18n.t('targetCustomerItemtext.text3', { lng })
			},
			{
				itemClass: 'icon-quantitative-organization',
				itemText: i18n.t('targetCustomerItemtext.text4', { lng })
			}
		];

		const weOfferObj = {
			leftList: [
				{
					itemClass: 'icon-we-offer-1',
					itemText: i18n.t('weOfferListText.text1', { lng })
				},
				{
					itemClass: 'icon-we-offer-3',
					itemText: i18n.t('weOfferListText.text3', { lng })
				},
				{
					itemClass: 'icon-we-offer-5',
					itemText: i18n.t('weOfferListText.text5', { lng })
				},
				{
					itemClass: 'icon-we-offer-7',
					itemText: i18n.t('weOfferListText.text7', { lng })
				}
			],
			rightList: [
				{
					itemClass: 'icon-we-offer-2',
					itemText: i18n.t('weOfferListText.text2', { lng })
				},
				{
					itemClass: 'icon-we-offer-4',
					itemText: i18n.t('weOfferListText.text4', { lng })
				},
				{
					itemClass: 'icon-we-offer-6',
					itemText: i18n.t('weOfferListText.text6', { lng })
				},
				{
					itemClass: 'icon-we-offer-8',
					itemText: i18n.t('weOfferListText.text8', { lng })
				}
			]
		};


		return <div className="view-home">
			<TopBanner 
			sloganCn={i18n.t('sloganCn', { lng })} 
			sloganEn={i18n.t('sloganEn', { lng })} />
			<TargetCustomer
				title={i18n.t('targetCustomerTitle', { lng })}
				subTitle={i18n.t('targetCustomerSubTitle', { lng })}
				rowArr={TargetCustomerRowArr} />
			<SloganPanel />
			<WeOffer
				title={i18n.t('weOfferTitle', { lng })}
				subTitle={i18n.t('weOfferSubTitle', { lng })}
				offerObj={weOfferObj}
				btnText={i18n.t('weOfferBtnText', { lng })} />
		</div>;
	}
};
