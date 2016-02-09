module.exports = [{

  //
  // Serve PUBLIC STATIC files
  method: "GET",
  path: "/{param*}",
  handler: {
      directory: {
          path: "public",
          listing: false,
      }
  }
}];
