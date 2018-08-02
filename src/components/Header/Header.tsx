import Component from 'inferno-component';
import { Link } from 'inferno-router';
import i18n from '../../../i18n';
import './header.less';

export default class Header extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      lng: i18n.language
    };
  }

	public componentDidMount() {
		i18n.on('languageChanged', this.onLanguageChanged.bind(this));
	}

	public componentWillMount() {
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

	public onLanguageChanged(lng) {
		this.setState({ lng });
	}

  public menuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  public navHandler = () => {
    this.setState({
      menuOpen: false
    });
  }

  public changeToZh = () => {
    this.setState({
      menuOpen: false,
      lng: 'zh-CN'
    });
    i18n.changeLanguage('zh-CN');
    localStorage.setItem('i18nextLng','zh-CN');
  }

  public changeToEn = () => {
    this.setState({
      menuOpen: false,
      lng: 'en-US'
    });
    i18n.changeLanguage('en-US');
    localStorage.setItem('i18nextLng','en-US');
  }

  public render() {
    const lng = this.state.lng;

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
            <span className="slash">/</span><a className={`lang-en ${this.state.lng === 'en-US' ? 'blue' : ''}`} 
            onClick={this.changeToEn}>ENGLISH</a>
          </span>
          <a
          className="login"
          target="_blank"
          href="http://202.101.23.226:81/xwiki/bin/login/XWiki/XWikiLogin;jsessionid=9A7F8A74DE73323DE99F02EC10200C29?srid=T3ou25o2&xredirect=%2Fxwiki%2Fbin%2Fview%2FMain%2F%3Fsrid%3DT3ou25o2"
          onClick={this.navHandler}
          >{i18n.t('login', { lng })}</a>
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