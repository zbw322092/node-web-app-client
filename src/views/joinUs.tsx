import Component from 'inferno-component';
import i18n from '../../i18n';
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
			activeJobIndex: 0,
			lng: i18n.language
		};
	}

	showJobContent = (index) => {
		console.log(index);
		this.setState({
			activeJobIndex: index
		});
	}

	componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	componentWillMount() {

		i18n.addResourceBundle('zh-CN', 'translation', {
			mySkill: {
				top: '我的',
				bottom: '技能'
			},
			job: {
				job1: {
					name: '前端开发工程师',
					skills: ' JavaScript HTML5 CSS3 React Redux ',
					content: `
						工作地点：上海<br /><br />
						<span class="desc-sub-title">职位描述</span><br />
						此职位为开始学习和了解我们现有的自动化交易平台，并在此平台上开发交易系统，交易工具及图形用户界面的人士提供了一个良好的机会。我们想要寻求一位积极上进的并在信息技术领域拥有一定经验的优秀人才。<br /><br />
						<span class="desc-sub-title">岗位职责</span><br />
						· 在现有的自动化交易平台上开发交易工具，交易模块，以及图形化用户界面<br />
						· 使用现有平台作为起点，帮助客户定制交易模块，监控工具及图形化工具<br />
						· 与客户或合作伙伴进行需求讨论，分析客户技术需求，协调内部和客户之间对需求的理解一致，并能够设计和实施解决方案<br /><br />
						
						<span class="desc-sub-title">职位要求</span><br />
						· 熟练运用JavaScript 语言与HTML5、CSS3 等技术<br />
						· 了解主流的JS 库和开发框架，如React Redux 等，并深入理解其设计原理，熟悉模块化、前端编译和构建工具<br />
						· 熟悉一种或多种后端服务器语言，有开发过服务器应用经验<br />
						· 熟悉Linux 的使用与开发流程<br />
						· 熟悉Web 安全相关知识，并能使用相关技术防范安全漏洞<br />
						· 熟悉C++或Java，了解Python`
				},
				job2: {
					name: '技术支持顾问',
					skills: ' 解决问题 软件销售 客户培训 市场营销 讲演 技术沟通 ',
					content: `工作地点：上海<br /><br />
						<span class="desc-sub-title">职位描述</span><br />
						此职位将会作为与客户的主要接口，了解客户的技术需求，熟悉我们的技术平台与服务。
						主要工作职责包 括为客户做技术演示，需求讨论，文档整理，并将客户需求向香港和纽约的技术团队协调和传达，以保证 内部团队与客户之间对需求的理解一致。
						与管理团队和研发团队一起，为客户持续改进我们的平台、技术 和解决方案。<br /><br />
						
						<span class="desc-sub-title">岗位职责</span><br />
						· 技术平台/解决方案讲演，帮助客户解决问题，并满足特定客户的定制化开发需求<br />
						· 在售前机会评估阶段积极主动做好测试环境的设计搭建工作<br />
						· 与客户或合作伙伴进行需求讨论，分析客户需求;能够准确地将客户需求传达给内部团队 <br />
						· 为客户提供技术培训以帮助客户培养人才<br />
						· 通过沟通和展示平台特性、性价比优势、以及运营效率的提升来赢得客户的认可<br />
						· 参与市场营销活动，包括展会、研讨会，以专业角色参加相关专题会议<br /><br />
						
						<span class="desc-sub-title">职位要求</span><br />
						· 拥有信息技术领域学士/研究生学位或同等资质<br />
						· 具备丰富的软件销售经验和技术相关背景，有很强的沟通能力和技术洞察力<br />
						· 具备很强的技术沟通与讲演技巧，并能很专业地进行书面或口头沟通<br />
						· 拥有项目管理或顾问式销售的技巧<br />
						· 能够创造性的思考和解决问题<br />
						· 熟悉 Linux/Unix 相关系统<br />
						· 积极主动，结果导向<br /><br />
						
						<span class="desc-sub-title">素质要求</span><br />
						· 吃苦耐劳，富有创新精神，具备竞争意识<br />
						· 具备同时处理多项任务的能力<br />
						· 良好的中英文沟通技巧<br />
						· 良好的团队精神，积极参与团队讨论和分享<br />
						· 金融/期货背景者优先`
				},
				job3: {
					name: '软件工程师',
					skills: ' C/C++ Linux/Unix 中英文沟通 ',
					content: `
						工作地点：上海<br /><br />
						<span class="desc-sub-title">职位描述</span><br />
						此职位为开始学习和了解我们现有的自动化交易平台，并在此平台上开发交易系统，
						交易工具及图形用户 界面的人士提供了一个良好的机会。我们想要寻求一位积极上进的并在信息技术领域拥有一定经验的优秀人才。<br /><br />
						
						<span class="desc-sub-title">岗位职责</span><br />
						· 在现有的自动化交易平台上开发交易工具，交易模块，以及图形化用户界面<br />
						· 使用现有平台作为起点，帮助客户定制交易模块，监控工具及图形化工具<br />
						· 与客户或合作伙伴进行需求讨论，分析客户技术需求，协调内部和客户之间对需求的理解一致，并能够设计和实施解决方案<br /><br />
						 
						<span class="desc-sub-title">职位要求</span><br />
						 · 拥有计算机领域，或信息工程领域的学士/研究生学位 · 三年以上软件开发或工程师工作经验<br />
						 · 拥有 Linux/Unix 系统相关经验<br />
						 · C/C++ 编程经验<br /><br />
						 
						<span class="desc-sub-title">素质要求</span><br />
						· 动手能力强，积极主动<br />
						· 吃苦耐劳，富有创新精神，具备竞争意识<br />
						· 具备同时处理多项任务的能力<br />
						· 良好的中英文沟通技巧<br />
						· 良好的团队精神，积极参与团队讨论和分享
						`
				},
				job4: {
					name: '系统工程师',
					skills: ' Kerberos AFS LDAP DNS DHCP FTP 系统架构 服务器 局域网 交换机 路由器 交叉链接 Puppet 数据库 TCP/IP SMB NFS SMTP Apache 网络编程 DAS NAS Debian/Ubuntu/Linux OpenAFS  ',
					content: `
						工作地点：上海<br /><br />
						<span class="desc-sub-title">职位描述</span><br />
						系统工程师的岗位负责设计、搭建、管理以及扩容我们的系统架构。合格的候选人应具备以客户为本的意 识，并拥有良好的沟通技巧。<br /><br />
						
						<span class="desc-sub-title">岗位职责</span><br />
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
						
						<span class="desc-sub-title">职位要求</span><br />
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
		
						<span class="desc-sub-title">素质要求</span><br />
						· 吃苦耐劳，富有创新精神，具备竞争意识<br />
						· 良好的中英文沟通技巧<br />
						· 良好的团队精神，积极参与团队讨论和分享
						`
				},
				job5: {
					name: '运营支持工程师',
					skills: ' 产品支持 Python Ruby MySQL 客户跟进 调配资源 技术支持 ',
					content: `
						工作地点：上海<br /><br />
						<span class="desc-sub-title">职位描述</span><br />
						此职位负责公司国内交易运营过程，防范风险，及时发现问题，并与客户进行有效沟通。提供必要的
						技术支持。及时掌握市场变化并向交易员提供最新的市场信息。<br /><br />
						
						<span class="desc-sub-title">岗位职责</span><br />
						· 确保系统稳健运行;<br />
						· 帮助客户顺利享受我们的服务;<br />
						· 提高客户满意度;<br />
						· 及时了解、跟进、并反馈运营过程中的问题;<br />
						· 高效调配资源;<br />
						· 提供专业化技术支持服务;<br />
						· 迅速响应客户的意见与需求。<br />
						· 防范风险、排查潜在风险及问题，并与相关负责人沟通使问题得以解决;<br /><br />
						
						<span class="desc-sub-title">职位要求</span><br />
						· 三年以上相关工作经验，有交易员助理、技术支持工程师、系统管理员或相关技术岗位的经验，
						有能力解决较复杂的问题、处理突发事件，提供产品支持服务;<br />
						· 对金融市场有一定的了解和理解，懂技术和交易方面的术语，有不断学习的渴望;<br />
						· 熟悉 Linux 平台，会简单的 python, ruby, My SQL，并会一定程度的编程。<br /><br />
						
						<span class="desc-sub-title">素质要求</span><br />
						· 较强的沟通能力;<br />
						· 有责任心，结果导向;<br />
						· 吃苦耐劳，富有创新精神，具备竞争意识;<br />
						· 具备同时处理多项任务的能力;<br />
						· 良好的中英文沟通技巧;<br />
						· 良好的团队精神，积极参与团队讨论和分享;
						`
				}
			},
			jobContact: {
				email: `简历发送至：jobs@shancetech.com`,
				tel: `求职咨询：+86 21 6859 7600（人事部）`
			},
			workEnvironment: {
				title: '不来感受一下太可惜！',
				slogan1: {
					mainText: '员工福利',
					subText: '每周欢乐午餐 欢乐分离时刻'
				},
				slogan2: {
					mainText: '保险保障',
					subText: '关爱您如同关爱家人'
				},
				slogan3: {
					mainText: '我们赞成生活工作两不误',
					subText: '悠长假期: 世界那么大，请你去看看'
				},
				slogan4: {
					mainText: '人性化的工作制',
					subText: '扁平化管理'
				}
			}
		});

		i18n.addResourceBundle('en-US', 'translation', {
			mySkill: {
				top: 'My',
				bottom: 'Skills'
			},
			job: {
				job1: {
					name: 'Front-end Developer',
					skills: ' JavaScript HTML5 CSS3 React Redux ',
					content: `
					Location: Shanghai<br /><br />
					<span class="desc-sub-title">About the Role</span><br />
					The role offers an opportunity for someone to get started in learning and extending 
					an existing automated trading platform, and develop transaction system, GUIs and 
					tools on top of the platform. We are looking for well- rounded and driven individuals 
					with certain background in Computer Science.<br /><br />
					<span class="desc-sub-title">Key Responsibilities</span><br />
					· Develop trading tools, modules and GUI based on existing automated trading platform<br />
					· Customize trading modules for the clients, monitor tools and GUI tools under the current platform<br />
					· Participate in discussions with partners or clients to analyze the technical demands of the clients<br />
					· Design and implement solutions to projects based on shared internal understanding to requests
					from the clients<br /><br />
					
					<span class="desc-sub-title">Requirements</span><br />
					· Skilled use of JavaScript language and HTML5 CSS3 and other technologies<br />
					· Familiar with mainstream JS library and front-end development frameworks (e.g. React, Redux) 
					and development process (Build, test, and compress based on node.js)<br />
					· Familiar with at least one back-end server language and skilled use of server application<br />
					· Familiar with usage and developing process of Linux<br />
					· Knowledge of Web securities and prevent security problems with relevant technology<br />
					· Familiar with C++ or Java, know about Python
					`
				},
				job2: {
					name: 'Technical Consultant',
					skills: ' Requirement discussions Pre-sales Training Marketing events Technology presentation ',
					content: `
					Location: Shanghai<br /><br />
					<span class="desc-sub-title">About the Role</span><br />
					This role will interface with clients to understand both their technical 
					needs and our technology platform and services. The responsibility includes 
					technology presentation, requirement discussions with clients, documentation 
					and coordination of the requests to the Hong Kong and New York 
					developer/engineering teams. Define and synchronize software content within 
					internal teams and clients, and work with management and R&D team to continue 
					to improve our platforms, technologies and solutions for clients.<br /><br />
					
					<span class="desc-sub-title">Key Responsibilities</span><br />
					· Conduct platform/solution presentations, help the clients address their issues and provide customized demand.<br />
					· Take a pro-active leadership role in designing and installing in pre-sales opportunity assessment.<br />
					· Requirement discussions with clients/partners, analyze customer requirements, convey customer requirements to internal teams.<br />
					· Develops customer's staff by providing technical information and training.<br />
					· Gains customer acceptance by explaining or demonstrating platform features, cost reductions an operations improvements.<br />
					· Participate in marketing events including trade shows, seminars and conferences as subject matter expert.<br /><br />
					
					<span class="desc-sub-title">Requirements</span><br />
					· Bachelor/Master degree in technology or comparable experience<br />
					· 3-5+ years of working experience as Solution Sales or Presales or Technical Support roles<br />
					· Proven track record in software sales and knowledge of technology.<br />
					· Strong sales skills and technical credibility, combine relationship skills with technical insight<br />
					· Strong presentation skills and be able to communicate professionally in written responses to
					emails.<br />
					· Project management or consultative sales skills<br />
					· A creative thinker and problem solver<br />
					· Good knowledge of Linux/Unix-based systems<br />
					· Highly self-motivated and results-oriented<br /><br />
					
					<span class="desc-sub-title">Qualities</span><br />
					· Hard working, creative, and competitive<br />
					· Good ability to multi-task<br />
					· Good English and Chinese communication skills<br />
					· Team player, open to discussion and sharing of ideas<br />
					· Finance/ futures background is a plus.
					`
				},
				job3: {
					name: 'Software Engineer',
					skills: ' C/C++ Linux/Unix English and Chinese communication ',
					content: `
					Location: Shanghai<br /><br />
					<span class="desc-sub-title">About the Role</span><br />
					The role offers an opportunity for someone to get started in learning and extending 
					an existing automated trading platform, and develop transaction system, GUIs and 
					tools on top of the platform. We are looking for well- rounded and driven individuals 
					with certain background in Computer Science.<br /><br />
					
					<span class="desc-sub-title">Key Responsibilities</span><br />
					· Develop transaction instrument, trading logic, GUIs on top of the existing automated trading platform.<br />
					· Develop trading logic, monitoring and visualization tools using the base platform as a starting point.<br />
					· Requirement discussions with customers, analyze customer technical requirements, define and synchronize 
					software content within the company and clients, and be able to design and implement solutions.<br /><br />
					 
					<span class="desc-sub-title">Requirements</span><br />
					 · Bachelor/Master degree in Computer Science or a scientific field<br />
					 · 3+ years of working experience as software developer or engineer<br />
					 · Experience with Linux/Unix-based systems<br />
					 · C/C++ programming experience<br /><br />
					 
					<span class="desc-sub-title">Qualities</span><br />
					· Hands-on, self-motivated individual<br />
					· Hard working, creative, and competitive<br />
					· Good ability to multi-task<br />
					· Good English and Chinese communication skills<br />
					· Team player, open to discussion and sharing of ideas
					`
				},
				job4: {
					name: 'Systems Engineer',
					skills: ' Kerberos AFS LDAP DNS DHCP FTP System infrastructure Server Network Switches Routers Cross connects Puppet Database TCP/IP SMB NFS SMTP Apache Web programming DAS NAS Debian/Ubuntu/Linux OpenAFS ',
					content: `
					Location: Shanghai<br /><br />
					<span class="desc-sub-title">About the Role</span><br />
					This System Engineer will be responsible for designing, building, managing and expanding our systems infrastructure. The qualified candidate should be client-oriented and have good communication skills.<br /><br />
					
					<span class="desc-sub-title">Key Responsibilities</span><br />
					· Manage our systems infrastructure across multiple data centers, including servers, networking 
					(switches, routers, and cross connects/private lines/VPN tunnels), OS, and backend 
					services (Kerberos, AFS, LDAP, DNS, DHCP, FTP, package repositories, etc)<br />
					· Ensure availability and performance of production trading systems during market hours<br />
					· Improve stability and fault tolerance of our systems and networking infrastructure<br />
					· Work with team members to improve our systems and plan for future needs<br />
					· Work with data center providers and brokers on provisioning servers and connectivity. Work with
					brokers and exchanges on exchange access, including receiving TCP/multicast-based market data and order entry<br />
					· Enhance monitoring of our systems and network infrastructure, including writing custom checks<br />
					· Establish and improve performance metrics and system usage stats (with trends)<br />
					· Develop scripts to batch and automate systems tasks<br />
					· Manage and improve systems provisioning process (e.g., fully automated installs, Puppet for
						configurations, etc)<br />
					· Perform database administration duties, including setup and configurations, access control, data
					import and export, monitoring, replication and backups, clustering, etc<br />
					· Stay well informed and suggest use of best-in-class industry solutions and new technologies<br />
					· Understand our entire software stack, from kernel issues to application deployment<br /><br />
					
					<span class="desc-sub-title">Requirements</span><br />
					· Bachelor degree in technology or comparable experience<br />
					· 3-5+ years of working experience as System Administrator role<br />
					· Extensive experience with Linux systems<br />
					· Solid knowledge of TCP/IP and experience with Cisco or other enterprise-level network equipment
					(both layer 2 and layer 3)<br />
					· DNS, LDAP, SMB, NFS, SMTP and Apache (with experience in some web programming languages such as PHP)<br />
					· Knowledge of enterprise storage (DAS, NAS, SAN, etc)<br />
					· Good skills with Debian/Ubuntu Linux<br />
					· Good skills with Kerberos, OpenAFS, LDAP, DNS, etc<br />
					· Extensive experience using and managing 50+ node clusters<br />
					· Development experience with at least one major programming language<br />
					· A history of using and contributing to Open Source Software<br /><br />
	
					<span class="desc-sub-title">Qualities</span><br />
					· Hard working, creative, and competitive<br />
					· Good English and Chinese communication skills<br />
					· Team player, open to discussion and sharing of ideas
					`
				},
				job5: {
					name: 'Operations Engineer',
					skills: ' Production support Python Ruby MySQL Follow up Employ resources Technical support ',
					content: `
					Location: Shanghai<br /><br />
					<span class="desc-sub-title">About the Role</span><br />
					This role will take charge of our trading operational procedures, monitor risks, identify and 
					address risks or issues, and communicate with clients in a proper manner. He/she is also 
					expected to collect market changes and provide latest market information to traders.<br /><br />
					
					<span class="desc-sub-title">Key Responsibilities</span><br />
					· Ensure system runs without error;<br />
					· Ensure our service be smoothly delivered and by customers<br />
					· Improve customer satisfaction;<br />
					· Investigate and follows up operational issues in timely manner;<br />
					· Employ resources in an effective way;<br />
					· Provide technical support in a professional way;<br />
					· Response at first time to customers’ demands and suggestion;<br />
					· Monitor risks, identify potential risks or issues, and communicate with owners to get the problems
					solved;<br /><br />
					
					<span class="desc-sub-title">Requirements</span><br />
					· Around 3 years’ experience working as a trader assistant, technical support engineer, System Administrator or 
					any technical role that requires complex trouble shooting, incident management and production support;<br />
					· Reasonable understanding of financial markets, familiar with technical and trading terminology, and desire to continue to learn;<br />
					· Familiar with Linux, python, ruby, MySQL and able to write script.<br /><br />
					
					<span class="desc-sub-title">Qualities</span><br />
					· Strong communication skills;<br />
					· Highly committed and result-oriented;<br />
					· Hard working, creative, and competitive;<br />
					· Good ability to multi-task;<br />
					· Good English and Chinese communication skills;<br />
					· Team player, open to discussion and sharing of ideas;
					`
				}
			},
			jobContact: {
				email: `Send your portfolio to: jobs@shancetech.com`,
				tel: `More information: +86 21 6859 7600 (Rachel)`
			},
			workEnvironment: {
				title: 'You don\'t want to Miss it!',
				slogan1: {
					mainText: 'C&B',
					subText: 'Weekly Team Lunch Casual Happy Hour'
				},
				slogan2: {
					mainText: 'INSURANCE',
					subText: 'Taking Care of You as a Family'
				},
				slogan3: {
					mainText: 'WORK-LIFE BALANCE CULTURE',
					subText: 'Work Hard, Play Hard, Enjoy Vacation from Work'
				},
				slogan4: {
					mainText: 'HUMANIZED ADMINISTRATION',
					subText: 'Flat Management'
				}
			}
		});



		i18n.off('languageChanged', this.onLanguageChanged.bind(this))
	}

	onLanguageChanged(lng) {
		this.setState({
			lng: lng
		});
	}

	showJobDetail (index) {
		const jobDetailElement = document.getElementById('jobDetail');
		if (jobDetailElement !== null) {
			jobDetailElement.scrollIntoView({
				behavior: 'smooth',
				block: "start",
				inline: "start"
			});
		}
		this.showJobContent(index);
	}

	render() {
		let lng = this.state.lng;

		const TopScrollPanel = () => {
			let i = 1;
			let JobContainer: Array<any> = [];
			while (i < 100) {
				JobContainer.push(
					<span className="jobs-container">
						<span className="job job-1" onClick={this.showJobDetail.bind(this, 0)}>
							<span className="red-text">{ i18n.t('job.job1.name', { lng }) }</span><span className="dark-text">{ i18n.t('job.job1.skills', { lng }) }</span>
						</span>
						<span className="job job-2" onClick={this.showJobDetail.bind(this, 1)}>
							<span className="red-text">{ i18n.t('job.job2.name', { lng }) }</span><span className="dark-text">{ i18n.t('job.job2.skills', { lng }) }</span>
						</span>
						<span className="job job-3" onClick={this.showJobDetail.bind(this, 2)}>
							<span className="red-text">{ i18n.t('job.job3.name', { lng }) }</span><span className="dark-text">{ i18n.t('job.job3.skills', { lng }) }</span>
						</span>
						<span className="job job-4" onClick={this.showJobDetail.bind(this, 3)}>
							<span className="red-text">{ i18n.t('job.job4.name', { lng }) }</span><span className="dark-text">{ i18n.t('job.job4.skills', { lng }) }</span>
						</span>
						<span className="job job-5" onClick={this.showJobDetail.bind(this, 4)}>
							<span className="red-text">{ i18n.t('job.job5.name', { lng }) }</span><span className="dark-text">{ i18n.t('job.job5.skills', { lng }) }</span>
						</span>
					</span>
				);
				i++;
			}
			return <div className="top-scroll-panel">
				<div className="my-skills-shape"></div>
				<div className="my-skills-text">
					<div>{i18n.t('mySkill.top')}</div>
					<div>{i18n.t('mySkill.bottom')}</div>
				</div>

				<div class="text-scroll-wrapper">
					{JobContainer}
				</div>
			</div>
		}

		const JobDetail = (props: JobDetailProps) => {
			return <div id="jobDetail" className="job-detail">
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
							<div>{ i18n.t('jobContact.email', { lng }) }</div>
							<div>{ i18n.t('jobContact.tel', { lng }) }</div>
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
				<div className="panel-slogan">{ i18n.t('workEnvironment.title', { lng }) }</div>
				<div className="slogan-row">
					<div className="img-container img-container-1">
						<img className="slogan-unit unit-1"
							src={require(`../assets/views/joinus/img-work-env-1.png`)}></img>
						<div class="text-container">
							<div class="main-text">{ i18n.t('workEnvironment.slogan1.mainText', { lng }) }</div>
							<div class="sub-text">{ i18n.t('workEnvironment.slogan1.subText', { lng }) }</div>
						</div>
					</div>

					<div className="img-container img-container-2">
						<img className="slogan-unit unit-2"
							src={require(`../assets/views/joinus/img-work-env-2.png`)}></img>
						<div class="text-container">
							<div class="main-text">{ i18n.t('workEnvironment.slogan2.mainText', { lng }) }</div>
							<div class="sub-text">{ i18n.t('workEnvironment.slogan2.subText', { lng }) }</div>
						</div>
					</div>
				</div>
				<div className="slogan-row">
					<div className="img-container img-container-3">
						<img className="slogan-unit unit-3"
							src={require(`../assets/views/joinus/img-work-env-3.png`)}></img>
						<div class="text-container">
							<div class="main-text">{ i18n.t('workEnvironment.slogan3.mainText', { lng }) }</div>
							<div class="sub-text">{ i18n.t('workEnvironment.slogan3.subText', { lng }) }</div>
						</div>
					</div>
					<div className="img-container img-container-4">
						<img className="slogan-unit unit-4"
							src={require(`../assets/views/joinus/img-work-env-4.png`)}></img>
						<div class="text-container">
							<div class="main-text">{ i18n.t('workEnvironment.slogan4.mainText', { lng }) }</div>
							<div class="sub-text">{ i18n.t('workEnvironment.slogan4.subText', { lng }) }</div>
						</div>
					</div>
				</div>
				<div className="bottom-slogan">SHANCE · OUTSTANDING · EXTRAORDINARY</div>
			</div>
		};

		const jobDetail: Array<JobDetailObj> = [
			{
				active: true,
				jobTitle: i18n.t('job.job1.name', { lng }),
				jobContent: i18n.t('job.job1.content', { lng })
			},
			{
				active: false,
				jobTitle: i18n.t('job.job2.name', { lng }),
				jobContent: i18n.t('job.job2.content', { lng })
			},
			{
				active: false,
				jobTitle: i18n.t('job.job3.name', { lng }),
				jobContent: i18n.t('job.job3.content', { lng })
			},
			{
				active: false,
				jobTitle: i18n.t('job.job4.name', { lng }),
				jobContent: i18n.t('job.job4.content', { lng })
			},
			{
				active: false,
				jobTitle: i18n.t('job.job5.name', { lng }),
				jobContent: i18n.t('job.job5.content', { lng })
			}
		]

		return <div className="view-join-us">
			<TopScrollPanel />
			<JobDetail jobDetail={jobDetail} />
			<WorkEnvironment />
		</div>;
	}
};
