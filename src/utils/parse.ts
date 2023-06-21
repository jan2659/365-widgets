import { isMeasuredValueLine, isSensorDetailLine } from '../helpers/validation'
import { type SENSOR_TYPES } from '../consts'

const LINE_SEPARATOR = ' '
const CONTENT_SEPARATOR = '\n'

interface SensorDetailType {
    sensorName: string
    sensorType: keyof typeof SENSOR_TYPES
}

interface MeasuredValueType { measuredValue: number }

type LineParserType = (line: string) => SensorDetailType | MeasuredValueType

export const parseContent = (contentStr: string) => contentStr.split(CONTENT_SEPARATOR)

export const parseLine: LineParserType = (lineStr) => {
    const lineArray = lineStr.split(LINE_SEPARATOR)

    if (isSensorDetailLine(lineArray)) {
        const sensorType = lineArray[0] as keyof typeof SENSOR_TYPES

        return {
            sensorType,
            sensorName: lineArray[1]
        }
    }

    if (isMeasuredValueLine(lineArray)) {
        return {
            measuredValue: Number(lineArray[1])
        }
    }

    throw new Error(`Parse Line Error - incorrect format of the line: ${JSON.stringify(lineArray)}`)
}
