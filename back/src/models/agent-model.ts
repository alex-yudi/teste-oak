import { ArgsType, Field, ID, ObjectType } from "type-graphql";
import { Agent } from "@/@types/agent";
@ObjectType()
export class AgentModel implements Agent {
  @Field(type => ID)
  id: number;

  @Field(type => String)
  name: string;

  @Field(type => String)
  link_logo: string;

  @Field(type => String)
  state_origin: string;

  @Field(type => Number)
  cost_kwh: number;

  @Field(type => Number)
  lim_min_kwh: number;

  @Field(type => Number)
  total_customers: number;

  @Field(type => Number)
  evaluation_customers: number;
}