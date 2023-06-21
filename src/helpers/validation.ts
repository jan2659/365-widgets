import { SENSOR_TYPES } from '../consts'

const isNumeric = (str: string) => {
    return !isNaN(parseFloat(str))
}

export const isSensorDetailLine = (lineArray: string[]) => {
    const isLineArrayLengthValid = lineArray.length === 2
    const doesLineArrayRepresentsSensorName = SENSOR_TYPES[lineArray[0] as keyof typeof SENSOR_TYPES] !== undefined

    return isLineArrayLengthValid && doesLineArrayRepresentsSensorName
}

export const isMeasuredValueLine = (lineArray: string[]) => {
    const isLineArrayLengthValid = lineArray.length === 2
    const doesLineArrayRepresentsMeasuredValue = isNumeric(lineArray[1])

    return isLineArrayLengthValid && doesLineArrayRepresentsMeasuredValue && !isSensorDetailLine(lineArray)
}
