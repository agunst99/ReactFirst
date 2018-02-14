import React, { Component } from 'react';
import PropTypes from 'prop-types';


export const CodePen = [
 {user: "eduardoboucas", hash:"jqWbdb",  height: '250px', width: '100%',  tab: 'result',
 theme: '0'},
]


export default class Codepen extends Component {
 constructor(props) {
     super(props)
     this.state = { codepen: CodePen };

}
render () {
 console.log(this.state)
 const src  = `//codepen.io/${this.state.codepen[0].user}/embed/${this.state.codepen[0].hash}/?height=${this.state.codepen[0].height}&theme-id=${this.state.codepen[0].theme}&default-tab=${this.state.codepen[0].tab}`;
 const user = `http://codepen[0].io/${this.state.codepen[0].user}`;
 const pen  = `${user}/pen/${this.state.codepen[0].hash}/`;

 return (
   <iframe width={this.state.codepen[0].width} height={this.state.codepen[0].height} scrolling="no" src={src} frameBorder="no" allowTransparency="true" allowFullScreen="true" style={{height: this.state.codepen[0].height, width: this.state.codepen[0].width}}>
     <a href={pen}>See this pen</a> by {this.state.codepen[0].user} (<a href={user}>@{this.state.codepen[0].user}</a>) on <a href='http://codepen.io'>CodePen</a>.
   </iframe>
 );
}
}
Codepen.propTypes = {
 user: PropTypes.string.isRequired,
 hash: PropTypes.string.isRequired,
 height: PropTypes.string,
 width: PropTypes.string,
 tab: PropTypes.oneOf(['html', 'css', 'result', 'js']),
 theme: PropTypes.string
}
Codepen.defaultProps = {
 user: "eduardoboucas",
 hash: "jqWbdb",
 height: '250px',
 width: '100%',
 tab: 'result',
 theme: '0'
}