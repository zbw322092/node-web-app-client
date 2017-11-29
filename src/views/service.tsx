import Component from 'inferno-component';

declare function require(path: string);

// interface PlatformCharacteristicProps {
// 	characteristicPropsArr: Array<CharacteristicProps>
// }

// interface CharacteristicProps {
// 	title: string,
// 	subTitle: string,
// 	content: string;
// }

export default class Service extends Component<any, any> {

	constructor(props) {
		super(props);
		this.state = { seletorActiveIndex: 0 };
	}

	selectorClickHandler = (index, e) => {
		console.log(index);
		this.setState({
			seletorActiveIndex: index
		});
		console.log('this.setState.seletorActiveIndex: ', this.state.seletorActiveIndex);
	}

	render() {

		const TopPanel = (props) => {
			return <div className="service-top-panel">
				<div className="small-img-container">
					<img className="panel-img-small" src={require(`../assets/views/service/img-top-panel-small.png`)} />
				</div>
				<div className="panel-img">
					<div className="brief-intro">闪策通过开创性的新方法，设计下一代基于云的分析技术，
					利用其大数据和超低延迟交易的经验，着力于构建未来的金融生态系统。</div>
					<div className="brief-intro-en">From pioneering new approaches to design the
					next generation of cloud based analytics, ShanCe leverages its deep experience with ultra low latency
					trading and big data to build financial ecosystems of the future.</div>
				</div>
			</div>
		};

		// const PlatformService = (props) => {
		// 	return <div class="platform-service">
		// 		<div className="icon-our-services"></div>
		// 		<div className="panel-title">平台服务</div>
		// 		<div className="service-name name-1">策略开发接口</div>
		// 		<div className="service-name name-2">技术支持</div>
		// 		<div className="service-name name-3">回测与仿真</div>
		// 		<div className="service-name name-4">高效交易平台</div>
		// 		<div className="service-name name-5">行情数据</div>
		// 		<div className="service-name name-6">严密风控</div>
		// 		<div className="service-name name-7">撮合引擎</div>
		// 	</div>
		// };

		// const OurProductWhitePanel = (props) => {
		// 	return <div className="product-white-panel">
		// 		<div className="panel-icon"></div>
		// 	</div>
		// };

		// const PlatformCharacteristic = (props: PlatformCharacteristicProps) => {
		// 	return <div className="platform-characteristic">
		// 		<div className="panel-title">平台特色</div>
		// 		<div className="four-selector-round">
		// 			{
		// 				props.characteristicPropsArr.map((item, i) => {
		// 					return <div
		// 						className={`selector-rectangle selector-${i + 1} 
		// 					${i === this.state.seletorActiveIndex ? 'rectangle-orange' : 'rectangle-transparent'}`}
		// 					>
		// 						<div className="title-container" onClick={this.selectorClickHandler.bind(this, i)}>
		// 							<div className="selector-title">{item.title}</div>
		// 							<div className="selector-sub-title">{item.subTitle}</div>
		// 						</div>
		// 					</div>
		// 				})
		// 			}
		// 			<div className="center-round"></div>
		// 		</div>

		// 		<div className="characteristic-content">
		// 			<div className="content-text"
		// 				dangerouslySetInnerHTML={{ __html: props.characteristicPropsArr[this.state.seletorActiveIndex]['content'] }}></div>
		// 		</div>
		// 	</div>
		// };

		// let characteristicPropsArr = [
		// 	{
		// 		title: '快速',
		// 		subTitle: 'FAST',
		// 		content: `● 高效的系统: 精炼的结构，最大化性能，微秒级别的平台穿透时间。<br/>
		// 		● 超速的连接: 本地快速下单、获取实时市场行情。<br/>
		// 		● 最快的网络: 全网光纤10G。<br/>
		// 		● 顶级的优化: 交易服务器软、硬件优化。<br/>
		// 		● 最全的通道: 中国所有期货交易所，海外市场通道。 支持期货、期权交易。<br/>
		// 		● 低延时:本地的数据传输路径、本地快速下单，在包括上海期货交易所、大连商品交易所、中国金融期货交易所等的期货交易所已实现高速柜台，最大程度降低下单时间损耗。<br/>
		// 		● 高吞吐: 每秒钟可处理数以万计的订单。<br/>
		// 		● 深度: Level1、Level2、Ticks。<br/>
		// 		● 统一: 标准化不同市场行情数据，减少策略开发成本。`
		// 	},
		// 	{
		// 		title: '稳定',
		// 		subTitle: 'STABLE',
		// 		content: `● 系统通过各项严苛测试以及多年实战的检验，逐渐稳定成熟为现在的高品质结晶，并且在不断更新完善之中。<br/>
		// 		● 核心系统层面遇到不可预知错误时，系统自身会自动重新连接，确保交易重新正常进行。<br/>
		// 		● 策略程序层面遇到不可预知错误时，系统会采取紧急应急措施，将程序失控引起的风险降低至最小。<br/>
		// 		● 实时监控：系统每个模块的一举一动都将受到实时严密的监控，为系统和程序的稳定运行提供了保障。<br/>
		// 		● 及时反馈：系统出现任何异常情况都会及时响应并反馈给专业运维人员，错误会在第一时间内被处理并最终得到解决。<br/>
		// 		● 详尽日志：丰富详尽的系统日志方便专业团队随时对系统运行的过程进行查询和回溯。`
		// 	},
		// 	{
		// 		title: '安全',
		// 		subTitle: 'SECURE',
		// 		content: `● 交易前限制检查--可根据客户的需求定制不同限制参数。<br/>
		// 		● 交易后实时监控--监控方式丰富多样。<br/>
		// 		● 多套工具辅助--界面友好的交易工具。<br/>
		// 		● 私密性: 协助客户部署属于自己的策略服务器，闪策与其他客户无权登陆该服务器。<br/>
		// 		● 安全性：通过VLAN的方式划分不同 客户的服务器。确保不同客户与服务器之间互不干扰，保证私 密性。<br/>
		// 		● 低延时：客户服务器部署在闪策机柜， 保证了连接的低延迟。`
		// 	},
		// 	{
		// 		title: '便捷',
		// 		subTitle: 'CONVENIENT',
		// 		content: `● 基于事件处理架构：少量的代码、简单的逻辑，客户即可对真实的交易环境 做出及时的响应，更高效的产出、更短的开发周期。<br/>
		// 		● C++ API接口：比脚本语言及C#、Java具有更高效的性能，并可编写复杂策略。<br/>
		// 		● 二进制协议：满足不同开发语言用户的不同需求。<br/>
		// 		● 详尽的参考资料：功能展示全面的API文档及示例代码帮助客户快速上手。<br/>
		// 		● 精确：准确记录所有细节、包括延迟数据，还原真实的历史市场环境。<br/>
		// 		● 海量：保存平台交易至今多年的历史数据。<br/>
		// 		● 异地备份：确保数据安全。<br/>
		// 		● 易用：只需要一个配置开关，即可从仿真回测切换到仿真实盘行情或实盘生产环境（使用实盘行情和报单）。无需修改任何代码。`
		// 	}
		// ]

		return <div className="view-service">
			<TopPanel />
			{/* <PlatformService />
			<OurProductWhitePanel />
			<PlatformCharacteristic characteristicPropsArr={characteristicPropsArr} /> */}
		</div>;
	}
};
