require('./prototypes/zipArray')
const euclidean = require('./measurable/euclidean')
const euclidean_squared = require('./measurable/euclidean_squared')

const measurable = {
    euclidean: euclidean,
    euclidean_squared: euclidean_squared
}

module.exports = measurable