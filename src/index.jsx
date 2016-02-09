import React from 'react';

//
//
export default React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"></meta>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="semantic.min.css" media="screen" title="no title" charset="utf-8"></link>
          <link rel="stylesheet" href="styles.css" media="screen" title="no title" charset="utf-8"></link>
        </head>
        <body>
          <h1 className="ui header">{this.props.message}</h1>
          <h2>Stuff and Stuff</h2>
          <button className="ui huge button">WAT!? YAS!!</button>
          <div className="ui three item menu">
            <a className="active item">Editorials</a>
            <a className="item">Reviews</a>
            <a className="item">Upcoming Events</a>
          </div>
        </body>
        <script src="semantic.min.js"></script>
      </html>
    )
  }
});
