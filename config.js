/**
 * The config file.
 */
var Config = function() { };

Config.Server = {
	PTCL: 'http',
	HOST : 'localhost',
	PORT : 8888,
	VRSN : 'v1'
};

Config.Default = {
  USER: 'admin@host.com',
  PSSW : 'admin'
};

Config.DB = {
  USER: false,
  PSSW: false,
  HOST: '127.0.0.1',
  PORT: '27001',
  DATA: 'worldcup'
};
/** Concat the API url.
 * @return string url
 */
Config.getApiUrl = function(){
	return 
    Config.Server.PTCL 
    + '://' 
    + Config.Server.HOST 
    + ':' 
    + Config.Server.PORT 
    + '/' 
    + Config.Server.VRSN 
    + '/';
};

/**
 * Concat the DB Url
 * @return string url 
 */
Config.getDBUrl = function() {
  if (Config.DB.USER && Config.DB.PSSW) {
    return 
      "mongodb://" 
      + Config.DB.USER 
      + ":" 
      + Config.DB.PSSW 
      + "@" 
      + Config.DB.HOST 
      + ":" 
      + Config.DB.PORT 
      + "/" 
      + Config.DB.DATA;
  } else {
    return 
      "mongodb://" 
      + Config.DB.HOST 
      + ":" 
      + Config.DB.PORT 
      + "/" 
      + Config.DB.DATA;
  }
};

exports.Config = Config;
