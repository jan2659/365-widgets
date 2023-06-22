import { parseContent, parseLine, parseReference } from './parse'

describe('parse', () => {
    describe('parseContent', () => {
        test('should parse content', () => {
            const contentStr = `thermometer temp-1
2007-04-05T22:00 72.4`

            expect(parseContent(contentStr)).toEqual(['thermometer temp-1', '2007-04-05T22:00 72.4'])
        })
    })

    describe('parseReference', () => {
        test.each([
            ['reference 70.0 45.0 6', { thermometer: 70.0, humidity: 45, monoxide: 6 }]
        ])('should parse line: %s to a proper object', (lineStr: string, expectedObj) => {
            expect(parseReference(lineStr)).toMatchObject(expectedObj)
        })

        test('should throw error if validation fails', () => {
            expect(() => { parseReference('noreference 70.0 45.0 6') }).toThrowError()
        })
    })

    describe('parseLine', () => {
        test.each([
            ['thermometer temp-1', { sensorType: 'thermometer', sensorName: 'temp-1' }],
            ['2007-04-05T22:00 72.4', { measuredValue: 72.4 }]
        ])('should parse line: %s to a proper object', (lineStr, expectedObj) => {
            expect(parseLine(lineStr)).toMatchObject(expectedObj)
        })

        test('should throw error if validation fails', () => {
            expect(() => { parseLine('barometer bar-1') }).toThrowError()
        })
    })
})
