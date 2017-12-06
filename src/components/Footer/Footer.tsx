import Component from 'inferno-component'
import './footer.less';
import i18n from '../../../i18n';

declare function require(path: string);

export default class Footer extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      lng: i18n.language
    };
  }

	componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
  }
  
	onLanguageChanged(lng) {
		this.setState({
			lng: lng
		});
  }
  
	componentWillMount() {
		i18n.addResources('zh-CN', 'translation', {
      footerInfoAddress: '中国上海市浦东新区世纪大道1198号世纪汇一座1002单元',
      footerInfoEmail: 'info@shancetech.com',
      footerInfoTel1: '人事行政部：+86 21 6859 7600',
      footerInfoTel2: '产品市场部：+86 21 6859 7706',
      footerCopyRight: `Copyright © 2017 上海闪策信息科技有限公司版权所有  沪ICP备16050818号`
		});

		i18n.addResources('en-US', 'translation', {
      footerInfoAddress: `Unit 1002 Century Link Tower 1,1198 Century Avenue 
      Pudong, Shanghai, China`,
      footerInfoEmail: 'info@shancetech.com',
      footerInfoTel1: 'HR & Admin：+86 21 6859 7600',
      footerInfoTel2: 'Product Marketing：+86 21 6859 7706',
      footerCopyRight: `Copyright © 2017 Shanghai ShanCe Technologies Company Ltd. All rights reserved.`
		});

		i18n.off('languageChanged', this.onLanguageChanged.bind(this))
	}

  render() {
    let lng = this.state.lng;

    return (
      <div className="footer">
        {/* <div className="footer-top"></div> */}
        <img className="footer-top"
        src={require("../../assets/components/Footer/img-footer-top.png")}></img>
        <div className="footer-middle">
          <div className="info-row">
            <div className="info-unit left-unit">
              <div className="unit-icon"></div>
              { i18n.t('footerInfoAddress', { lng }) }
          </div>
            <div className="info-unit mid-unit">
              <div className="unit-icon"></div>
              { i18n.t('footerInfoEmail', { lng }) }
          </div>
            <div className="info-unit right-unit">
              <div className="unit-icon"></div>
              { i18n.t('footerInfoTel1', { lng }) }<br />
              { i18n.t('footerInfoTel2', { lng }) }
            </div>
          </div>

          <div className="icon-wechat-logo"></div>
          <div className="icon-QR-code"></div>
        </div>
        <div className="footer-bottom">
          <div className="text-copyright">
            <p>{ i18n.t('footerCopyRight', { lng }) }</p>
          </div>
        </div>
      </div>
    );
  }
}