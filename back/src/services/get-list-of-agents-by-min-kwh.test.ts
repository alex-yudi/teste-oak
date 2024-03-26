import { expect, it, describe } from 'vitest'
import { getListOfAgentsByMinKwh } from "@/services/get-list-of-agents-by-min-kwh";

describe('Test the service of get the list of agents by the minimum kwh informed', () => {

    it('should return an error when the value of lim_min_kwh is less than or equal to 0', async () => {
        try {
            await getListOfAgentsByMinKwh(0);
        } catch (error: any) {
            expect(error.message).toBe("The value of lim_min_kwh must be greater than 0");
        }
    })

    it('should return an array of agents when the value of lim_min_kwh is greater than 0', async () => {
        const listOfAgents = await getListOfAgentsByMinKwh(1);
        expect(listOfAgents).toBeInstanceOf(Array);
    })
});