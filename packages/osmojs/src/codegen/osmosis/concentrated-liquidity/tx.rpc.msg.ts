import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreatePosition, MsgCreatePositionResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse, MsgCollectFees, MsgCollectFeesResponse, MsgCollectIncentives, MsgCollectIncentivesResponse, MsgFungifyChargedPositions, MsgFungifyChargedPositionsResponse } from "./tx";
export interface Msg {
  createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse>;
  withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse>;
  collectFees(request: MsgCollectFees): Promise<MsgCollectFeesResponse>;
  collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse>;
  fungifyChargedPositions(request: MsgFungifyChargedPositions): Promise<MsgFungifyChargedPositionsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPosition = this.createPosition.bind(this);
    this.withdrawPosition = this.withdrawPosition.bind(this);
    this.collectFees = this.collectFees.bind(this);
    this.collectIncentives = this.collectIncentives.bind(this);
    this.fungifyChargedPositions = this.fungifyChargedPositions.bind(this);
  }

  createPosition(request: MsgCreatePosition): Promise<MsgCreatePositionResponse> {
    const data = MsgCreatePosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CreatePosition", data);
    return promise.then(data => MsgCreatePositionResponse.decode(new _m0.Reader(data)));
  }

  withdrawPosition(request: MsgWithdrawPosition): Promise<MsgWithdrawPositionResponse> {
    const data = MsgWithdrawPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "WithdrawPosition", data);
    return promise.then(data => MsgWithdrawPositionResponse.decode(new _m0.Reader(data)));
  }

  collectFees(request: MsgCollectFees): Promise<MsgCollectFeesResponse> {
    const data = MsgCollectFees.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectFees", data);
    return promise.then(data => MsgCollectFeesResponse.decode(new _m0.Reader(data)));
  }

  collectIncentives(request: MsgCollectIncentives): Promise<MsgCollectIncentivesResponse> {
    const data = MsgCollectIncentives.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "CollectIncentives", data);
    return promise.then(data => MsgCollectIncentivesResponse.decode(new _m0.Reader(data)));
  }

  fungifyChargedPositions(request: MsgFungifyChargedPositions): Promise<MsgFungifyChargedPositionsResponse> {
    const data = MsgFungifyChargedPositions.encode(request).finish();
    const promise = this.rpc.request("osmosis.concentratedliquidity.v1beta1.Msg", "FungifyChargedPositions", data);
    return promise.then(data => MsgFungifyChargedPositionsResponse.decode(new _m0.Reader(data)));
  }

}