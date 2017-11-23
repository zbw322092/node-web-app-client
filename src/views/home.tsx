import Component from 'inferno-component';
import { Link } from 'inferno-router';

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
	render() {

		const TopBanner = (props: topBannerProps) => {
			return <div className="home-top-banner">
				<div className="slogan-cn">{props.sloganCn}</div>
				<div className="slogan-en">{props.sloganEn}</div>
			</div>
		};

		const TargetCustomer = (props: targetCustomerProps) => {
			return <div className="home-target-customer">
				<div className="title">{props.title}</div>
				<div className="sub-title">{props.subTitle}</div>
				<div className="row-flex">
					{
						props.rowArr.map((item) => {
							return <div className="row-unit">
								<div className={`row-icon ${item.itemClass}`}></div>
								<div className="row-text" dangerouslySetInnerHTML={{__html: item.itemText}}></div>
							</div>
						})
					}
				</div>
			</div>
		};

		const SloganPanel = (props) => {
			return <div className="home-slogan-panel">
				<div className="slogan-text">
					<div className="main-text">您专心策略</div>
					<div className="sub-text">You Own Strategy</div>
					<div className="main-text second-group-text">我们专注技术</div>
					<div className="sub-text">We Pursue Technology</div>
				</div>
			</div>
		};

		const WeOffer = (props: weOfferProps) => {
			return <div className="home-we-offer">
				<div className="panel-title">{props.title}</div>
				<div className="panel-sub-title">{props.subTitle}</div>
				<div className="info-list">
					<div className="left-list">
						{
							props.offerObj.leftList.map((item) => {
								return <div className="list-unit">
									<div className={`unit-icon ${item.itemClass}`}></div>
									<span className="unit-text">{item.itemText}</span>
								</div>
							})
						}
					</div>
					<div className="right-list">
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
					<Link to="/product">{ props.btnText }</Link>
				</div>
			</div>
		};

		const TargetCustomerRowArr = [
			{
				itemClass: 'icon-private-placement',
				itemText: '私募'
			},
			{
				itemClass: 'icon-public-placement',
				itemText: '公募'
			},
			{
				itemClass: 'icon-quantitative-trading',
				itemText: '专业量化交易<br/>自营团队'
			},
			{
				itemClass: 'icon-quantitative-organization',
				itemText: '量化机构'
			}
		];

		const weOfferObj = {
			leftList: [
				{
					itemClass: 'icon-we-offer-1',
					itemText: '高度定制化的超低延迟市场行情数据解决方案，微秒级时间戳'
				},
				{
					itemClass: 'icon-we-offer-3',
					itemText: '用于市场行情数据传输的优化的二进制协议'
				},
				{
					itemClass: 'icon-we-offer-5',
					itemText: '对股票、期货、期权交易的支持'
				},
				{
					itemClass: 'icon-we-offer-7',
					itemText: '结合光纤和微波技术的优化的市场行情数据链'
				}
			],
			rightList: [
				{
					itemClass: 'icon-we-offer-2',
					itemText: '经过实战检验、高速高效、高性能表现的平台'
				},
				{
					itemClass: 'icon-we-offer-4',
					itemText: '顶尖硬件设备（服务器及网络设备）及完美调优的运行环境'
				},
				{
					itemClass: 'icon-we-offer-6',
					itemText: '全球覆盖，同一套通用API'
				},
				{
					itemClass: 'icon-we-offer-8',
					itemText: '与上海证券交易所及中国所有期货交易所的低延迟通道'
				}
			]
		};


		return <div className="view-home">
			<TopBanner sloganCn="闪策 · 闪耀策略的光芒" sloganEn="SHANCE · MAKE YOUR STRATEGY SHINE" />
			<TargetCustomer
				title="定位于高端用户"
				subTitle="闪策 · 低延迟高性能量化交易系统解决方案的世界一流领军者"
				rowArr={TargetCustomerRowArr} />
			<SloganPanel />
			<WeOffer
				title="我们提供"
				subTitle="闪策 · 基于API的交易系统解决方案和服务的独立供应商"
				offerObj={weOfferObj}
				btnText="查看产品介绍" />
		</div>;
	}
};
