module.exports = [{

  //
  // DATA route - return JSON etc
  method: 'GET',
  path: '/somedata',
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
