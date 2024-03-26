import { AgentModel } from "@/models/agent-model";
import { getListOfAgentsByMinKwh } from "@/services/get-list-of-agents-by-min-kwh";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver(AgentModel)
export class FetchAgentsByMinKwhResolver {

    @Query(returns => [AgentModel])
    async fetchAgentsByMinKwh(
        @Arg("lim_min_kwh", type => Number)
        lim_min_kwh: number
    ): Promise<AgentModel[]> {

        const listOfAgents = await getListOfAgentsByMinKwh(lim_min_kwh);

        return listOfAgents;
    }
}
