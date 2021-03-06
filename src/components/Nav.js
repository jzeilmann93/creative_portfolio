import React, { Component } from 'react';
import logo from '../assets/svg/logo-softvu.svg';
import { Hamburger } from './Hamburger';

class Nav extends Component {
    state = {
      currentPage: this.props.currentPage
    }

    handleClick = (e) => {
      this.props.exitModal();
      // this.props.onClick(e); 
      console.log(e.target);
      let dataKey = e.target.getAttribute('data-key');
      let scrollElement = document.getElementById(dataKey);
      scrollElement.scrollIntoView({behavior: "smooth"});
    }

    // Highlight the current page SVG Icon
    currentSVGHighlight = () => {
      const getCurrentPage = this.state.currentPage;
      const getSVG = Array.from(document.querySelectorAll('.nav-icon'));
      for (let i = 0; i < getSVG.length; i++) {
        getSVG[i] === getSVG[getCurrentPage-2] ? getSVG[getCurrentPage-2].style.cssText = "fill: #0bd184;" : getSVG[i].style.cssText = "fill: #666666;"
      }
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.currentPage !== this.props.currentPage){
          this.setState({currentPage:nextProps.currentPage});
      }
    }
 
    render() {
      console.log(this.state.currentPage);
      this.state.currentPage === 1 ? console.log('yes') : this.currentSVGHighlight();
      return (
        <nav id="nav">
                <img src={logo} onClick={this.props.onClick} className="logo" alt="SoftVu"  eventkey={1 - 1} id="0" />
                <Hamburger onClick={this.props.onClick} />
                <div className="nav-icon-container">



                  <svg onClick={this.handleClick} alt="Coding Projects" id="1" eventkey={2 - 1} data-key="view-email" className="nav-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  viewBox="0 0 360 360" >
                  <path className="st0" d="M273.8,88.6H86.2c-15.9,0-28.9,13-28.9,28.9v125c0,15.9,13,28.9,28.9,28.9h187.5c15.9,0,28.9-13,28.9-28.9v-125
                  C302.6,101.6,289.7,88.6,273.8,88.6z M234.9,180l52.2-52.1v104.3L234.9,180z M86.2,104.2h187.5c4.1,0,7.7,1.9,10.2,4.8l-84.6,84.6
                  c-5.2,5.1-12,8-19.4,8c-7.3,0-14.2-2.8-19.4-8L76.1,109C78.5,106.1,82.1,104.2,86.2,104.2z M125.1,180l-52.1,52.2V127.8L125.1,180z
                  M273.8,255.8H86.2c-4.1,0-7.7-1.9-10.2-4.8l60-60l13.6,13.6c8.1,8.1,18.9,12.5,30.4,12.5s22.3-4.5,30.4-12.5l13.6-13.6l60,60
                  C281.5,253.9,277.8,255.8,273.8,255.8z"/>
                  </svg>


                
                
    
                <div className="tooltip"><div className="tooltip-text">Email</div></div>

                <svg version="1.1" onMouseOver={this.handleHover} onClick={this.handleClick} data-key="view-landingpage"  alt="Coding Projects" eventkey={3 - 1} id="2" className="nav-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 360 360" >
                <g>
                <path className="st0" d="M297.4,70.7H62.6c-9.3,0-16.9,7.6-16.9,16.9v184.9c0,9.3,7.6,16.9,16.9,16.9h234.7c9.3,0,16.9-7.6,16.9-16.9
                V87.5C314.2,78.2,306.6,70.7,297.4,70.7z M62.6,87h234.7c0.3,0,0.5,0.2,0.5,0.5v36.1H62.1V87.5C62.1,87.3,62.4,87,62.6,87z
                M297.4,273H62.6c-0.3,0-0.5-0.2-0.5-0.5V140h235.7v132.4C297.9,272.7,297.6,273,297.4,273z"/>
                <path className="st0" d="M121,114.1c5,0,9-4.1,9-9.1c0-5-4-9.1-9-9.1s-9.1,4.1-9.1,9.1C111.9,110.1,116,114.1,121,114.1z"/>
                <path className="st0" d="M152.2,114.1c5,0,9.1-4.1,9.1-9.1c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1C143.2,110.1,147.2,114.1,152.2,114.1z
                "/>
                <path className="st0" d="M89.8,114.1c5,0,9.1-4.1,9.1-9.1c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1C80.7,110.1,84.8,114.1,89.8,114.1z"/>
                <polygon className="st0" points="94.4,213.4 147.5,236.2 147.5,218.4 118.3,205.9 147.5,193.3 147.5,175.5 94.4,198.4 	"/>
                <polygon className="st0" points="212.5,193.3 241.7,205.9 212.5,218.4 212.5,236.2 265.6,213.4 265.6,198.4 212.5,175.5 	"/>
                <polygon className="st0" points="162.9,244.5 179.7,244.5 197.8,167.1 181,167.1 	"/>
                </g>
                </svg>
                <div className="tooltip"><div className="tooltip-text">Landing Pages</div></div>


                <svg version="1.1" onMouseOver={this.handleHover} onClick={this.handleClick} data-key="view-experiment" alt="Coding Projects" eventkey={4 - 1} id="3" className="nav-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 360 360"  >

              <g>
                <path className="st0" d="M253.2,214.3c7-13.2,10.4-26.1,10.4-40c0-46-37.4-83.4-83.4-83.4s-83.4,37.4-83.4,83.4
                  c0,13.9,3.3,26.8,10.4,40c0,0,0,0.1,0.1,0.1c0.1,0.1,0.7,1.3,1.8,3.1c0.3,0.5,0.6,1,0.9,1.6c0.1,0.2,0.3,0.4,0.4,0.5
                  c1.5,2.4,3.6,5.4,6.2,8.8c1.5,2,3.2,4,5,6.2c5.9,7.3,13.3,16.4,15.3,21.9c4.7,12.4,5.6,21.6,5.6,21.7c0.3,3.9,3.6,7,7.6,7h30.3
                  h30.3c3.9,0,7.2-3,7.6-7c0-0.1,0.8-9.4,5.6-21.7c2.1-5.5,9.4-14.6,15.3-21.9c1.7-2.2,3.4-4.2,4.9-6.2c2.6-3.4,4.7-6.4,6.2-8.8
                  c0.1-0.2,0.3-0.3,0.4-0.5c0.3-0.5,0.6-1,0.9-1.6c1.1-1.9,1.7-3,1.8-3.1C253.1,214.4,253.2,214.4,253.2,214.3z M227.1,225.1
                  c-7.3,9-14.8,18.3-17.7,26c-2.9,7.6-4.6,14.3-5.5,18.9h-23.8h-23.8c-0.9-4.6-2.5-11.3-5.5-18.9c-2.9-7.7-10.4-17-17.7-26
                  c-1.7-2.1-3.3-4.1-4.8-6c-3-3.9-5.2-7.2-6.4-9.3c-6.8-11.9-10.1-23.3-10.1-35.5c0-37.6,30.6-68.2,68.2-68.2s68.2,30.6,68.2,68.2
                  c0,12.2-3.2,23.6-10.1,35.5c-1.3,2.1-3.4,5.4-6.4,9.3C230.4,221,228.8,223,227.1,225.1z"/>
                <path className="st0" d="M215.5,301.3c0-4.2-3.4-7.6-7.6-7.6h-55.6c-4.2,0-7.6,3.4-7.6,7.6v3c-0.1,2.5-0.3,14.7,8.4,24.2
                  c6.3,6.8,15.3,10.2,26.9,10.2c11.6,0,20.6-3.4,26.9-10.2c8.7-9.4,8.6-21.6,8.4-24.2L215.5,301.3L215.5,301.3z M195.9,318.3
                  c-3.3,3.5-8.6,5.3-15.7,5.3s-12.4-1.8-15.7-5.3c-2.7-2.9-3.8-6.6-4.2-9.4h39.9C199.7,311.7,198.6,315.4,195.9,318.3z"/>
                <path className="st0" d="M166.7,122.1c-19.9,6.3-35.5,22.9-40.7,43.1c-1,4.1,1.4,8.2,5.5,9.2c0.6,0.2,1.3,0.2,1.9,0.2
                  c3.4,0,6.5-2.3,7.4-5.7c3.9-15.2,15.6-27.6,30.6-32.4c4-1.3,6.2-5.5,4.9-9.5C175,123,170.7,120.8,166.7,122.1z"/>
                <path className="st0" d="M180,67.3c4.2,0,7.6-3.4,7.6-7.6V28.8c0-4.2-3.4-7.6-7.6-7.6s-7.6,3.4-7.6,7.6v30.9
                  C172.4,63.9,175.8,67.3,180,67.3z"/>
                <path className="st0" d="M92.2,99.2c1.5,1.5,3.4,2.2,5.4,2.2c1.9,0,3.9-0.7,5.4-2.2c3-3,3-7.8,0-10.7L81.1,66.6c-3-3-7.8-3-10.7,0
                  c-3,3-3,7.8,0,10.7L92.2,99.2z"/>
                <path className="st0" d="M71,176.2c0-4.2-3.4-7.6-7.6-7.6H32.6c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6h30.9
                  C67.7,183.8,71,180.4,71,176.2z"/>
                <path className="st0" d="M92.2,253.3l-21.8,21.8c-3,3-3,7.8,0,10.7c1.5,1.5,3.4,2.2,5.4,2.2c1.9,0,3.9-0.7,5.4-2.2L103,264
                  c3-3,3-7.8,0-10.7C100,250.3,95.2,250.3,92.2,253.3z"/>
                <path className="st0" d="M267.8,253.3c-3-3-7.8-3-10.7,0c-3,3-3,7.8,0,10.7l21.8,21.8c1.5,1.5,3.4,2.2,5.4,2.2c1.9,0,3.9-0.7,5.4-2.2
                  c3-3,3-7.8,0-10.7L267.8,253.3z"/>
                <path className="st0" d="M327.4,168.7h-30.9c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6h30.9c4.2,0,7.6-3.4,7.6-7.6
                  C335,172.1,331.6,168.7,327.4,168.7z"/>
                <path className="st0" d="M262.4,101.4c1.9,0,3.9-0.7,5.4-2.2l21.8-21.8c3-3,3-7.8,0-10.7c-3-3-7.8-3-10.7,0l-21.8,21.8
                  c-3,3-3,7.8,0,10.7C258.5,100.7,260.5,101.4,262.4,101.4z"/>
              </g>
              </svg>

                <div className="tooltip"><div className="tooltip-text">Experiment</div></div>




                <svg version="1.1" onMouseOver={this.handleHover} onClick={this.handleClick} data-key="view-animation" alt="Coding Projects" eventkey={5 - 1} id="4" className="nav-icon" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                  viewBox="0 0 360 360">
                <g>
                  <path className="st0" d="M290.6,55.1H69.4C51,55.1,36,70.1,36,88.5v135.2c0,18.4,15,33.4,33.4,33.4h76.3c-0.4,4-2.9,20.8-14.4,21.2
                    c-0.3,0-0.6,0-0.9,0.1c-9.4,1.4-13.8,8.4-13.3,14.5c0.4,6,5.6,12,14.5,12h97c8.9,0,14-6,14.5-12c0.5-6.1-4-13.1-13.3-14.5
                    c-0.3,0-0.6-0.1-0.9-0.1c-11.6-0.4-14-17.2-14.4-21.2h76.3c18.4,0,33.4-15,33.4-33.4V88.5C324,70.1,309,55.1,290.6,55.1z
                    M214.1,289.3h-68.2c10.9-7.6,14.9-23,15.4-32.2h37.4C199.2,266.4,203.2,281.7,214.1,289.3z M308.4,223.7c0,9.8-8,17.8-17.8,17.8
                    H69.4c-9.8,0-17.8-8-17.8-17.8V88.5c0-9.8,8-17.8,17.8-17.8h221.2c9.8,0,17.8,8,17.8,17.8C308.4,88.5,308.4,223.7,308.4,223.7z"/>
                  <path className="st0" d="M180,214.9c-4.9,0-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8c4.8,0,8.8-3.9,8.8-8.8
                    C188.8,218.8,184.8,214.9,180,214.9z"/>
                  <path className="st0" d="M213.6,142.2L154.8,99c-2.3-1.7-5.3-1.9-7.8-0.5c-2.5,1.4-3.9,4.1-3.6,6.9l6.9,72.6c0.3,2.7,2,5,4.6,6
                    c0.8,0.3,1.7,0.5,2.5,0.5c1.8,0,3.5-0.7,4.9-1.9l15.8-14.7l16.6,29.2c1.3,2.3,3.7,3.6,6.2,3.6c1.2,0,2.4-0.3,3.5-0.9
                    c3.4-2,4.6-6.3,2.7-9.8l-16.6-29.1l20.7-6c2.6-0.8,4.6-2.9,5.1-5.6C216.9,146.5,215.8,143.8,213.6,142.2z M178,149.6
                    C178,149.6,178,149.6,178,149.6c-0.6,0.2-1,0.4-1.5,0.6c0,0,0,0-0.1,0l0,0c-0.5,0.3-0.9,0.6-1.3,0.9c0,0-0.1,0-0.1,0.1l-11.8,11
                    l-4-42.2l34.2,25.1L178,149.6z"/>
                </g>
                </svg>


                <div className="tooltip"><div className="tooltip-text">Video</div></div> 
         </div>
        </nav>
      );
    }
  }

  export default Nav;
  

  
