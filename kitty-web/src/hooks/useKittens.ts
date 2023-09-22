import { useState } from 'react'
import { Kitty } from "../types/kitty"
import { useApi } from './useApi'

export const useKittens = () => {
    const [kittens, setKittens] = useState<Kitty[]>([])
    const [kitty, setKitty] = useState<Kitty>()

    const { get } = useApi()

    const getKittens = async () => {
        const kittens = await get<Kitty[]>('/kitty')
        console.log(kittens)
        setKittens(kittens)
    }

    const getKitty = async (id: number) => {
        const kitty = await get<Kitty>(`/kitty/${id}`)
        console.log(kitty)
        setKitty(kitty)
    }

    return {
        getKittens,
        getKitty,
        kittens,
        kitty
    }
}