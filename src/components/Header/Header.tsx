import Component from 'inferno-component'
import { Link } from 'inferno-router';
import './header.less';

export default class Header extends Component<any, any> {
  render() {
    return (
      <div className="header">
        <nav>
          <a><Link to="/">首页</Link></a>
          <a><Link to="/product">产品</Link></a>
          <a><Link to="/service">服务</Link></a>
          <a><Link to="/about">关于我们</Link></a>
          <a><Link to="/joinus">招贤纳士</Link></a>
          <a><Link to="/contact">联系我们</Link></a>
        </nav>
      </div>
    );
  }
}