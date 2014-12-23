var log = require('../index.js')

log.configure('./log4js.json', {})
var logger = log.getLogger('log', __filename, process.pid)

setInterval(function(){
    logger.info('test1');
    logger.warn('test2');
    logger.error('test3');
}, 1000)
