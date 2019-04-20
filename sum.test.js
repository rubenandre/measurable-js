const measurable = require('./index')
require('./prototypes/zipArray')

test('Prototype zip test', () => {
    const array1 = new Array(1, 2, 3)
    const array2 = new Array(1, 2, 3)
    const expected = [[1,1], [2,2], [3,3]]
    const result = array1.zip(array2)
    expect(result).toEqual(expected)
})