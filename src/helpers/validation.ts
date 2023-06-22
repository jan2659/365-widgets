import { SENSOR_TYPES } from '../consts'

const isNumeric = (str: string) => {
    return !isNaN(parseFloat(str))
}

export const isReferenceLine = (lineArray: string[]) => {
    const isLineArrayLengthValid = lineArray.length === 4
    const isFirstItemReference = lineArray[0] === 'reference'
    const areRestItemsNumbers = isNumeric(lineArray[1]) && isNumeric(lineArray[2]) && isNumeric(lineArray[3])

    return isLineArrayLengthValid && isFirstItemReference && areRestItemsNumbers
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
