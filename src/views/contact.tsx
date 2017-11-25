import Component from 'inferno-component';

interface Window {
	BMap?: any;
	BMAP_NORMAL_MAP?: any;
	BMAP_HYBRID_MAP?: any;
}

declare const window: Window;

export default class Contact extends Component<any, any> {

	baiduMap() { 
		const BMap = window.BMap;
		// 百度地图API功能
		const map = new BMap.Map("mapContainer");    // 创建Map实例
		const point = new BMap.Point(121.533756,31.233434)
		map.centerAndZoom(point, 15);  // 初始化地图,设置中心点坐标和地图级别
		
		const marker = new BMap.Marker(point); // 添加标注
		map.addOverlay(marker);

		const label = new BMap.Label("闪策",{offset:new BMap.Size(20,-10)}); // 文字标注
		marker.setLabel(label);

		// const mapUrl = 'http://api.map.baidu.com/geocoder?address=上海市浦东新区世纪大道1198弄&output=html&src=shance';


		// //添加地图类型控件
		map.addControl(new BMap.MapTypeControl({
			mapTypes: [
				window.BMAP_NORMAL_MAP,
				window.BMAP_HYBRID_MAP
			]
		}));
		map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	}

	componentDidMount () {
		this.baiduMap();
	}

	render() {

		const ContactTopBanner = (props) => {
			return <div className="contact-top">
				<div className="panel-title">联系我们，了解我们如何通过技术帮助您提升交易表现。</div>
			</div>
		};

		const MapPanel = (props) => {
			return <div className="map-panel">
				<div id="mapContainer" className="map-container"></div>
			</div>
		};


		return <div className="view-contact">
			<ContactTopBanner />
			<MapPanel />
		</div>;
	}
};
