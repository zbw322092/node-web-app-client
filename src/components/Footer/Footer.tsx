import Component from 'inferno-component'
import './footer.less';

export default class Footer extends Component<any, any> {
  render() {
    return (
      <div className="footer">
        <div className="info-row">
          <div className="info-unit left-unit">
            <div className="unit-icon"></div>
            中国上海市浦东新区世纪大道1198号世纪汇一座1002单元
          </div>
          <div className="info-unit mid-unit">
            <div className="unit-icon"></div>
            info@shancetech.com
          </div>
          <div className="info-unit right-unit">
            <div className="unit-icon"></div>
            人事行政部：+86 21 6859 7600<br />
            产品市场部：+86 21 6859 7706
            </div>
        </div>

        <div className="icon-wechat-logo"></div>
        <div className="icon-QR-code"></div>

        <div className="text-copyright">Copyright © 2017 上海闪策信息科技有限公司版权所有  沪ICP备16050818号</div>
      </div>
    );
  }
}