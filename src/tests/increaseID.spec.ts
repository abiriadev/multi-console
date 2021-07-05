// import { describe } from "yargs";
import increaseID from "../utils/increaseID";

describe('increaseID test', () => {
    let i = 1

    it('Does it increase from 1?', () => {
        expect(increaseID()).toBe(1)
    })

    it('Does it globaly maintained?', () => {
        expect(increaseID()).toBe(i + 1)
    })

    it('Does it constantly increase by 1?', () => {
        expect(increaseID()).toBe(i + 2)
        expect(increaseID()).toBe(i + 3)
        expect(increaseID()).toBe(i + 4)
        expect(increaseID()).toBe(i + 5)
    })
})