const dev = (arr: number[], mean: number) => {
    arr = arr.map((k) => {
        return (k - mean) ** 2
    })

    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    return Math.sqrt(sum / arr.length)
}

export const handleThermometer = (values: number[], reference: number) => {
    const mean = values.reduce((a, b) => a + b, 0) / values.length
    const stdDev = dev(values, mean)

    if (Math.abs(reference - mean) <= 0.5 && stdDev < 3) {
        return 'ultra precise'
    }

    if (Math.abs(reference - mean) <= 0.5 && stdDev < 5) {
        return 'very precise'
    }

    return 'precise'
}

export const handleHumidity = (values: number[], reference: number) => {
    const referenceAllowedDiscrepancy = reference / 100

    const result = values.every(function (value) {
        return Math.abs(value - reference) <= referenceAllowedDiscrepancy
    })

    if (result) {
        return 'keep'
    }

    return 'discard'
}

export const handleMonoxide = (values: number[], reference: number) => {
    const result = values.every(function (value) {
        return Math.abs(value - reference) <= 3
    })

    if (result) {
        return 'keep'
    }

    return 'discard'
}
