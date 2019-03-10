import axions from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axions.get(`${BASE_URL}/billingCicles/summary`)

    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}