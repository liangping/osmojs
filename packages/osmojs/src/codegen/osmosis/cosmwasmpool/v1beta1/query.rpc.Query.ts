import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse } from "./query";
export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
  }

  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.cosmwasmpool.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    }

  };
};