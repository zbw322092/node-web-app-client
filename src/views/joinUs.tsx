import Component from 'inferno-component';

export default class JoinUs extends Component<any, any> {

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

		const JobDetail = () => {
			return <div className="job-detail">
				<div className="content-wrapper">
					<div className="job-title-panel"></div>
					<div className="job-content-panel"></div>
				</div>
			</div>
		};

		return <div className="view-join-us">
			<TopScrollPanel />
			<JobDetail />
		</div>;
	}
};
