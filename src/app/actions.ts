import store from './store'
import { type SENSOR_TYPES } from '../consts'

export const ACTION_TYPES = {
    ADD_SENSOR: 'ADD_SENSOR',
    ADD_MEASURED_VALUE: 'ADD_MEASURED_VALUE',
    EVALUATE_CURRENT_SENSOR: 'EVALUATE_CURRENT_SENSOR',
    RESET_APP: 'RESET_APP',
    SET_REFERENCE: 'SET_REFERENCE'
} as const

export const addSensor = (sensorName: string, sensorType: keyof typeof SENSOR_TYPES) => {
    const payload = {
        sensorName,
        sensorType
    }
    store.dispatch({ type: ACTION_TYPES.ADD_SENSOR, payload })
}

export const addMeasuredValue = (measuredValue: number) => {
    const payload = {
        measuredValue
    }
    store.dispatch({ type: ACTION_TYPES.ADD_MEASURED_VALUE, payload })
}

export const evaluateCurrentSensor = () => {
    store.dispatch({ type: ACTION_TYPES.EVALUATE_CURRENT_SENSOR })
}

export const resetApp = () => {
    store.dispatch({ type: ACTION_TYPES.RESET_APP })
}

export const setReference = (temperature: number, humidity: number, carbonMonoxide: number) => {
    const payload = {
        temperature,
        humidity,
        carbonMonoxide
    }
    store.dispatch({ type: ACTION_TYPES.SET_REFERENCE, payload })
}
