import { createStore } from 'redux'
import actionTypes from './actionTypes'
import { SENSOR_EVALUATE_HANDLERS, type SENSOR_TYPES } from '../consts'
import { type ReferenceType } from '../utils/parse'

interface StateType {
    reference?: ReferenceType
    output?: Record<string, string>
    currentSensorName?: string
    currentSensorType?: keyof typeof SENSOR_TYPES
    currentMeasuredValues: number[]
}

const initState: StateType = {
    reference: undefined,
    output: undefined,
    currentSensorName: undefined,
    currentSensorType: undefined,
    currentMeasuredValues: []
}

const appReducer = (state = initState, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_SENSOR:
            return {
                ...state,
                currentSensorName: action.payload.sensorName,
                currentSensorType: action.payload.sensorType
            }
        case actionTypes.ADD_MEASURED_VALUE:
            return {
                ...state,
                currentMeasuredValues: [
                    ...state.currentMeasuredValues,
                    action.payload.measuredValue
                ]
            }
        case actionTypes.EVALUATE_CURRENT_SENSOR:
            if (state.currentSensorName === undefined || state.currentSensorType === undefined || state.reference === undefined) {
                return state
            }

            return {
                ...state,
                currentSensorName: undefined,
                currentSensorType: undefined,
                currentMeasuredValues: [],
                output: {
                    ...state.output,
                    [state.currentSensorName]: SENSOR_EVALUATE_HANDLERS[state.currentSensorType](state.currentMeasuredValues, state.reference[state.currentSensorType])
                }
            }
        case actionTypes.RESET_APP:
            return initState
        case actionTypes.SET_REFERENCE:
            return {
                ...state,
                reference: action.payload
            }
        default:
            return state
    }
}

const store = createStore(appReducer)

export default store
