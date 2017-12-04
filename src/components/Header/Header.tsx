import Component from 'inferno-component'
import { Link } from 'inferno-router';
import './header.less';
import i18n from '../../../i18n';

export default class Header extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lng: i18n.language
    };
  }

	componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	componentWillMount() {
		i18n.addResources('zh-CN', 'translation', {
      home: '首页',
      product: '产品',
      service: '服务',
      about: '关于我们',
      joinus: '招贤纳士',
      contact: '联系我们',
      login: '登录'
		});

		i18n.addResources('en-US', 'translation', {
      home: 'Home',
      product: 'Products',
      service: 'Services',
      about: 'About Us',
      joinus: 'Career',
      contact: 'Contact',
      login: 'LOGIN'
		});

		i18n.off('languageChanged', this.onLanguageChanged.bind(this))
	}

	onLanguageChanged(lng) {
		this.setState({
			lng: lng
		});
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
      lng: 'zh-CN'
    });
    i18n.changeLanguage('zh-CN');
    localStorage.setItem('i18nextLng','zh-CN');
  }

  changeToEn = () => {
    this.setState({
      menuOpen: false,
      lng: 'en-US'
    });
    i18n.changeLanguage('en-US');
    localStorage.setItem('i18nextLng','en-US');
  }

  render() {
    let lng = this.state.lng;

    return (
      <div className="header">
        <div className="company-logo"></div>
        <nav className={this.state.menuOpen ? 'show-toggle-nav': ''}>
          <Link activeClassName="selected" onClick={this.navHandler} to="/">{i18n.t('home', { lng })}<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/product">{i18n.t('product', { lng })}<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/service">{i18n.t('service', { lng })}<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/about">{i18n.t('about', { lng })}<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/joinus">{i18n.t('joinus', { lng })}<div className="hover-underline"></div></Link>
          <Link activeClassName="selected" onClick={this.navHandler} to="/contact">{i18n.t('contact', { lng })}<div className="hover-underline"></div></Link>

          <span class="lang">
            <a className={`lang-cn ${this.state.lng === 'zh-CN' ? 'blue' : ''}`} 
            onClick={this.changeToZh}>中文</a>
            <a className={`lang-en ${this.state.lng === 'en-US' ? 'blue' : ''}`} 
            onClick={this.changeToEn}>/ENGLISH</a>
          </span>
          <a className="login" onClick={this.navHandler}>{i18n.t('login', { lng })}</a>
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