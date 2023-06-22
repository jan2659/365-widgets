import { createStore } from 'redux'
import { ACTION_TYPES } from './actions'
import { SENSOR_EVALUATE_HANDLERS, type SENSOR_TYPES } from '../consts'

interface ReferenceType {
    temperature: number
    humidity: number
    carbonMonoxide: number
}

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
        case ACTION_TYPES.ADD_SENSOR:
            return {
                ...state,
                currentSensorName: action.payload.sensorName,
                currentSensorType: action.payload.sensorType
            }
        case ACTION_TYPES.ADD_MEASURED_VALUE:
            return {
                ...state,
                currentMeasuredValues: [
                    ...state.currentMeasuredValues,
                    action.payload.measuredValue
                ]
            }
        case ACTION_TYPES.EVALUATE_CURRENT_SENSOR:
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
                    [state.currentSensorName]: SENSOR_EVALUATE_HANDLERS[state.currentSensorType](state.currentMeasuredValues, state.reference)
                }
            }
        case ACTION_TYPES.RESET_APP:
            return initState
        case ACTION_TYPES.SET_REFERENCE:
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
