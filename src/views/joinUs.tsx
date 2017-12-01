import Component from 'inferno-component';
declare function require(path: string);

interface JobDetailProps {
	jobDetail: Array<JobDetailObj>
}

interface JobDetailObj {
	jobTitle: string;
	jobContent: string;
	active: boolean;
}

export default class JoinUs extends Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {
			activeJobIndex: 0
		};
	}

	showJobContent = (index) => {
		console.log(index);
		this.setState({
			activeJobIndex: index
		});
	}

	render() {

		const TopScrollPanel = () => {
			let i = 1;
			let JobContainer: Array<any> = [];
			while (i < 100) {
				JobContainer.push(
					<span className="jobs-container">
						<span className="job job-1 red-text">前端开发工程师 JavaScript HTML5 CSS3 React Redux </span>
						<span className="job job-2 dark-text">技术支持顾问 解决问题 软件销售 客户培训 市场营销 讲演 技术沟通 </span>
						<span className="job job-3 red-text">软件工程师 C/C++ Linux/Unix 中英文沟通 </span>
						<span className="job job-4 dark-text">系统工程师 Kerberos AFS LDAP DNS DHCP FTP 系统架构 服务器 局域网 交换机 路由器 交叉链接 Puppet 数据库 TCP/IP SMB NFS SMTP Apache 网络编程 DAS NAS Debian/Ubuntu/Linux OpenAFS  </span>
						<span className="job job-5 red-text">运营支持工程师 产品支持 Python Ruby MySQL 客户跟进 调配资源 技术支持 </span>
					</span>
				);
				i++;
			}
			return <div className="top-scroll-panel">
				<div className="my-skills-shape"></div>
				<div className="my-skills-text">
					<div>我的</div>
					<div>技能</div>
				</div>

				<div class="text-scroll-wrapper">
					{JobContainer}
				</div>
			</div>
		}

		const JobDetail = (props: JobDetailProps) => {
			return <div className="job-detail">
				<div className="content-wrapper">
					<div className="job-title-panel">
						<div class="work-here"></div>
						<div className="job-title-list">
							{
								props.jobDetail.map((item, index) => {
									const elementClassName = index === this.state.activeJobIndex ? 'dark-bg' : '';

									return <div
										className={`job-title-unit ${elementClassName}`}
										onClick={this.showJobContent.bind(this, index)}>
										<div>{item.jobTitle}</div>
									</div>

								})
							}
						</div>
						<div className="job-contact">
							<div>简历发送至：jobs@shancetech.com</div>
							<div>求职咨询：+86 21 6859 7600（人事部）</div>
						</div>
					</div>

					<div className="job-content-panel">
						{
							props.jobDetail.map((item, index) => {
								const elementClassName = index === this.state.activeJobIndex ? '' : 'content-not-display';
								return <div className={`content-wrapper ${elementClassName}`}>
									<div class="job-title">{item.jobTitle}</div>
									<div className="job-content" dangerouslySetInnerHTML={{ __html: item.jobContent }}>
									</div>
								</div>
							})
						}
					</div>
				</div>
			</div>
		};

		const WorkEnvironment = () => {
			return <div className="work-environment">
				<div className="panel-slogan">不来感受一下太可惜！</div>
				<div className="slogan-row">
					<div className="img-container img-container-1">
						<img className="slogan-unit unit-1"
							src={require(`../assets/views/joinus/img-work-env-1.png`)}></img>
						<div class="text-container">
							<div class="main-text">员工福利</div>
							<div class="sub-text">每周欢乐午餐 欢乐分离时刻</div>
						</div>
					</div>

					<div className="img-container img-container-2">
						<img className="slogan-unit unit-2"
							src={require(`../assets/views/joinus/img-work-env-2.png`)}></img>
						<div class="text-container">
							<div class="main-text">保险保障</div>
							<div class="sub-text">关爱您如同关爱家人</div>
						</div>
					</div>
				</div>
				<div className="slogan-row">
					<div className="img-container img-container-3">
						<img className="slogan-unit unit-3"
							src={require(`../assets/views/joinus/img-work-env-3.png`)}></img>
						<div class="text-container">
							<div class="main-text">我们赞成生活工作两不误</div>
							<div class="sub-text">每周欢乐午餐 欢乐分离时刻</div>
						</div>
					</div>
					<div className="img-container img-container-4">
						<img className="slogan-unit unit-4"
							src={require(`../assets/views/joinus/img-work-env-4.png`)}></img>
						<div class="text-container">
							<div class="main-text">人性化的工作制</div>
							<div class="sub-text">扁平化管理</div>
						</div>
					</div>
				</div>
				<div className="bottom-slogan">SHANCE · OUTSTANDING · EXTRAORDINARY</div>
			</div>
		};

		const jobDetail: Array<JobDetailObj> = [
			{
				active: true,
				jobTitle: '前端开发工程师',
				jobContent: `
				工作地点：上海<br /><br />
				职位描述<br />
				此职位为开始学习和了解我们现有的自动化交易平台，并在此平台上开发交易系统，交易工具及图形用户界面的人士提供了一个良好的机会。我们想要寻求一位积极上进的并在信息技术领域拥有一定经验的优秀人才。<br /><br />
				岗位职责<br />
				· 在现有的自动化交易平台上开发交易工具，交易模块，以及图形化用户界面<br />
				· 使用现有平台作为起点，帮助客户定制交易模块，监控工具及图形化工具<br />
				· 与客户或合作伙伴进行需求讨论，分析客户技术需求，协调内部和客户之间对需求的理解一致，并能够设计和实施解决方案<br /><br />
				
				职位要求<br />
				· 熟练运用JavaScript 语言与HTML5、CSS3 等技术<br />
				· 了解主流的JS 库和开发框架，如React Redux 等，并深入理解其设计原理，熟悉模块化、前
											端编译和构建工具<br />
				· 熟悉一种或多种后端服务器语言，有开发过服务器应用经验<br />
				· 熟悉Linux 的使用与开发流程<br />
				· 熟悉Web 安全相关知识，并能使用相关技术防范安全漏洞<br />
				· 熟悉C++或Java，了解Python`
			},
			{
				active: false,
				jobTitle: '技术支持顾问',
				jobContent: `
				工作地点：上海<br /><br />
				职位描述 此职位将会作为与客户的主要接口，了解客户的技术需求，熟悉我们的技术平台与服务。
					主要工作职责包 括为客户做技术演示，需求讨论，文档整理，并将客户需求向香港和纽约的技术团队协调和传达，以保证 内部团队与客户之间对需求的理解一致。
					与管理团队和研发团队一起，为客户持续改进我们的平台、技术 和解决方案。<br /><br />
				
				岗位职责<br />
				· 技术平台/解决方案讲演，帮助客户解决问题，并满足特定客户的定制化开发需求<br />
				· 在售前机会评估阶段积极主动做好测试环境的设计搭建工作<br />
				· 与客户或合作伙伴进行需求讨论，分析客户需求;能够准确地将客户需求传达给内部团队 <br />
				· 为客户提供技术培训以帮助客户培养人才<br />
				· 通过沟通和展示平台特性、性价比优势、以及运营效率的提升来赢得客户的认可<br />
				· 参与市场营销活动，包括展会、研讨会，以专业角色参加相关专题会议<br /><br />
				
				职位要求<br />
				· 拥有信息技术领域学士/研究生学位或同等资质<br />
				· 具备丰富的软件销售经验和技术相关背景，有很强的沟通能力和技术洞察力<br />
				· 具备很强的技术沟通与讲演技巧，并能很专业地进行书面或口头沟通<br />
				· 拥有项目管理或顾问式销售的技巧<br />
				· 能够创造性的思考和解决问题<br />
				· 熟悉 Linux/Unix 相关系统<br />
				· 积极主动，结果导向<br /><br />
				
				素质要求<br />
				· 吃苦耐劳，富有创新精神，具备竞争意识<br />
				· 具备同时处理多项任务的能力<br />
				· 良好的中英文沟通技巧<br />
				· 良好的团队精神，积极参与团队讨论和分享<br />
				· 金融/期货背景者优先`
			},
			{
				active: false,
				jobTitle: '软件工程师',
				jobContent: `
				工作地点：上海<br /><br />
				职位描述<br />
					此职位为开始学习和了解我们现有的自动化交易平台，并在此平台上开发交易系统，
					交易工具及图形用户 界面的人士提供了一个良好的机会。我们想要寻求一位积极上进的并在信息技术领域拥有一定经验的优秀人才。<br /><br />
				
				岗位职责<br />
				· 在现有的自动化交易平台上开发交易工具，交易模块，以及图形化用户界面<br />
				· 使用现有平台作为起点，帮助客户定制交易模块，监控工具及图形化工具<br />
				· 与客户或合作伙伴进行需求讨论，分析客户技术需求，协调内部和客户之间对需求的理解一致，并能够设计和实施解决方案<br /><br />
				 
				职位要求<br />
				 · 拥有计算机领域，或信息工程领域的学士/研究生学位 · 三年以上软件开发或工程师工作经验<br />
				 · 拥有 Linux/Unix 系统相关经验<br />
				 · C/C++ 编程经验<br /><br />
				 
				素质要求<br />
				· 动手能力强，积极主动<br />
				· 吃苦耐劳，富有创新精神，具备竞争意识<br />
				· 具备同时处理多项任务的能力<br />
				· 良好的中英文沟通技巧<br />
				· 良好的团队精神，积极参与团队讨论和分享
				`
			},
			{
				active: false,
				jobTitle: '系统工程师',
				jobContent: `
				工作地点：上海<br /><br />
				职位描述<br />
					系统工程师的岗位负责设计、搭建、管理以及扩容我们的系统架构。合格的候选人应具备以客户为本的意 识，并拥有良好的沟通技巧。<br /><br />
				
				岗位职责<br />
				· 负责多个数据中心交互的系统架构，包括服务器、局域网(交换机、路由器和交叉链接/专线/VPN 通道)，操作系统和后端服务
				(比如 Kerberos，AFS，LDAP，DNS，DHCP，FTP，软件包库等);<br />
				· 确保交易系统在交易时段内稳健运行;<br />
				· 提升系统和局域网架构的稳定性和系统容错性;<br />
				· 与团队一起合作，提升系统性能以及为未来的需求制定计划;<br />
				· 与数据中心供应商和期货公司针对配置服务器和链接一起合作。与期货公司和交易所针对交换访问一共合作，包括接受 TCP/多点传送行情数据和订单输入;<br />
				· 提升系统和局域网架构监控性能，包括编写自定义检查;<br />
				· 建立和完善性能标准和系统使用统计(含趋势);<br />
				· 开发脚本使系统任务批量和自动完成;<br />
				· 负责和提升系统配置过程(比如:全自动安装，Puppet 配置等)<br />
				· 负责数据库管理，包括建立和配置，访问控制，数据进出监控、复制、备份、分组等;<br />
				· 时刻关注行业最佳解决方案和新技术，并能提出建议;<br />
				· 理解我们的软件栈整体(从内核源码到应用配置)。<br /><br />
				
				职位要求<br />
				· 拥有信息技术领域学士学位或同等资质<br />
				· 3-5 年以上系统管理员的工作经验<br />
				· 具备 Linux 系统的丰富经验<br />
				· 扎实的 TCP/IP 相关知识，有对思科或其他企业级网络设备(第二层和第三层)的经验<br />
				· 熟悉 DNS, LDAP, SMB, NFS, SMTP 和 Apache (具备一定的网络编程经验比如 PHP)<br />
				· 了解企业级存储知识(比如 DAS, NAS 等)<br />
				· 良好的 Debian/Ubuntu Linux 经验<br />
				· 良好的 Kerberos，OpenAFS， LDAP，DNS 配置经验<br />
				· 具备运用和管理 50 个以上节点集的丰富经验<br />
				· 具备至少一种主编程语言的开发经验<br />
				· 有使用和开发开放源代码软件的经历<br /><br />

				素质要求<br />
				· 吃苦耐劳，富有创新精神，具备竞争意识<br />
				· 良好的中英文沟通技巧<br />
				· 良好的团队精神，积极参与团队讨论和分享
				`
			},
			{
				active: false,
				jobTitle: '运营支持工程师',
				jobContent: `
				工作地点：上海<br /><br />
				职位描述<br />
					此职位负责公司国内交易运营过程，防范风险，及时发现问题，并与客户进行有效沟通。提供必要的
					技术支持。及时掌握市场变化并向交易员提供最新的市场信息。<br /><br />
				
				岗位职责<br />
				· 确保系统稳健运行;<br />
				· 帮助客户顺利享受我们的服务;<br />
				· 提高客户满意度;<br />
				· 及时了解、跟进、并反馈运营过程中的问题;<br />
				· 高效调配资源;<br />
				· 提供专业化技术支持服务;<br />
				· 迅速响应客户的意见与需求。<br />
				· 防范风险、排查潜在风险及问题，并与相关负责人沟通使问题得以解决;<br /><br />
				
				职位要求<br />
				· 三年以上相关工作经验，有交易员助理、技术支持工程师、系统管理员或相关技术岗位的经验，
				有能力解决较复杂的问题、处理突发事件，提供产品支持服务;<br />
				· 对金融市场有一定的了解和理解，懂技术和交易方面的术语，有不断学习的渴望;<br />
				· 熟悉 Linux 平台，会简单的 python, ruby, My SQL，并会一定程度的编程。<br /><br />
				
				素质要求<br />
				· 较强的沟通能力;<br />
				· 有责任心，结果导向;<br />
				· 吃苦耐劳，富有创新精神，具备竞争意识;<br />
				· 具备同时处理多项任务的能力;<br />
				· 良好的中英文沟通技巧;<br />
				· 良好的团队精神，积极参与团队讨论和分享;
				`
			}
		]

		return <div className="view-join-us">
			<TopScrollPanel />
			<JobDetail jobDetail={jobDetail} />
			<WorkEnvironment />
		</div>;
	}
};
