import { Kitty } from "../types/kitty"

export const useApi = () => {
    const baseUrl = 'http://localhost:3000'

    const get = async <T>(path: string) => {
        const response = await fetch(`${baseUrl}${path}`)
        return await response.json() as T
    }

    const post = async <T>(path: string, body: Kitty) => {
        const response = await fetch(`${baseUrl}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        return await response.json() as T
    }

    return { get, post }
}