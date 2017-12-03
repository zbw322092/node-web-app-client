import Component from 'inferno-component';
import * as tingle from '../../lib/dialog/tingle';
import i18n from '../../i18n';

declare function require(path: string);

interface PlatformCharacteristicProps {
	characteristicPropsArr: Array<CharacteristicProps>
}

interface CharacteristicProps {
	title: string,
	subTitle: string,
	content: string;
}

export default class Service extends Component<any, any> {

	constructor(props) {
		super(props);
		this.state = { 
			seletorActiveIndex: 0,
			lng: i18n.language
		};
	}

	componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	componentWillMount() {
		i18n.addResourceBundle('zh-CN', 'translation', {

		});

		i18n.addResourceBundle('en-US', 'translation', {

		});

		i18n.off('languageChanged', this.onLanguageChanged.bind(this))
	}

	characteristicPopup = (tag: string): void => {

		let modal = new tingle.modal({
			footer: false,
			closeMethods: ['overlay', 'escape'],
			cssClass: ['service-dialog'],
			onClose: () => {
				modal.destroy();
			}
		});

		const contentMap = {
			service1: `<div class="dialog-title">策略开发接口</div><div class="close-sign"></div>
			<div class="dialog-content">● 闪策系统基于国际先进标准开发，提供一套完整的标准开发接口。您只需要专心注重策略的研发，无需考虑自身的代码与不同的交易渠道或平台之间的兼容问题。<br/>
			● 策略开发的过程中，闪策提供的示例代码搭建的策略框架可以帮助您快速上手。内容详尽的API文档则可以帮助您深入了解实现各种功能的途径和方法。</div>`,
			service2: `<div class="dialog-title">技术支持</div><div class="close-sign"></div>
			<div class="dialog-content">● 闪策为您从初步开发到交易所实盘交易提供一站式的全流程贴心服务。<br/>
			● 闪策技术支持团队将为尽力为您解决在策略开发过程中遇到困惑与问题。<br/>
			● 实盘的过程中，闪策技术人员将第一时间发现并协助处理您交易过程遇到的问题。<br/>
			● 您可以通过服务热线、网络、微信等多渠道获取我们完善的双语咨询和支持服务。</div>`,
			service3: `<div class="dialog-title">回测与仿真</div><div class="close-sign"></div>
			<div class="dialog-content">● 闪策系统回测环境集成了丰富全面的历史数据，系统可同时重播所有交易所的数据，可以帮助您对策略中富有创造力的想法实现初步的验证和调试。<br/>
			● 仿真交易系统依托全面模拟的实盘环境，可以对策略进行最真实的检验，结合灵活易用的日志分析工具，为您策略优化与性能提升提供完整的支持。<br/>
			● 回测、仿真、实盘系统深度融合，同样的策略文件、同样的操作方法，在不同模式下运行可以做到无缝切换，极大提高用您策略的开发与研究效率。</div>`,
			service4: `<div class="dialog-title">高效交易平台</div><div class="close-sign"></div>
			<div class="dialog-content">● 闪策的一站式交易解决方案是一个支持低延迟Feed，基于事件的C ++ API，以及基于云的模拟和互联光纤网络的完全托管的超高性能交易平台。<br/>
			● 通过强大的硬件与高效的系统软件紧密结合、持续优化而打造出高效、低延时的交易通道是您策略先人一步的制胜法宝。<br/>
			● 经过多年检验的稳定系统与安全架构为您策略的完美实现保驾护航。</div>`,
			service5: `<div class="dialog-title">行情数据</div><div class="close-sign"></div>
			<div class="dialog-content">● 闪策提供全平台多档实时高速交易行情，丰富完善的数据为您省去了后顾之忧。<br/>
			● 统一的标准化的数据格式，免去解析不同格式行情的麻烦，让您更专注于高效的策略开发之中。</div>`,
			service6: `<div class="dialog-title">严密风控</div><div class="close-sign"></div>
			<div class="dialog-content">● 闪策提供完全自动化的在线风控，同时应用于硬件和软件配置。 平台允许用户灵活定制多层级、分账户风险控制系统，在全面满足您需求的同时将交易的风险降到最低。<br/>
			● 闪策还为您提供可视化的实时交易监控工具，交易情况一目了然，尽在掌握。</div>`,
			service7: `<div class="dialog-title">撮合引擎</div><div class="close-sign"></div>
			<div class="dialog-content">● 闪策的撮合引擎是一个完全托管的低延迟解决方案，提供具高度灵活性和可扩展性和一整套监控和分析工具。<br/>
			● 具有强大的撮合分析和订单跟踪工具，以减少故障排除延迟。支持从小范围到大范围部署，保证您的成本效益。<br/>
			● 高度可定制化的设计允许广泛的订单类型和匹配逻辑，多样的数据分析和可视化工具使操作人员能够快速满足客户需求并更有效地进行第三方查询。</div>`
		};

		modal.setContent(contentMap[tag]);

		modal.open();

		setTimeout(() => {
			modal.checkOverflow();
		}, 500);

		let dialogElement = document.querySelector('.close-sign');
		if (dialogElement) {
			dialogElement.addEventListener('click', () => {
				modal.close();
			});
		}
		
	}

