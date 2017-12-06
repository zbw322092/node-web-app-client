import Component from 'inferno-component';
import i18n from '../../i18n';

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

interface Partners {
	parentsArr: Array<PartnersObj>
}

interface PartnersObj {
	className: 'string',
	link: 'string'
}

export default class About extends Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {
			lng: i18n.language
		};
	}

	componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	componentWillMount() {
		i18n.addResourceBundle('zh-CN', 'translation', {
			whoWeAreTitle: '我们是谁',
			whoWeAreIntro: `上海闪策信息科技有限公司是为中国证券与期货市场提供自动
			化交易系统基础架构与服务的专业金融技术服务公司。闪策科技的目标是成为中国一流
			的金融证券与衍生品交易行业技术服务领军者，解放客户的技术力量，让客户专注于量化交易策略开发。<br/><br/><br/>
			上海闪策信息科技有限公司是2017年第13届中国（深圳）国际期货大会赞助商`,
			whoWeAreScrollDown: '向下滑动  了解我们',
			sloganPanel1Top: '闪策 · 为极致 · 做不同',
			sloganPanel1Botton: 'SHANCE · PURSUE EXCELLENCE · SUCCESS BY DISTINCTION',
			sloganPanel2Top: '闪策 · 岂止于快',
			sloganPanel2Botton: 'SHANCE · FAST AND MORE',
			sloganPanel3Top: '闪策 · 荣誉始于信任',
			sloganPanel3Botton: 'SHANCE · HONOR BEGINS WITH TRUST',
			managementTeamTitle: '管理团队',
			managementTeam: {
				ceo: {
					name: '吴学华	Joanna',
					position: '首席执行官 CEO',
					content: `吴学华女士，本科毕业于北方交通大学经济与工商管理学院。
					在北电、西门子、微软等知名的IT与通讯跨国公司有近20年丰富的工作和管理经验。闪策成立之前，她曾在微软工
					作了近八年，负责重要行业的战略拓展与大型金融机构的市场销售管理工作，在推动微软中国金融行业业务快速
					增长与可持续发展方面取得了卓越业绩，屡获微软全球及大中华区嘉奖。具有全球化视野，在以科技创新为引领，
					推动金融业务发展的探索和实践中积累了丰富的经验。工作之余，她曾多次在全国歌唱比赛中获奖。在2015年和2016年
					分别参加过纽约国际马拉松和芝加哥国际马拉松并取得优异成绩。`
				},
				cto: {
					name: '刘可 Ke',
					position: '技术总监 CTO',
					content: `刘可，毕业于复旦大学计算机科学系本科，后赴美留学，在
					纽约州立大学计算机科学专业获得博士学位并有短暂博士后研究经历，在无线几何路由、超高宽带无线
					通讯协议和无线通讯安全方面有一定的研究成果， 博士研究期间参与了WiMedia UWB(无线超高宽带）
					协议的制定工作。而后，先后就任于比利时KBC金融产品（美国）、彭博社（美国） 及英国巴克莱资本
					（美国）等公司。在巴克莱资本任职期间，担任算法交易智能路由技术组负责人（Tech Lead and People
					Manager, Vice President)，拥有丰富的证券交易独立报盘系统的开发管理经验，特别是在智能路由、
					交易执行算法开发运行和风险管控等方面积累了大量的第一手知识和经验。他参与开发的系统包括：巴克莱
					暗池LX2，巴克莱股票与期权智能路由，巴克莱算法交易系统基础架构，时间敏感算法，暗流访问算法，等等；
					并参与设计开发了巴克莱新一代全域智能报盘系统等。`
				}
			},
			greatTeam: {
				title: '精英团队',
				teamIntro: {
					intro1: {
						title: '15年',
						subTitle: '15年以上管理经验',
						content: `闪策管理团队由具有十五年以上知名IT跨国企业及大型跨国金融公司从业经验的管理人员组成。
						具有全球化视野，在以科技创新为引领，推动金融业务发展的探索和实践中积累了丰富的经验。`
					},
					intro2: {
						title: '90%',
						subTitle: '90%以上来自知名企业',
						content: `90%的成员加入公司前，曾在摩根士丹利、比利时KBC、彭博社、巴克莱资本、中金技术、
						百度、腾讯、微软等知名企业从事软件开发、通讯与算法交易智能路由技术研究、低延时证券交易系统的
						开发和管理工作。`
					},
					intro3: {
						title: '100%',
						subTitle: '100%名校教育背景',
						content: `闪策的开发、运维团队由资深研发人员组成，他们均毕业于国内外知名院校，包括复旦大学、
						上海交通大学、南京大学、中国科学院、同济大学等， 其中90%的成员拥有硕士学位。`
					}
				}
			},
			partnersTitle: '战略合作伙伴',
			ourMission: {
				title: '我们的使命',
				slogan: '您专心策略，我们专注技术'
			}
		});

		i18n.addResourceBundle('en-US', 'translation', {
			whoWeAreTitle: 'Who We Are',
			whoWeAreIntro: `ShanCe aims to be the leading technology service provider in the 
			equities and derivatives trading industry in China. We help our clients focus on 
			their strategy research and development by offloading the technical and 
			operational parts from their routine work with our expertise.<br/><br/><br/>
			ShanCe is the Sponsor of 2017 Cooperation Program for 13th China (Shenzhen) International Derivatives Forum`,
			whoWeAreScrollDown: 'Slide down to meet us',
			sloganPanel1Top: 'SHANCE · PURSUE EXCELLENCE · SUCCESS BY DISTINCTION',
			sloganPanel1Botton: '闪策 · 为极致 · 做不同',
			sloganPanel2Top: 'SHANCE · FAST AND MORE',
			sloganPanel2Botton: '闪策 · 岂止于快',
			sloganPanel3Top: 'SHANCE · HONOR BEGINS WITH TRUST',
			sloganPanel3Botton: '闪策 · 荣誉始于信任',
			managementTeamTitle: 'Management Team',
			managementTeam: {
				ceo: {
					name: 'Joanna Wu',
					position: 'Chief Executive Officer',
					content: `Joanna, graduated from Beijing Jiao Tong University, majored in 
					Business and Economics, has around 20 years of working and management 
					experience in multinational corporations in IT and communication, such as 
					Nortel, Siemens and Microsoft.<br/>Before joining ShanCe, she worked for 
					Microsoft for nearly 8 years, where she was responsible for the strategic 
					expansion of major industries and the marketing management of large 
					financial institutions. She achieved outstanding results in promoting the 
					rapid growth and sustainable development of Microsoft China's financial industry, 
					and was awarded by Microsoft many times. She has accumulated rich experience in 
					technical innovation, global-perspective and finance business expansion.<br/>
					She also has some achievement in Vocal Performance and Marathon 
					(New York international marathon in 2015 & Chicago international marathon in 2016).`
				},
				cto: {
					name: 'Ke Liu',
					position: 'Chief Technology Officer',
					content: `Ke Liu, received his B.S from Fudan University, and Ph.D from 
					State University of New York at Binghamton, both in Computer Science. He 
					contributed to WiMedia UWB protocol during his Ph.D. research. Before 
					joining ShanCe as the CTO, he worked for KBC Financial Holdings (US), 
					Bloomberg L.P. (New York) and Barclay's Capital (US). He was the tech team 
					lead for US equity and derivatives smart order router (SOR) at Barclay's 
					Capital. He also participated in implementing multiple electronic trading 
					systems such as Barclay's dark pool (LX2), Barclay's Algorithmic trading 
					platform. `
				}
			},
			greatTeam: {
				title: 'Elite Team',
				teamIntro: {
					intro1: {
						title: '15 years',
						subTitle: '15+Years of Management Experience',
						content: `ShanCe management team has over 15 years of experience in 
						product and project managing in large financial or IT enterprises. 
						They have accumulated rich experience in technical innovation, 
						Global-perspective and finance business expansion.`
					},
					intro2: {
						title: '90%',
						subTitle: '90%+ From Well-Known Enterprises',
						content: `90% ShanCers worked for Morgan Stanley, KBC, Bloomberg, 
						Barclays Capital, Baidu, Tencent, CFFEXIT, Microsoft and other famous 
						companies before joining ShanCe. They have abundant experience in 
						software development, communication, Intelligent Routing for algorithmic 
						trading, low latency trading system development, and more.`
					},
					intro3: {
						title: '100%',
						subTitle: '100% Graduated from Top Universities',
						content: `ShanCe’s development and operation team graduated from top 
						universities like Fudan, Jiaotong, Nanjing, Tongji, University of Chinese 
						Academy of Sciences, and others. 90% of them have master degrees.`
					}
				}
			},
			partnersTitle: 'Strategic Partners',
			ourMission: {
				title: 'OUR MISSION',
				slogan: 'You Own Strategy, We Pursue Technology'
			}
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

		let panelTitleEn = lng === 'en-US' ? 'panel-title-en' : '';
		let aboutUsIntroEn = lng === 'en-US' ? 'about-us-intro-en' : '';
		let manageTeamEn = lng === 'en-US' ? 'manage-team-en' : '';
		// let manageTeamMd = lng === 'en-US' ? '' : 'pure-u-md-1-2';
		let greatTeamIntroEn = lng === 'en-US' ? 'team-intro-en' : '';
		let ourMissionEn = lng === 'en-US' ? 'our-mission-en' : '';

		const WhoWeAre = (props: WhoWeAreProps) => {
			return <div className="about-us-panel">
				<div className={`panel-title ${panelTitleEn}`}>{i18n.t('whoWeAreTitle', { lng })}</div>
				<div className={`about-us-intro ${aboutUsIntroEn}`}
					dangerouslySetInnerHTML={{ __html: props.intro }}></div>
				<div className="scroll-down">
					<div className="scroll-text">{i18n.t('whoWeAreScrollDown', { lng })}</div>
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
			return <div className={`management-team ${manageTeamEn}`}>
				<div className="panel-icon"></div>
				<div className="panel-title">{i18n.t('managementTeamTitle', { lng })}</div>
				<div className="pure-g">
					<div class={`pure-u-1 pure-u-lg-1-2 team-intro`}>
						<div className="left-intro">
							<div class="intro-wrapper">
								<div className="intro-name">{i18n.t('managementTeam.ceo.name', { lng })}</div>
								<div className="intro-position">{i18n.t('managementTeam.ceo.position', { lng })}</div>
								<div className="intro-content" dangerouslySetInnerHTML={{ __html: i18n.t('managementTeam.ceo.content', { lng }) }}></div>
							</div>
						</div>
					</div>
					<div class={`pure-u-1 pure-u-lg-1-2 team-intro`}>
						<div className="right-intro">
							<div class="intro-wrapper">
								<div className="intro-name">{i18n.t('managementTeam.cto.name', { lng })}</div>
								<div className="intro-position">{i18n.t('managementTeam.cto.position', { lng })}</div>
								<div className="intro-content" dangerouslySetInnerHTML={{ __html: i18n.t('managementTeam.cto.content', { lng }) }}></div>
							</div>
						</div>
					</div>
				</div>

			</div>
		};

		const GreatTeam = (props: GreatTeamProps) => {
			return <div class="great-team">
				<div className="panel-icon"></div>
				<div className="panel-title">{i18n.t('greatTeam.title', { lng })}</div>
				<div className="intro-container">
					{
						props.introArr.map((item) => {
							return <div className="content-wrapper">
								<div className={`team-intro ${greatTeamIntroEn}`}>
									<div className="top-line"></div>
									<div className="intro-title"
										dangerouslySetInnerHTML={{ __html: item.title }}></div>
									<div className="intro-sub-title"
										dangerouslySetInnerHTML={{ __html: item.subTitle }}></div>
									<div className="intro-content"
										dangerouslySetInnerHTML={{ __html: item.content }}></div>
								</div>
							</div>

						})
					}
				</div>
			</div>
		};

		const Partners = (props: Partners) => {
			return <div className="partners">
				<div className="panel-icon"></div>
				<div className="panel-title">{i18n.t('partnersTitle', { lng })}</div>
				<div className="icon-container">
					{
						props.parentsArr.map((item) => {
							return <div className={`icon-partners ${item.className}`}>
								<a target="_blank" href={item.link} />
							</div>
						})
					}
				</div>
			</div>
		};

		const partnersArr = [
			{
				className: 'partner-1',
				link: 'http://www.wkjyqh.com/main/home/index.shtml'
			},
			{
				className: 'partner-2',
				link: 'http://www.xinhu.cn/'
			},
			{
				className: 'partner-3',
				link: 'http://www.gffcc.com/'
			},
			{
				className: 'partner-4',
				link: 'http://www.wkzq.com.cn/wkzq/web/index.aspx'
			},
			{
				className: 'partner-5',
				link: 'http://www.zszq.com/'
			}
		]

		const OurMission = (props) => {
			return <div className={`our-mission ${ourMissionEn}`}>
				<div className="panel-title">{i18n.t('ourMission.title', { lng })}</div>
				<div className="panel-sub-title">{i18n.t('ourMission.slogan', { lng })}</div>
			</div>
		};

		const whoWeAreIntro = {
			intro: i18n.t('whoWeAreIntro', { lng })
		};

		const teamIntroArr: Array<TeamIntroObj> = [
			{
				title: i18n.t('greatTeam.teamIntro.intro1.title', { lng }),
				subTitle: i18n.t('greatTeam.teamIntro.intro1.subTitle', { lng }),
				content: i18n.t('greatTeam.teamIntro.intro1.content', { lng })
			},
			{
				title: i18n.t('greatTeam.teamIntro.intro2.title', { lng }),
				subTitle: i18n.t('greatTeam.teamIntro.intro2.subTitle', { lng }),
				content: i18n.t('greatTeam.teamIntro.intro2.content', { lng })
			},
			{
				title: i18n.t('greatTeam.teamIntro.intro3.title', { lng }),
				subTitle: i18n.t('greatTeam.teamIntro.intro3.subTitle', { lng }),
				content: i18n.t('greatTeam.teamIntro.intro3.content', { lng })
			}
		];


		return <div class="view-about">
			<WhoWeAre intro={whoWeAreIntro.intro} />
			<SloganPanel
				sloganCn={i18n.t('sloganPanel1Top', { lng })}
				sloganEn={i18n.t('sloganPanel1Botton', { lng })} />
			<ManagementTeam />
			<SloganPanel
				sloganCn={i18n.t('sloganPanel2Top', { lng })}
				sloganEn={i18n.t('sloganPanel2Botton', { lng })} />
			<GreatTeam introArr={teamIntroArr} />
			<SloganPanel
				sloganCn={i18n.t('sloganPanel3Top', { lng })}
				sloganEn={i18n.t('sloganPanel3Botton', { lng })} />
			<Partners parentsArr={partnersArr} />
			<OurMission />
		</div>;
	}
};
