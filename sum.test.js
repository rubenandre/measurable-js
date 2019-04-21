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

test('Euclidean square Distance', () => {
    const expected = 4
    const result = measurable.euclidean_squared(arr1, arr2)
    expect(result).toBe(expected);
})

test('Euclidean Distance', () => {
    const expected = 2
    const result = measurable.euclidean(arr1, arr2)
    expect(result).toBe(expected);
})