	selectorClickHandler = (index, e) => {
		console.log(index);
		this.setState({
			seletorActiveIndex: index
		});
		console.log('this.setState.seletorActiveIndex: ', this.state.seletorActiveIndex);
	}

	onLanguageChanged(lng) {
		this.setState({
			lng: lng
		});
	}

	render() {
		// let lng = this.state.lng;

		const TopPanel = (props) => {
			return <div className="service-top-panel">
				<div className="small-img-container">
					<img className="panel-img-small" src={require(`../assets/views/service/img-top-panel-small.png`)} />
				</div>
				<div className="panel-img">
					<div className="brief-intro">闪策通过开创性的新方法，设计下一代基于云的分析技术，
					利用其大数据和超低延迟交易的经验，着力于构建未来的金融生态系统。</div>
					<div className="separator"></div>
					<div className="brief-intro-en">From pioneering new approaches to design the
					next generation of cloud based analytics, ShanCe leverages its deep experience with ultra low latency
					trading and big data to build financial ecosystems of the future.</div>
				</div>
			</div>
		};

		const PlatformService = (props) => {
			return <div class="platform-service">
				<div class="panel-wrapper">
					<div className="icon-our-services"></div>
					<div className="panel-title">平台服务</div>
					<div className="click-area area-1" onClick={this.characteristicPopup.bind(this,'service1')}></div>
					<div className="click-area area-2" onClick={this.characteristicPopup.bind(this,'service2')}></div>
					<div className="click-area area-3" onClick={this.characteristicPopup.bind(this,'service3')}></div>
					<div className="click-area area-4" onClick={this.characteristicPopup.bind(this,'service4')}></div>
					<div className="click-area area-5" onClick={this.characteristicPopup.bind(this,'service5')}></div>
					<div className="click-area area-6" onClick={this.characteristicPopup.bind(this,'service6')}></div>
					<div className="click-area area-7" onClick={this.characteristicPopup.bind(this,'service7')}></div>
				</div>
				<div className="small-panel-container">
					<div className="pure-g container-row">
						<div className="pure-u-1-2 pure-u-md-1-2 service-unit service-1"
						onClick={this.characteristicPopup.bind(this,'service1')}>
							<div className="unit-container">
								<div className="unit-icon"></div>
								<div className="unit-title">策略开发接口</div>
							</div>
						</div>
						<div className="pure-u-1-2 pure-u-md-1-2 service-unit service-2"
						onClick={this.characteristicPopup.bind(this,'service2')}>
							<div className="unit-container">
								<div className="unit-icon"></div>
								<div className="unit-title">技术支持</div>
							</div>
						</div>
					</div>
					<div className="pure-g container-row">
						<div className="pure-u-1-2 pure-u-md-1-2 service-unit service-3"
						onClick={this.characteristicPopup.bind(this,'service3')}>
							<div className="unit-container">
								<div className="unit-icon"></div>
								<div className="unit-title">回测与仿真</div>
							</div>
						</div>
						<div className="pure-u-1-2 pure-u-md-1-2 service-unit service-4"
						onClick={this.characteristicPopup.bind(this,'service4')}>
							<div className="unit-container">
								<div className="unit-icon"></div>
								<div className="unit-title">高效交易平台</div>
							</div>
						</div>
					</div>
					<div className="pure-g container-row">
						<div className="pure-u-1-2 pure-u-md-1-2 service-unit service-5"
						onClick={this.characteristicPopup.bind(this,'service5')}>
							<div className="unit-container">
								<div className="unit-icon"></div>
								<div className="unit-title">行情数据</div>
							</div>
						</div>
						<div className="pure-u-1-2 pure-u-md-1-2 service-unit service-6"
						onClick={this.characteristicPopup.bind(this,'service6')}>
							<div className="unit-container">
								<div className="unit-icon"></div>
								<div className="unit-title">严密风控</div>
							</div>
						</div>
					</div>
					<div className="pure-g container-row">
						<div className="pure-u-1-2 pure-u-md-1-2 service-unit service-7"
						onClick={this.characteristicPopup.bind(this,'service7')}>
							<div className="unit-container">
								<div className="unit-icon"></div>
								<div className="unit-title">撮合引擎</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		};

		const OurProductWhitePanel = (props) => {
			return <div className="product-white-panel">
				<div className="panel-icon"></div>
			</div>
		};

		const PlatformCharacteristic = (props: PlatformCharacteristicProps) => {
			return <div className="pure-g platform-characteristic">
				<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 left-panel">
					{/* <div className="panel-title">平台特色</div> */}
					<div className="four-selector-round">
						{
							props.characteristicPropsArr.map((item, i) => {
								return <div
									className={`selector-rectangle selector-${i + 1} 
										${i === this.state.seletorActiveIndex ? 'rectangle-orange' : 'rectangle-transparent'}`}
								>
									<div className="title-container" onClick={this.selectorClickHandler.bind(this, i)}>
										<div className="selector-title">{item.title}</div>
										<div className="selector-sub-title">{item.subTitle}</div>
									</div>
								</div>
							})
						}
						<div className="center-round"></div>
					</div>
				</div>
				<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2 right-panel">
					<div className="characteristic-content">
						<div className="content-text"
							dangerouslySetInnerHTML={{ __html: props.characteristicPropsArr[this.state.seletorActiveIndex]['content'] }}></div>
					</div>
				</div>

			</div>
		};

		let characteristicPropsArr = [
			{
				title: '快速',
				subTitle: 'FAST',
				content: `● 高效的系统: 精炼的结构，最大化性能，微秒级别的平台穿透时间。<br/>
				● 超速的连接: 本地快速下单、获取实时市场行情。<br/>
				● 最快的网络: 全网光纤10G。<br/>
				● 顶级的优化: 交易服务器软、硬件优化。<br/>
				● 最全的通道: 中国所有期货交易所，海外市场通道。 支持期货、期权交易。<br/>
				● 低延时:本地的数据传输路径、本地快速下单，在包括上海期货交易所、大连商品交易所、中国金融期货交易所等的期货交易所已实现高速柜台，最大程度降低下单时间损耗。<br/>
				● 高吞吐: 每秒钟可处理数以万计的订单。<br/>
				● 深度: Level1、Level2、Ticks。<br/>
				● 统一: 标准化不同市场行情数据，减少策略开发成本。`
			},
			{
				title: '稳定',
				subTitle: 'STABLE',
				content: `● 系统通过各项严苛测试以及多年实战的检验，逐渐稳定成熟为现在的高品质结晶，并且在不断更新完善之中。<br/>
				● 核心系统层面遇到不可预知错误时，系统自身会自动重新连接，确保交易重新正常进行。<br/>
				● 策略程序层面遇到不可预知错误时，系统会采取紧急应急措施，将程序失控引起的风险降低至最小。<br/>
				● 实时监控：系统每个模块的一举一动都将受到实时严密的监控，为系统和程序的稳定运行提供了保障。<br/>
				● 及时反馈：系统出现任何异常情况都会及时响应并反馈给专业运维人员，错误会在第一时间内被处理并最终得到解决。<br/>
				● 详尽日志：丰富详尽的系统日志方便专业团队随时对系统运行的过程进行查询和回溯。`
			},
			{
				title: '安全',
				subTitle: 'SECURE',
				content: `● 交易前限制检查--可根据客户的需求定制不同限制参数。<br/>
				● 交易后实时监控--监控方式丰富多样。<br/>
				● 多套工具辅助--界面友好的交易工具。<br/>
				● 私密性: 协助客户部署属于自己的策略服务器，闪策与其他客户无权登陆该服务器。<br/>
				● 安全性：通过VLAN的方式划分不同 客户的服务器。确保不同客户与服务器之间互不干扰，保证私 密性。<br/>
				● 低延时：客户服务器部署在闪策机柜， 保证了连接的低延迟。`
			},
			{
				title: '便捷',
				subTitle: 'CONVENIENT',
				content: `● 基于事件处理架构：少量的代码、简单的逻辑，客户即可对真实的交易环境 做出及时的响应，更高效的产出、更短的开发周期。<br/>
				● C++ API接口：比脚本语言及C#、Java具有更高效的性能，并可编写复杂策略。<br/>
				● 二进制协议：满足不同开发语言用户的不同需求。<br/>
				● 详尽的参考资料：功能展示全面的API文档及示例代码帮助客户快速上手。<br/>
				● 精确：准确记录所有细节、包括延迟数据，还原真实的历史市场环境。<br/>
				● 海量：保存平台交易至今多年的历史数据。<br/>
				● 异地备份：确保数据安全。<br/>
				● 易用：只需要一个配置开关，即可从仿真回测切换到仿真实盘行情或实盘生产环境（使用实盘行情和报单）。无需修改任何代码。`
			}
		]

		return <div className="view-service">
			<TopPanel />
			<PlatformService />
			<OurProductWhitePanel />
			<PlatformCharacteristic characteristicPropsArr={characteristicPropsArr} />
		</div>;
	}
};
