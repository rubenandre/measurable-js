require('./prototypes/zipArray')
const euclidean = require('./measurable/euclidean')
const euclideanSquared = require('./measurable/euclideanSquared')
const cosineSimilarity = require('./measurable/cosineSimilarity')
const cosineDistance = require('./measurable/cosineDistance')

const measurable = {
    euclidean: euclidean,
    euclideanSquared: euclideanSquared,
    cosineSimilarity: cosineSimilarity,
    cosineDistance: cosineDistance
}

module.exports = measurable