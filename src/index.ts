import store from './app/store'
import { addMeasuredValue, addSensor, evaluateCurrentSensor, setReference } from './app/actions'
import { SENSOR_TYPES } from './consts'
// import { parseContent } from './utils/parse'

export const foo = () => {
    store.subscribe(() => { console.log(store.getState()) })
    setReference(70, 45.0, 6)
    addSensor('tempA', SENSOR_TYPES.thermometer)
    addMeasuredValue(70)
    addMeasuredValue(80)
    evaluateCurrentSensor()

    addSensor('hum3', SENSOR_TYPES.humidity)
    addMeasuredValue(50)
    addMeasuredValue(30)
    evaluateCurrentSensor()
}

// export const evaluateLogFile = (logContentsStr: string) => {
//     const lines = parseContent(logContentsStr)
// }
