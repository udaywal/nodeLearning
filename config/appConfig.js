let appConfig = {};

appConfig.port = 3000; // application port
appConfig.allowedCorsOrigin = "*"; // allowed domains
    /* basically '*' = 'open for all' it allows all the kinds of clients to make request to this. */
    /* In production where we have frontend then only frontend can make the request to it. 
    for an example, only Facebook's frontend "facebook.com" can make request to Facebook's backend "graph.facebook.com".*/
appConfig.env = "dev"; // environment
appConfig.db = {
    uri: 'mongodb://test:test@127.0.0.1:27017/blogAppDB',
} // database url
appConfig.apiVersion = '/api/v1'; // api version

module.exports = {

    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    env: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion

}