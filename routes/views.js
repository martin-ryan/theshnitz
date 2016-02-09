module.exports = [{

  //
  // ROOT route - return INDEX VIEW
  method: 'GET',
  path: '/',
  handler: {
    view: {
      template: 'index',
      context:{
        message: "hello wooooorld!",
        title: "NAME ME!"
      }
    }
  }
}];
