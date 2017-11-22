import Component from 'inferno-component'
import { Link } from 'inferno-router';
import './header.less';

export default class Header extends Component<any, any> {

  render() {
    return (
      <div className="header">
        <div className="company-logo"></div>
        <nav>
          <a><Link activeClassName="selected" to="/">首页<div className="hover-underline"></div></Link></a>
          <a><Link activeClassName="selected" to="/product">产品<div className="hover-underline"></div></Link></a>
          <a><Link activeClassName="selected" to="/service">服务<div className="hover-underline"></div></Link></a>
          <a><Link activeClassName="selected" to="/about">关于我们<div className="hover-underline"></div></Link></a>
          <a><Link activeClassName="selected" to="/joinus">招贤纳士<div className="hover-underline"></div></Link></a>
          <a><Link activeClassName="selected" to="/contact">联系我们<div className="hover-underline"></div></Link></a>

          <span class="lang">
            <a className="lang-cn blue">中文</a>
            <a className="lang-en">/ENGLISH</a>
          </span>
          <a className="login">登录</a>
        </nav>
      </div>
    );
  }
}