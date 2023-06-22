import { handleHumidity, handleMonoxide, handleThermometer } from '../helpers/evaluate'

export const SENSOR_TYPES = {
    thermometer: 'thermometer',
    humidity: 'humidity',
    monoxide: 'monoxide'
} as const

export const SENSOR_EVALUATE_HANDLERS = {
    [SENSOR_TYPES.thermometer]: handleThermometer,
    [SENSOR_TYPES.humidity]: handleHumidity,
    [SENSOR_TYPES.monoxide]: handleMonoxide
}
