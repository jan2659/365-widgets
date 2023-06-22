import { handleHumidity, handleMonoxide, handleThermometer } from './evaluate'

describe('evaluate', () => {
    describe('handleThermometer', () => {
        test.each([
            [[72.4, 76.0, 79.1, 75.6, 71.2, 71.4, 69.2, 65.2, 62.8, 61.4, 64.0, 67.5, 69.4], 'precise'],
            [[69.5, 70.1, 71.3, 71.5, 69.8], 'ultra precise']
        ])('should evaluate thermometer with values: %s', (values: number[], result: string) => {
            expect(handleThermometer(values, 70)).toBe(result)
        })
    })

    describe('handleHumidity', () => {
        test.each([
            [[45.2, 45.3, 45.1], 'keep'],
            [[44.4, 43.9, 44.9, 43.8, 42.1], 'discard']
        ])('should evaluate humidity with values: %s', (values: number[], result: string) => {
            expect(handleHumidity(values, 45)).toBe(result)
        })
    })

    describe('handleMonoxide', () => {
        test.each([
            [[5, 7, 9], 'keep'],
            [[2, 4, 10, 8, 6], 'discard']
        ])('should evaluate monoxide with values: %s', (values: number[], result: string) => {
            expect(handleMonoxide(values, 6)).toBe(result)
        })
    })
})
