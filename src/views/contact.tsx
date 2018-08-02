import Component from 'inferno-component';
import i18n from '../../i18n';

interface Window {
	BMap?: any;
	BMAP_NORMAL_MAP?: any;
	BMAP_HYBRID_MAP?: any;
	BMAP_ANCHOR_TOP_RIGHT?: any;
	BMAP_NAVIGATION_CONTROL_SMALL?: any;
}

declare const window: Window;

export default class Contact extends Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {
			lng: i18n.language
		};
	}

	public baiduMap() {
		const BMap = window.BMap;

		// 创建Map实例
		const map = new BMap.Map('mapContainer');

		// 初始化地图,设置中心点坐标和地图级别
		const point = new BMap.Point(121.533756, 31.233434);
		map.centerAndZoom(point, 15);

		// 修改地图样式
		const mapStyle = {
			featureType: 'all',
			elementType: 'all',
			stylers: {
				lightness: 10,
				saturation: -100
			}
		};
		map.setMapStyle({
			styleJson: [mapStyle]
		});

		// 添加标注
		const marker = new BMap.Marker(point);
		map.addOverlay(marker);

		// 右上角，仅包含平移和缩放按钮
		const top_right_navigation = new BMap.NavigationControl({
			anchor: window.BMAP_ANCHOR_TOP_RIGHT,
			type: window.BMAP_NAVIGATION_CONTROL_SMALL
		});
		map.addControl(top_right_navigation);

		// const mapUrl = 'http://api.map.baidu.com/geocoder?address=上海市浦东新区世纪大道1198弄&output=html&src=shance';

		// 设置地图显示的城市 此项是必须设置的
		map.setCurrentCity('上海');
		// 开启鼠标滚轮缩放
		map.enableScrollWheelZoom(true);

		return map;
	}

	public componentDidMount() {
		setTimeout(() => {
			this.baiduMap();
		}, 100);
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	public componentWillMount() {
		i18n.addResourceBundle('zh-CN', 'translation', {
			contactTopBannerText: '联系我们，了解我们如何通过技术帮助您提升交易表现。',
			contactInfoLocation: '地址：中国上海市浦东新区世纪大道1198号世纪汇一座1002单元',
			contactInfoTel1: '电话：+86 21 6859 7600（人事行政部）',
			contactInfoTel2: '+86 21 6859 7706（产品市场部）',
			contactInfoEmail: '邮件：info@shancetech.com'
		});

		i18n.addResourceBundle('en-US', 'translation', {
			contactTopBannerText: `Contact us to see how we can help you to promote your trading performances.`,
			contactInfoLocation: `Address：Unit 1002 Century Link Tower 1,1198 Century Avenue Pudong, Shanghai, China`,
			contactInfoTel1: 'Phone： +86 21 6859 7600（ HR & Admin）',
			contactInfoTel2: '+86 21 6859 7706（Product Marketing）',
			contactInfoEmail: 'Email：info@shancetech.com'
		});
	}

	public onLanguageChanged(lng) {
		setTimeout(() => {
			this.baiduMap();
		}, 100);
		this.setState({ lng });
	}

	public render() {
		const lng = this.state.lng;

		const ContactTopBanner = (props) => {
			return <div className="contact-top">
				<div className="panel-title">{ i18n.t('contactTopBannerText', { lng }) }</div>
			</div>;
		};

		const MapPanel = (props) => {
			return <div className="map-panel">
				<div id="mapContainer" className="map-container"></div>
				<ContactInfo/>
			</div>;
		};

		const ContactInfo = (props) => {
			return <div className="contact-info">
				<div className="info-location">
					{ i18n.t('contactInfoLocation', { lng }) }
				</div>
				<div className="info-tel">
					<div>{ i18n.t('contactInfoTel1', { lng }) }</div>
					<div>{ i18n.t('contactInfoTel2', { lng }) }</div>
				</div>
				<div className="info-email">
					{ i18n.t('contactInfoEmail', { lng }) }
				</div>
			</div>;
		};

		return <div className="view-contact">
			<ContactTopBanner />
			<MapPanel />
		</div>;
	}
}
