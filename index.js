require('./prototypes/zipArray')
const euclidean = require('./measurable/euclidean')
const euclideanSquared = require('./measurable/euclideanSquared')
const cosineSimilarity = require('./measurable/cosineSimilarity')

const measurable = {
    euclidean: euclidean,
    euclideanSquared: euclideanSquared,
    cosineSimilarity: cosineSimilarity
}

module.exports = measurable