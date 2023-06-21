import { isMeasuredValueLine, isSensorDetailLine } from './validation'

describe('validation', () => {
    describe('isSensorDetailLine', () => {
        test.each([
            ['thermometer', 'temp-1', true],
            ['humidity', 'hum-1', true],
            ['monoxide', 'mon-1', true],
            ['barometer', 'bar-1', false],
            ['2007-04-05T22:00', '72.4', false]
        ])('should return whether the line represents sensor detail for field1: %s and field2: %s', (item1: string, item2: string, isValid: boolean) => {
            expect(isSensorDetailLine([item1, item2])).toBe(isValid)
        })
    })

    describe('isMeasuredValueLine', () => {
        test.each([
            ['2007-04-05T22:00', '72.4', true],
            ['2007-04-05T22:00', 'NaN', false],
            ['thermometer', '74.0', false]
        ])('should return whether the line represents sensor detail for field1: %s and field2: %s', (item1: string, item2: string, isValid: boolean) => {
            expect(isMeasuredValueLine([item1, item2])).toBe(isValid)
        })
    })
})
