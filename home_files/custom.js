'use strict';

const e = React.createElement;

class EmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e('a',{href:"#"},"chrisamirani@yahoo.com")
    }

    return e(
      'a',
      { onClick: () => this.setState({ liked: true }), className:"btn btn-lg btn-secondary fw-bold border-white bg-white"},
      'Show Email',
    );
  }
}

class NavOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: "nav-link active",skills:"nav-link",projects:"nav-link" };
  }

  render() {
    if (this.state.liked) {
      return e('a',{href:"#"},"chrisamirani@yahoo.com")
    }

    return e(
      "nav",
      {className:"nav nav-masthead justify-content-center float-md-end"},
      e('a',
      { onClick: () => this.setState({ home: "nav-link active",skills:"nav-link",projects:"nav-link" }), className:this.state.home},
      'Home'),
      e('a',
      { onClick: () => this.setState({ home: "nav-link",skills:"nav-link active",projects:"nav-link" }), className:this.state.skills},
      'Skills'),
      e('a',
      { onClick: () => this.setState({ home: "nav-link",skills:"nav-link",projects:"nav-link active" }), className:this.state.projects},
      'Projects')
    );
  }
}
const navContainer = document.querySelector('#nav');
ReactDOM.render(e(NavOptions), navContainer);
const domContainer = document.querySelector('#email');
ReactDOM.render(e(EmailButton), domContainer);