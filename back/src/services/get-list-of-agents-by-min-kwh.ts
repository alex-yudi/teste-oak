import { prisma } from "@/lib/prisma";

export async function getListOfAgentsByMinKwh(lim_min_kwh: number) {
    if (lim_min_kwh <= 0) {
        throw new Error("The value of lim_min_kwh must be greater than 0");
    }
    
    const listOfAgents = await prisma.agent.findMany({
        where: {
            lim_min_kwh: {
                gt: lim_min_kwh,
            }
        }
    });

    return listOfAgents;
}