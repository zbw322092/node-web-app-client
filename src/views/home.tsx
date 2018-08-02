import Component from 'inferno-component';
import { Link } from 'inferno-router';
import i18n from '../../i18n';

interface TopBannerProps {
	sloganCn: string;
	sloganEn: string;
}

interface TargetCustomerProps {
	title: string;
	subTitle: string;
	rowArr: RowItem[];
}

interface RowItem {
	itemClass: string;
	itemText: string;
}

interface WeOfferProps {
	title: string;
	subTitle: string;
	offerObj: {
		leftList: WeOfferList[];
		rightList: WeOfferList[];
	};
	btnText: string;
}

interface WeOfferList {
	itemClass: string;
	itemText: string;
}

export default class Home extends Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {
			lng: i18n.language
		};
	}

	public componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	public componentWillMount() {
		i18n.addResourceBundle('zh-CN', 'translation', {
			sloganCn: '闪策 · 闪耀策略的光芒',
			sloganEn: 'SHANCE · MAKE YOUR STRATEGY SHINE',
			targetCustomerTitle: '定位于专业交易客户',
			targetCustomerSubTitle: '闪策 · 低延迟高性能量化交易系统解决方案领军者',
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
				text8: '与中国所有证券和期货交易所的低延时通道及托管机房'
			},
			weOfferBtnText: '查看产品介绍',
			contactUsTitle: '联系我们，如果您正在寻找......',
			lookingFor: {
				text1: '低延迟行情和下单通道',
				text2: '算法交易',
				text3: '仿真模拟',
				text4: '独立报盘系统',
				text5: '量化交易平台',
				text6: '策略回测',
				text7: '机房托管',
				text8: '风险管理'
			}
		});

		i18n.addResourceBundle('en-US', 'translation', {
			sloganCn: 'SHANCE · MAKE YOUR STRATEGY SHINE',
			sloganEn: '闪策 · 闪耀策略的光芒',
			targetCustomerTitle: 'Designed For Trading Professionals',
			targetCustomerSubTitle: 'SHANCE · LEADING PROVIDER OF HIGH PERFORMANCE QUANTITATIVE TRADING SYSTEM SOLUTIONS',
			targetCustomerItemtext: {
				text1: 'Hedge Fund',
				text2: 'Mutual Fund',
				text3: 'Algorithmic Trading',
				text4: 'Quantitative Trading &<br/>HFT'
			},
			sloganPanelMainText1: 'You Own Strategy',
			sloganPanelSubText1: '',
			sloganPanelMainText2: 'We Pursue Technology',
			sloganPanelSubText2: '',
			weOfferTitle: 'We Provide',
			weOfferSubTitle: `SHANCE · LEADING INDEPENDENT PROVIDER OF API-BASED MARKET DATA AND TRADING SYSTEM SERVICES`,
			weOfferListText: {
				text1: `Highly customizable ultra-low latency market data solutions, timestamps with microsecond precision`,
				text2: `Industry proven, stable and high-performance platform`,
				text3: `Optimized binary protocol for market data dissemination`,
				text4: `Top hardware (server and network infrastructure) and perfectly-tuned operating environment`,
				text5: `Support stocks, futures and options trading`,
				text6: `All-market coverage & Unified API`,
				text7: `Optimized Market Data network, leveraging fiber and microwave technologies`,
				text8: `Low-latency channels and colocation into all stock and futures exchanges in China`
			},
			weOfferBtnText: `View product introduction`,
			contactUsTitle: 'Contact us if you are looking for:',
			lookingFor: {
				text1: 'Low latency market data and order entry',
				text2: 'Algorithmic trading',
				text3: 'Live simulation',
				text4: 'Direct Market Access(DMA)',
				text5: 'Quant trading platform',
				text6: 'Strategy back-testing',
				text7: 'Colocation',
				text8: 'Risk management'
			}
		});

		i18n.off('languageChanged', this.onLanguageChanged.bind(this));
	}

	public onLanguageChanged(lng) {
		this.setState({ lng });
	}

	public render() {
		const lng = this.state.lng;

		const TopBanner = (props: TopBannerProps) => {
			return <div className="home-top-banner">
				<div className="panel-container">
					<div className="slogan-cn">{props.sloganCn}</div>
					<div className="slogan-en">{props.sloganEn}</div>
				</div>
			</div>;
		};

		const TargetCustomer = (props: TargetCustomerProps) => {
			return <div className="home-target-customer">
				<div className="title">{props.title}</div>
				<div className="sub-title">{props.subTitle}</div>
				<div className="pure-g row-flex">
					{
						props.rowArr.map((item) => {
							return <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 row-unit">
								<div className={`row-icon ${item.itemClass}`}></div>
								<div className="row-text" dangerouslySetInnerHTML={{ __html: item.itemText }}></div>
							</div>;
						})
					}
				</div>
			</div>;
		};

		const SloganPanel = (props) => {
			return <div className="home-slogan-panel">
				<div className="slogan-text">
					<div className="main-text">{i18n.t('sloganPanelMainText1', { lng })}</div>
					<div className="sub-text">{i18n.t('sloganPanelSubText1', { lng })}</div>
					<div className="main-text second-group-text">{i18n.t('sloganPanelMainText2', { lng })}</div>
					<div className="sub-text">{i18n.t('sloganPanelSubText2', { lng })}</div>
				</div>
			</div>;
		};

		const WeOffer = (props: WeOfferProps) => {
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
								</div>;
							})
						}
					</div>
					<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 right-list">
						{
							props.offerObj.rightList.map((item) => {
								return <div className="list-unit">
									<div className={`unit-icon ${item.itemClass}`}></div>
									<span className="unit-text">{item.itemText}</span>
								</div>;
							})
						}
					</div>
				</div>
				<div className="check-product">
					<Link to="/product">{props.btnText}</Link>
					{/* {props.btnText} */}
				</div>
			</div>;
		};

		const ContactUs = () => {
			const listOne = [1, 2, 3, 4];
			const listTwo = [5, 6, 7, 8];
			return (
				<div className="contact-us">
					<div className="panel-title">{i18n.t('contactUsTitle', { lng })}</div>
					<div className="pure-g info-list">
						<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 left-list">
							{
								listOne.map((item: number) => {
									return <div className="list-unit">
										<div className={`unit-icon icon-looking-for-${item}`}></div>
										<span className="unit-text">{i18n.t(`lookingFor.text${item}`, { lng })}</span>
									</div>;
								})
							}
						</div>
						<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 right-list">
						{
								listTwo.map((item: number) => {
									return <div className="list-unit">
										<div className={`unit-icon icon-looking-for-${item}`}></div>
										<span className="unit-text">{i18n.t(`lookingFor.text${item}`, { lng })}</span>
									</div>;
								})
							}
						</div>
					</div>
				</div>
			);
		};

		const targetCustomerRowArr = [
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
				rowArr={targetCustomerRowArr} />
			<SloganPanel />
			<WeOffer
				title={i18n.t('weOfferTitle', { lng })}
				subTitle={i18n.t('weOfferSubTitle', { lng })}
				offerObj={weOfferObj}
				btnText={i18n.t('weOfferBtnText', { lng })} />
			<ContactUs />
		</div>;
	}
}
