import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/slick.css';
import './css/style.css';

import play_button from './images/play_btn.png';
import logo from './images/logo.png';
import footer_logo from "./images/footer-logo.png";
import play_store from "./images/PlayStore.btn.png";
import app_store from "./images/App-Store.btn.png";
import s_off from "./images/s_off.jpg";
import video_image from "./images/video_img.jpg";
import unlimited_device from "./images/unlimited_device.png";
import map from "./images/map.svg";
import kadir from "./images/kadir_oypan.png";
import emirhan from "./images/emirhan.png";
import khalid from "./images/jahanzaib_khalid.png";
import telegram from "./images/telegram.btn.png";
import digital_right from "./images/digital-right_bg.png"
import digital_slide from "./images/digital-slide.png"

class App extends Component {
  render() {
    return (
      <div classNameName="home">
        <header className="main_header">
      <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-xs-5">
                <div className="site_logo">
                  <a href="#index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
            </div>

            <div className="col-sm-4 col-xs-2 text-center">
                  <div className="menu_toggle">
                    <div className="hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
            </div>

            <div className="col-sm-4 pull-right  col-xs-5">
              <div className="header_right text-right">
                <div className="login_buttons">
                <a className="one_pager_btn" href="#">One Pager</a>
                <a className="loginBtn" data-toggle="modal" data-target="#login_popup">Login</a>
                <a className="registerBtn" data-toggle="modal" data-target="#register_popup">Register</a>
                </div>
              </div>
            </div>
          </div>
      </div> 
      
      <div className="menu_wrap">
        <div className="container-fluid">
          <div className="menu_logo text-center">
              <div className="close_menu is-active">
                <div className="hamburger">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
              <a href="#index.html">
                <img src={logo} alt="" />
              </a>
          </div>
          <div className="main_menu">
            <ul>
              <li className="visible-xs light_blue"><a href="#">One Pager</a></li>
              <li className="active"><a href="#mainBanner">Home</a></li>
              <li><a href="#">Digital Asset Vault</a></li>
              <li><a href="#securitySec">Security</a></li>
              <li><a href="#videoSec">Watch Video</a></li>
              <li><a href="#whyWifiSec">WhyFreeMyWiFi</a></li>
              <li><a href="#freemiumSec">Freemium</a></li>
              <li><a href="#footprintSec">Current Spots</a></li>
              <li><a href="#roadMapTeamSec">Road Map</a></li>
              <li><a href="#CoreTeamSec">Team</a></li>
              <li><a href="#overviewSec">Overview</a></li>
              <li><a href="#faqSec">FAQ</a></li>
              <li><a href="#contactusSec">Contact</a></li>
            </ul>
          </div>
          
          <div id="mainFooter" className="main_footer">
              <div className="row">
                <div className="col-sm-8">
                  <div className="footer_left">
                    <a className="footer_logo" href="#"><img src={footer_logo} /></a>
                    <div className="email_menu">
                      <a href="#">Send us E-Mail</a>
                      <a href="#">Join us on Messenger</a>
                      <a href="#">Join us on Telegram</a>
                    </div>
                    <div className="footer_menu">
                      <a href="#">Term &amp; Conditions</a>
                      <a href="#">Privacy</a>
                    </div>
                    <div className="registeredAtNumber">FreeMyWifi BV registered at the Dutch Chamber of Commerce with No. 71149023</div>
                  </div>
                </div>
                <div className="col-sm-4">
                   <div className="footer_right">
                      <h3>Follow Us</h3>
                     <ul className="social_list">
                       <li><a href="#">Facebook</a></li>
                       <li><a href="#">Linkedin</a></li>
                       <li><a href="#">Twitter</a></li>
                       <li><a href="#">Reddit</a></li>
                       <li><a href="#">Instagram</a></li>
                       <li><a href="#">Medium</a></li>
                       <li><a href="#">Youtube</a></li>
                       <li><a href="#">Github</a></li>
                     </ul>
                     <div className="copyright">Copyright @ 2018.All Right Reserved.</div>
                   </div>
                </div>
              </div>
          </div> 
        </div>
      </div>  

    </header>

    
    <section id="mainBanner" className="main_banner_sec">
        <div className="container-fluid">
            <div className="main_banner_contnet">
              <h1>FreeMyWiFi <br /> Stay Connected and <br />Secure On The Go</h1>
              <p>Introducing free my WiFi, a cloud solution that automatically connects you to the best hotspot for your needs thereby insuring security and providing unlimited free Wi-Fi on unlimited devices.</p>
              <p>Our platform will continously improve its knowledge of global Wi-Fi networks, allowing us to select the most optimal Wi-Fi networks in real time</p>
              <div className="main_banner_actions">
                <a href="#"><img src={play_store} /></a>
                <a href="#"><img src={app_store} /></a>
              </div>
            </div>
            <div className="text-center scroll_down">
              <a href="#DigitalAssetSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>


<div className="modal fade custom_popup login_popup_wrap" id="login_popup" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header text-center">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
          <form>
              <h3 className="modal-title">Welcome to FreeMyWifi</h3>
              <p>Login</p>
              <div className="form-group">
                  <input className="form-control" type="email" name="email" value="" placeholder="E-Mail" />
              </div>
              <div className="form-group">
                  <input className="form-control" type="password" name="password" value="" placeholder="Password" />
              </div>
              <p className="text-center"><a href="#">Did you forget your password?</a></p>
              <button type="submit" className="btn">Login</button>
              <div className="login_botton">
                  <p>Don't you have an account?</p>
                  <a href="#" className="btn">Create Account</a>
              </div>
           </form>
      </div>
    </div>
  </div>
</div>


<div className="modal fade custom_popup login_popup_wrap" id="register_popup" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header text-center">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
        <form>
              <h3 className="modal-title text-center">Welcome to FreeMyWifi</h3>
              <p>Please Create Account to continue</p>
              <div className="row">
                  <div className="col-sm-6">
                     <div className="form-group">
                       <input className="form-control" type="text" name="name" value="" placeholder="Name"/>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="form-group">
                       <input className="form-control" type="text" name="sur name" value="" placeholder="Surname"/>
                     </div>
                  </div>
              </div>
              <div className="form-group">
                  <input className="form-control" type="email" name="email" value="" placeholder="E-Mail"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="password" name="password" value="" placeholder="Password"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="password" name="repeat password" value="" placeholder="Repeat Password"/>
              </div>
               <button type="submit" className="btn">Create Account</button>
               <p>By clicking "Create Account", you agree to our <a href="#">Term &amp; Conditions</a> and <a href="#">Privacy Policy.</a></p>
           </form>
      </div>
    </div>
  </div>
</div>


<div className="main_bg">

    
    <section id="DigitalAssetSec" className="digital_asset_sec">
        <div className="container-fluid">
            <h2 className="sec-heading">Digital Asset Vault</h2>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <div className="digital_content">
                    <p>FreeMyWifi provides a free, Secure and Private Valut.Manage your Digital assets in an easy user-friendly way, keep your data private powered by Organism Multiplex.</p>
                  </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-8">
                     <div className="digital_right text-center">
                        <div className="digital_right_img">
                              <img className="digital_img" src={digital_right} alt="digital" />
                              <div className="iphone_slider">
                                  <div className="ipone_slide">
                                     <img src={digital_slide} alt="slide" />
                                  </div>
                                  <div className="ipone_slide">
                                     <img src={digital_slide} alt="slide" />
                                  </div>
                                  <div className="ipone_slide">
                                     <img src={digital_slide} alt="slide" />
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center scroll_down">
              <a href="#securitySec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>


    
    <section id="securitySec" className="security_sec">
        <div className="container-fluid">
            <h2 className="sec-heading">Security</h2>
            <div className="row">
                <div className="col-sm-5">
                  <div className="security_content">
                    <p>Recognizing the importance of security and privacy for its customers, FreeMyWiFi is enhancing the security of its offering through VPN tunneling all connections. Data is never recorded and is always encrypted, protecting customers from the infamous “man in the middle” attacks, and unwittingly exposing their online data to malicious activity.</p>
                  </div>
                </div>
                <div className="col-sm-7">
                     <div className="security_right">
                        <div className="security_right_img">
                          <div className="security_right_img_inner"> 
                              <img className="security_img" src={s_off} alt="security" />
                          </div>
                        </div>
                        <div className="security_button">
                          <label className="switch">
                            <input className="on_off_btn" type="checkbox"/>
                            <span className="switch_btn"><span className="off_label">Off</span><span className="on_label">On</span></span>
                          </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center scroll_down">
              <a href="#videoSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>


    
    <section id="videoSec" className="video_sec">
        <div className="container-fluid">
            <h2 className="sec-heading">Watch Video</h2>
            <a data-toggle="modal" data-target="#video_popup">
              <div className="video_wrap">
                <img src={video_image} alt="video" />
                <div className="video_icon"><img src={play_store} alt="play" /></div>
              </div>
            </a>
            <div className="text-center scroll_down">
              <a href="#whyWifiSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>

        <div className="modal fade custom_popup video_popup" id="video_popup" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>
              </div>
            </div>
          </div>


    </section>

    
    <section id="whyWifiSec" className="why_wifi_sec">
        <h2 className="sec-heading">Why FreeMyWiFi</h2>
        <div className="container-fluid">
            <div className="why_wifi_slider">  
              <div className="w_slide">
                  <div className="w_w_left">
                      <div className="why_thumb">
                        <img src={unlimited_device} alt="video" />
                      </div>
                  </div>
                  <div className="why_right_content">
                    <h3>Unlimited Free Wi-Fi <br />on any Number of Devices</h3>
                    <p>Limitations is a thing of the past. Our job does not have them, and your Wi-Fi use should not either. With unlimited data on all your mobile devices, FreeMyWiFi makes sure that is the case.</p>
                  </div>  
              </div>
              <div className="w_slide">
                  <div className="w_w_left">
                      <div className="why_thumb">
                        <img src={unlimited_device} alt="video" />
                      </div>
                  </div>
                  <div className="why_right_content">
                    <h3>Unlimited Free Wi-Fi <br />on any Number of Devices</h3>
                    <p>Limitations is a thing of the past. Our job does not have them, and your Wi-Fi use should not either. With unlimited data on all your mobile devices, FreeMyWiFi makes sure that is the case.</p>
                  </div>  
              </div>
              <div className="w_slide">
                  <div className="w_w_left">
                      <div className="why_thumb">
                        <img src={unlimited_device} alt="video" />
                      </div>
                  </div>
                  <div className="why_right_content">
                    <h3>Unlimited Free Wi-Fi <br />on any Number of Devices</h3>
                    <p>Limitations is a thing of the past. Our job does not have them, and your Wi-Fi use should not either. With unlimited data on all your mobile devices, FreeMyWiFi makes sure that is the case.</p>
                  </div>  
              </div>
            </div>
        </div>
        <div className="text-center scroll_down">
              <a href="#freemiumSec"><i className="fa fa-angle-down"></i></a>
        </div>
    </section>

    
    <section id="freemiumSec" className="freemium_sec">
        <div className="container-fluid">
            <h2 className="sec-heading">Freemium</h2>
            <div className="freemium_contnet">
              <h3>Freemium</h3>
              <ul>
                <li>60+ million hotspots</li>
                <li>Android &amp; IOS</li>
                <li>Unlimited free Wi-Fi</li>
                <li>Extra added VPN</li>
                <li>Wi-Fi Map</li>
              </ul>
            </div>
            <div className="text-center scroll_down">
              <a href="#footprintSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>

    
    <section id="footprintSec" className="footprint_sec">
        <div className="container-fluid">
            <h2 className="sec-heading">Footprint of our current Wi-Fi hotspots worldwide</h2>
            <div className="footprint_contnet">
              <div className="map_wrap text-center">
                <img src={map} alt="map" />
              </div>
            </div>
            <div className="text-center scroll_down">
              <a href="#roadMapTeamSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>


    
    <section id="roadMapTeamSec" className="road_map_sec">
        <h2 className="sec-heading">Road Map</h2>
        <div className="container-fluid">

        <div id="first-tab-group" className="tabgroup">
            <div id="tab1">
                <div className="q_list">
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q2 2018</h3>
                      <ul>
                        <li>Registration FreeMyWifi dutch chamber house</li>
                        <li>white papaer</li>
                        <li>product design</li>
                        <li>Welcoming new team memebers</li>
                        <li>Developing Marketing campaigns</li>
                      </ul>
                    </div>
                  </div>
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q3 2018</h3>
                      <ul>
                        <li>Welcoming new Team Members and Advisors</li>
                        <li>Secure Strategic Partnerships</li>
                        <li>Mass Marketing Campaigns</li>
                        <li>Product Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q4 2018</h3>
                      <ul>
                        <li>Private Sale</li>
                        <li>IOS Beta Users</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>

            <div id="tab2">
                <div className="q_list">
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q1 2018</h3>
                      <ul>
                        <li>Registration FreeMyWifi dutch chamber house</li>
                        <li>white papaer</li>
                        <li>product design</li>
                      </ul>
                    </div>
                  </div>
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q2 2018</h3>
                      <ul>
                        <li>Welcoming new Team Members and Advisors</li>
                        <li>Secure Strategic Partnerships</li>
                        <li>Mass Marketing Campaigns</li>
                        <li>Product Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q3 2018</h3>
                      <ul>
                        <li>Private Sale</li>
                        <li>IOS Beta Users</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>

            <div id="tab3">
                <div className="q_list">
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q3 2018</h3>
                      <ul>
                        <li>Registration FreeMyWifi dutch chamber house</li>
                        <li>product design</li>
                        <li>Welcoming new team memebers</li>
                        <li>Developing Marketing campaigns</li>
                      </ul>
                    </div>
                  </div>
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q2 2018</h3>
                      <ul>
                        <li>Welcoming new Team Members and Advisors</li>
                        <li>Product Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="q_box">
                    <div className="q_box_inner">
                      <h3>Q1 2018</h3>
                      <ul>
                        <li>Private Sale</li>
                        <li>IOS Beta Users</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>


        <ul className="tabs clearfix" data-tabgroup="first-tab-group">
          <li><a href="#tab1" className="active">2018</a></li>
          <li><a href="#tab2">2019</a></li>
          <li><a href="#tab3">2020</a></li>
        </ul>
            <div className="text-center scroll_down">
              <a href="#CoreTeamSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>


    
    <section id="CoreTeamSec" className="core_team_sec text-center">
        <h2 className="sec-heading">Core Team</h2>
        <div className="container-fluid">
            <div className="team_slider">  
              <div className="team_slide">
                  <div className="t_m_thumb">
                    <img src={kadir} alt="team member" />
                  </div>
                  <div className="t_m_content">
                    <h3>Kadir Oypan</h3>
                    <p>Co-Founder</p>
                  </div>  
              </div>
              <div className="team_slide">
                  <div className="t_m_thumb">
                    <img src={emirhan} alt="team member" />
                  </div>
                  <div className="t_m_content">
                    <h3>Emirhan</h3>
                    <p>Co-Founder</p>
                  </div>  
              </div>
              <div className="team_slide">
                  <div className="t_m_thumb">
                    <img src={khalid} alt="team member" />
                  </div>
                  <div className="t_m_content">
                    <h3>Efe Alatan</h3>
                    <p>Co-Founder</p>
                  </div>  
              </div>
              <div className="team_slide">
                  <div className="t_m_thumb">
                    <img src={emirhan} alt="team member" />
                  </div>
                  <div className="t_m_content">
                    <h3>Emirhan</h3>
                    <p>Co-Founder</p>
                  </div>  
              </div>
            </div>
            <div className="text-center scroll_down">
              <a href="#overviewSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>

    
    <section id="overviewSec" className="overview_sec">
        <div className="container-fluid">
            <h2 className="sec-heading">Overview</h2>
            <div className="overview_content">
               <p>Recognizing the importance of security and privacy for its customers, FreeMyWiFi is enhancing the security of its offering through VPN tunneling all connections. Data is never recorded and is always encrypted, protecting customers from the infamous “man in the middle” attacks, and unwittingly exposing their online data to malicious activity.</p>
                <p>Recognizing the importance of security and privacy for its customers, FreeMyWiFi is enhancing the security of its offering through VPN tunneling all connections. Data is never recorded and is always encrypted, protecting customers from the infamous “man in the middle” attacks, and unwittingly exposing their online data to malicious activity.</p>
                 <p>Recognizing the importance of security and privacy for its customers, FreeMyWiFi is enhancing the security of its offering through VPN tunneling all connections. Data is never recorded and is always encrypted, protecting customers from the infamous “man in the middle” attacks, and unwittingly exposing their online data to malicious activity.</p>
                  <p>Recognizing the importance of security and privacy for its customers, FreeMyWiFi is enhancing the security of its offering through VPN tunneling all connections. Data is never recorded and is always encrypted, protecting customers from the infamous “man in the middle” attacks, and unwittingly exposing their online data to malicious activity.</p>
            </div>
            <div className="text-center scroll_down">
              <a href="#faqSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>


    
    <section id="faqSec" className="faq_sec">
        <h2 className="sec-heading">FAQ</h2>

        <div className="container-fluid">
          <div className="faq_slider">
                <div className="faq_slide">
                  <div className="panel-group faq_collapse" id="accordion1">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq1" data-parent="#accordion1" data-toggle="collapse">What is FreeMyWifi?</a>
                      </div>
                      <div id="faq1" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq2" data-parent="#accordion1" data-toggle="collapse" className="collapsed">Which solution do you offer to the current market?</a>
                      </div>
                      <div id="faq2" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq3" data-parent="#accordion1" data-toggle="collapse" className="collapsed">What is the mission of FreeMyWiFi?</a>
                      </div>
                      <div id="faq3" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq4" data-parent="#accordion1" data-toggle="collapse" className="collapsed">What is the mission of FreeMyWiFi?</a>
                      </div>
                      <div id="faq4" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="faq_slide">
                  <div className="panel-group faq_collapse" id="accordion2">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq5" data-parent="#accordion2" data-toggle="collapse">What is FreeMyWifi?</a>
                      </div>
                      <div id="faq5" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq6" data-parent="#accordion2" data-toggle="collapse" className="collapsed">Which solution do you offer to the current market?</a>
                      </div>
                      <div id="faq6" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq7" data-parent="#accordion2" data-toggle="collapse" className="collapsed">What is the mission of FreeMyWiFi?</a>
                      </div>
                      <div id="faq7" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq8" data-parent="#accordion2" data-toggle="collapse" className="collapsed">What is the mission of FreeMyWiFi?</a>
                      </div>
                      <div id="faq8" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="faq_slide">
                  <div className="panel-group faq_collapse" id="accordion3">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq9" data-parent="#accordion3" data-toggle="collapse">What is FreeMyWifi?</a>
                      </div>
                      <div id="faq9" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq10" data-parent="#accordion3" data-toggle="collapse" className="collapsed">Which solution do you offer to the current market?</a>
                      </div>
                      <div id="faq10" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq11" data-parent="#accordion3" data-toggle="collapse" className="collapsed">What is the mission of FreeMyWiFi?</a>
                      </div>
                      <div id="faq11" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                          <a href="#faq12" data-parent="#accordion3" data-toggle="collapse" className="collapsed">What is the mission of FreeMyWiFi?</a>
                      </div>
                      <div id="faq12" className="panel-collapse collapse">
                        <div className="panel-body">
                          <p>FreeMyWifi offers an intelligent, self-learning Wi-Fi service plateform that automatically connects you to the best hotspot for your needs. thereby ensuring security and providing unlimited free Wi-Fi roaming experience on unlimited devices with over 60+ million locations worldwide available today.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>


            <div className="text-center scroll_down">
              <a href="#contactusSec"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>





     
    <section id="contactusSec" className="contactus_sec">
        <div className="container">
            <h2 className="sec-heading">Contact Us</h2>
            <div className="contactus_form">
               <form>
                 <div className="row">
                   <div className="col-sm-5">
                     <div className="form-group">
                       <input className="form-control" type="text" name="name" value="" placeholder="Name"/>
                     </div>
                     <div className="form-group">
                       <input className="form-control" type="email" name="email" value="" placeholder="Email Address"/>
                     </div>
                     <div className="form-group">
                       <input className="form-control" type="text" name="subject" value="" placeholder="Subject"/>
                     </div>
                   </div>
                   <div className="col-sm-7">
                       <div className="msg_div">
                         <div className="form-group">
                           <textarea placeholder="Message" className="form-control"></textarea>
                         </div>
                         <div className="character_limit">200 Characters left</div>
                         <button type="submit" className="send_btn">Send</button>
                        </div>
                   </div>
                 </div>
               </form>
            </div>
            <div className="newsletter_wrap">
              <h2 className="sec-heading">Newsletter</h2>
              <div className="newsletter_inner">
                <form>
                 <div className="row">
                   <div className="col-sm-6">
                     <h6>Subscribe to get all the latest news and resources</h6>
                   </div>
                   <div className="col-sm-6">
                      <div className="form-group">
                       <input className="form-control" type="email" name="email" value="" placeholder="E-Mail"/>
                     </div>
                   </div>
                 </div>
                 <button type="submit" className="send_btn">Submit</button>
                </form>
              </div>
            </div>
            <div className="text-center scroll_down">
              <a href="#mainFooter"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
    </section>

</div>


  
  <footer id="mainFooter" className="main_footer">
     <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <div className="footer_left">
            <a className="footer_logo" href="#"><img src={footer_logo} /></a>
            <div className="email_menu">
              <a href="#">Send us E-Mail</a>
              <a href="#">Join us on Messenger</a>
              <a href="#">Join us on Telegram</a>
            </div>
            <div className="footer_menu hidden-xs">
              <a href="#">Term &amp; Conditions</a>
              <a href="#">Privacy</a>
            </div>
            <div className="registeredAtNumber hidden-xs">FreeMyWifi BV registered at the Dutch Chamber of Commerce with No. 71149023</div>
          </div>
        </div>
        <div className="col-sm-4">
           <div className="footer_right">
              <h3>Follow Us</h3>
             <ul className="social_list">
               <li><a href="#">Facebook</a></li>
               <li><a href="#">Linkedin</a></li>
               <li><a href="#">Twitter</a></li>
               <li><a href="#">Reddit</a></li>
               <li><a href="#">Instagram</a></li>
               <li><a href="#">Medium</a></li>
               <li><a href="#">Youtube</a></li>
               <li><a href="#">Github</a></li>
             </ul>
             <div className="footer_menu visible-xs">
              <a href="#">Term &amp; Conditions</a>
              <a href="#">Privacy</a>
            </div>
             <div className="copyright">Copyright @ 2018.All Right Reserved.</div>
             <div className="registeredAtNumber visible-xs">FreeMyWifi BV registered at the Dutch Chamber of Commerce with No. 71149023</div>
           </div>
        </div>
      </div>
     </div>
  </footer> 

<div className="telegram_div">
    <a href="#" className="telegram_btn"><img src={telegram} alt="telegram" /></a>
</div>
      </div>
    );
  }
}

export default App;
