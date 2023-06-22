import { setReference, addSensor, addMeasuredValue, evaluateCurrentSensor, resetApp } from './app/actions'
import store from './app/store'
import { parseContent, parseLine, parseReference } from './utils/parse'

export const evaluateLogFile = (logContentsStr: string) => {
    // To Debug uncomment:
    // store.subscribe(() => { console.log(store.getState()) })

    try {
        const lines = parseContent(logContentsStr)
        const reference = parseReference(lines[0])
        setReference(reference)

        for (let i = 1; i < lines.length; i++) {
            const lineStr = lines[i]
            const line = parseLine(lineStr)

            if ('sensorName' in line) {
                evaluateCurrentSensor()
                addSensor(line.sensorName, line.sensorType)
            }

            if ('measuredValue' in line) {
                addMeasuredValue(line.measuredValue)
            }

            if (i === lines.length - 1) {
                evaluateCurrentSensor()
            }
        }

        const output = store.getState().output
        resetApp()

        return output
    } catch (e) {
        console.log('Application Runtime Error:', e)
        resetApp()
    }
}
