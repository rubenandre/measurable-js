const measurable = require('./index')

test('Prototype zip test', () => {
    const array1 = new Array(1, 2, 3)
    const array2 = new Array(1, 2, 3)
    const expected = [[1,1], [2,2], [3,3]]
    const result = array1.zip(array2)
    expect(result).toEqual(expected)
})

const arr1 = [1, 2]
const arr2 = [1, 4]

test('Euclidean square Distance test', () => {
    const expected = 4
    const result = measurable.euclideanSquared(arr1, arr2)
    expect(result).toBe(expected);
})

test('Euclidean Distance test', () => {
    const expected = 2
    const result = measurable.euclidean(arr1, arr2)
    expect(result).toBe(expected);
})

test('Euclidean Distance Norm test', () => {
    const array = [0, 1]
    const expected = 1
    const result = measurable.euclidean(array)
    expect(result).toBe(expected);
})

test('Cosine similarity test', () => {
    const expected = 0.9761870601839528;
    const result = measurable.cosineSimilarity(arr1, arr2)
    expect(result).toBeCloseTo(expected, 10)
})

test('Cosine distance test', () => {
    const expected = 0.02381293981604715;
    const result = measurable.cosineDistance(arr1, arr2)
    expect(result).toBeCloseTo(expected, 10)
})

test('Chebyshev distance test', () => {
    const expected = 2
    const result = measurable.chebyshev(arr1, arr2)
    expect(result).toBe(expected)
})