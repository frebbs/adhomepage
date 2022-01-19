const EventEmitter = require('events')
const connectionLogger = new EventEmitter()

const pool = require('../utils/dbConnection');

connectionLogger.on('connect', (data) => {
    const text = 'INSERT INTO logging(ip_addr) VALUES($1)'
    const values = [data.socket.remoteAddress.toString()]
    pool.query(text, values)
})

module.exports = connectionLogger;