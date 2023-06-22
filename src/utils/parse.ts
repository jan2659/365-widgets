import { isMeasuredValueLine, isReferenceLine, isSensorDetailLine } from '../helpers/validation'
import { SENSOR_TYPES } from '../consts'

const LINE_SEPARATOR = ' '
const CONTENT_SEPARATOR = '\n'

export interface ReferenceType {
    [SENSOR_TYPES.thermometer]: number
    [SENSOR_TYPES.humidity]: number
    [SENSOR_TYPES.monoxide]: number
}

interface SensorDetailType {
    sensorName: string
    sensorType: keyof typeof SENSOR_TYPES
}

interface MeasuredValueType { measuredValue: number }

type LineParserType = (line: string) => SensorDetailType | MeasuredValueType

export const parseContent = (contentStr: string) => contentStr.split(CONTENT_SEPARATOR)

export const parseReference = (lineStr: string): ReferenceType => {
    const lineArray = lineStr.split(LINE_SEPARATOR)

    if (isReferenceLine(lineArray)) {
        return {
            [SENSOR_TYPES.thermometer]: Number(lineArray[1]),
            [SENSOR_TYPES.humidity]: Number(lineArray[2]),
            [SENSOR_TYPES.monoxide]: Number(lineArray[3])
        }
    }

    throw new Error(`Parse Reference Error - incorrect format of the reference: ${JSON.stringify(lineArray)}`)
}

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
