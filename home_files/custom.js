'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
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
      { onClick: () => this.setState({ liked: true }), class:"btn btn-lg btn-secondary fw-bold border-white bg-white"},
      'Show Email',
    );
  }
}

const domContainer = document.querySelector('#email');
ReactDOM.render(e(LikeButton), domContainer);