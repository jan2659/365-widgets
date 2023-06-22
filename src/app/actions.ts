import store from './store'
import ActionTypes from './actionTypes'
import { type SENSOR_TYPES } from '../consts'
import { type ReferenceType } from '../utils/parse'

export const addSensor = (sensorName: string, sensorType: keyof typeof SENSOR_TYPES) => {
    const payload = {
        sensorName,
        sensorType
    }
    store.dispatch({ type: ActionTypes.ADD_SENSOR, payload })
}

export const addMeasuredValue = (measuredValue: number) => {
    const payload = {
        measuredValue
    }
    store.dispatch({ type: ActionTypes.ADD_MEASURED_VALUE, payload })
}

export const evaluateCurrentSensor = () => {
    store.dispatch({ type: ActionTypes.EVALUATE_CURRENT_SENSOR })
}

export const resetApp = () => {
    store.dispatch({ type: ActionTypes.RESET_APP })
}

export const setReference = (reference: ReferenceType) => {
    const payload = reference
    store.dispatch({ type: ActionTypes.SET_REFERENCE, payload })
}
