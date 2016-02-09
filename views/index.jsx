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
          <link rel="stylesheet" href="styles.css" media="screen" title="no title" charset="utf-8"></link>
        </head>
        <body>
          <div className="header">{this.props.message}</div>
        </body>
        <script src=""></script>
      </html>
    )
  }
});
