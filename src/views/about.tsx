import Component from 'inferno-component';

interface WhoWeAreProps {
	intro: string;
}

interface SloganProps {
	sloganCn: string;
	sloganEn: string;
}

interface GreatTeamProps {
	introArr: Array<TeamIntroObj>
}

interface TeamIntroObj {
	title: string;
	subTitle: string;
	content: string;
}

export default class About extends Component<any, any> {
	render() {

		const WhoWeAre = (props: WhoWeAreProps) => {
			return <div className="about-us-panel">
				<div className="panel-title">我们是谁</div>
				<div className="about-us-intro"
					dangerouslySetInnerHTML={{ __html: props.intro }}></div>
				<div className="scroll-down">
					<div className="scroll-text">向下滑动  了解我们</div>
					<div className="scroll-icon"></div>
				</div>
			</div>
		};

		const SloganPanel = (props: SloganProps) => {
			return <div className="slogan-panel">
				<div className="slogan-container">
					<div className="slogan-ch"
						dangerouslySetInnerHTML={{ __html: props.sloganCn }}></div>
					<div className="slogan-en"
						dangerouslySetInnerHTML={{ __html: props.sloganEn }}></div>
				</div>
			</div>
		};

		const ManagementTeam = (props) => {
			return <div className="management-team">
				<div className="panel-icon"></div>
				<div className="panel-title">管理团队</div>
				<div class="team-intro left-intro">
					<div className="intro-name">吴学华	Joanna</div>
					<div className="intro-position">首席执行官 CEO</div>
					<div className="intro-content">吴学华女士，本科毕业于北方交通大学经济与工商管理学院。
						在北电、西门子、微软等知名的IT与通讯跨国公司有近20年丰富的工作和管理经验。闪策成立之前，她曾在微软工
						作了近八年，负责重要行业的战略拓展与大型金融机构的市场销售管理工作，在推动微软中国金融行业业务快速
						增长与可持续发展方面取得了卓越业绩，屡获微软全球及大中华区嘉奖。具有全球化视野，在以科技创新为引领，
						推动金融业务发展的探索和实践中积累了丰富的经验。工作之余，她曾多次在全国歌唱比赛中获奖。在2015年和2016年
						分别参加过纽约国际马拉松和芝加哥国际马拉松并取得优异成绩。</div>
				</div>
				<div class="team-intro right-intro">
					<div className="intro-name">刘可 Ke</div>
					<div className="intro-position">技术总监 CTO</div>
					<div className="intro-content">刘可，毕业于复旦大学计算机科学系本科，后赴美留学，在
						纽约州立大学计算机科学专业获得博士学位并有短暂博士后研究经历，在无线几何路由、超高宽带无线
						通讯协议和无线通讯安全方面有一定的研究成果， 博士研究期间参与了WiMedia UWB(无线超高宽带）
						协议的制定工作。而后，先后就任于比利时KBC金融产品（美国）、彭博社（美国） 及英国巴克莱资本
						（美国）等公司。在巴克莱资本任职期间，担任算法交易智能路由技术组负责人（Tech Lead and People
						Manager, Vice President)，拥有丰富的证券交易独立报盘系统的开发管理经验，特别是在智能路由、
						交易执行算法开发运行和风险管控等方面积累了大量的第一手知识和经验。他参与开发的系统包括：巴克莱
						暗池LX2，巴克莱股票与期权智能路由，巴克莱算法交易系统基础架构，时间敏感算法，暗流访问算法，等等；
						并参与设计开发了巴克莱新一代全域智能报盘系统等。</div>
				</div>
			</div>
		};

		const GreatTeam = (props: GreatTeamProps) => {
			return <div class="great-team">
				<div className="panel-icon"></div>
				<div className="panel-title">精英团队</div>
				<div className="intro-container">
					{
						props.introArr.map((item) => {
							return <div className="team-intro">
								<div className="top-line"></div>
								<div className="intro-title"
									dangerouslySetInnerHTML={{ __html: item.title }}></div>
								<div className="intro-sub-title"
									dangerouslySetInnerHTML={{ __html: item.subTitle }}></div>
								<div className="intro-content"
									dangerouslySetInnerHTML={{ __html: item.content }}></div>
							</div>
						})
					}
				</div>
			</div>
		};

		const whoWeAreIntro = {
			intro: `上海闪策信息科技有限公司是为中国证券与期货市场提供自动
			化交易系统基础架构与服务的专业金融技术服务公司。闪策科技的目标是成为中国一流
			的金融证券与衍生品交易行业技术服务领军者，解放客户的技术力量，让客户专注于量化交易策略开发。<br/><br/><br/>
			上海闪策信息科技有限公司是2017年第13届中国（深圳）国际期货大会赞助商`
		};

		const teamIntroArr:Array<TeamIntroObj> = [
			{
				title: '15年',
				subTitle: '15年以上管理经验',
				content: `闪策管理团队由具有十五年以上知名IT跨国企业及大型跨国金融公司从业经验的管理人员组成。
				具有全球化视野，在以科技创新为引领，推动金融业务发展的探索和实践中积累了丰富的经验。`
			},
			{
				title: '90%',
				subTitle: '90%以上来自知名企业',
				content: `90%的成员加入公司前，曾在摩根士丹利、比利时KBC、彭博社、巴克莱资本、中金技术、
				百度、腾讯、微软等知名企业从事软件开发、通讯与算法交易智能路由技术研究、低延时证券交易系统的
				开发和管理工作。`
			},
			{
				title: '100%',
				subTitle: '100%名校教育背景',
				content: `闪策的开发、运维团队由资深研发人员组成，他们均毕业于国内外知名院校，包括复旦大学、
				上海交通大学、南京大学、中国科学院、同济大学等， 其中90%的成员拥有硕士学位。`
			}
		]


		return <div class="view-about">
			<WhoWeAre intro={whoWeAreIntro.intro} />
			<SloganPanel
				sloganCn="闪策 · 为极致 · 做不同"
				sloganEn="SHANCE · PURSUE EXCELLENCE · SUCCESS BY DISTINCTION" />
			<ManagementTeam />
			<SloganPanel
				sloganCn="闪策 · 岂止于快"
				sloganEn="SHANCE · FAST AND MORE" />
			<GreatTeam introArr={teamIntroArr} />
		</div>;
	}
};
