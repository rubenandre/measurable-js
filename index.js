require('./prototypes/zipArray')
const euclidean = require('./measurable/euclidean')
const euclideanSquared = require('./measurable/euclideanSquared')

const measurable = {
    euclidean: euclidean,
    euclideanSquared: euclideanSquared
}

module.exports = measurable