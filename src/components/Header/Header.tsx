import Component from 'inferno-component'
import { Link } from 'inferno-router';
import './header.less';
import i18n from '../../../i18n';

export default class Header extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      langSelected: 'zh-CN'
    };
  }

  menuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  navHandler = () => {
    this.setState({
      menuOpen: false
    });
  }

  changeToZh = () => {
    this.setState({
      menuOpen: false,
      langSelected: 'zh-CN'
    });
    i18n.changeLanguage('zh-CN');
  }

  changeToEn = () => {
    this.setState({
      menuOpen: false,
      langSelected: 'en-US'
    });
    i18n.changeLanguage('en-US');
  }

  render() {
    return (
      <div className="header">
        <div className="company-logo"></div>
        <nav className={this.state.menuOpen ? 'show-toggle-nav': ''}>
          <Link activeClassName="selected" onClick={this.navHandler} to="/">首页<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/product">产品<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/service">服务<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/about">关于我们<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/joinus">招贤纳士<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/contact">联系我们<div className="hover-underline"></div></Link>

          <span class="lang">
            <a className={`lang-cn ${this.state.langSelected === 'zh-CN' ? 'blue' : ''}`} 
            onClick={this.changeToZh}>中文</a>
            <a className={`lang-en ${this.state.langSelected === 'en-US' ? 'blue' : ''}`} 
            onClick={this.changeToEn}>/ENGLISH</a>
          </span>
          <a className="login" onClick={this.navHandler}>登录</a>
        </nav>

        <a href="#" className={this.state.menuOpen ? `custom-menu-toggle x` : `custom-menu-toggle`} 
          id="toggle" onClick={this.menuToggle}>
          <s class="bar"></s>
          <s class="bar"></s>
        </a>
      </div>
    );
  }
}