import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUndelegateAndUnbondLock, MsgSuperfluidUndelegateAndUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  /** Execute superfluid delegation for a lockup */
  superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse>;
  /** Execute superfluid undelegation for a lockup */

  superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse>;
  /**
   * For a given lock that is being superfluidly undelegated,
   * also unbond the underlying lock.
   */

  superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse>;
  /** Superfluid undelegate and unbond partial amount of the underlying lock. */

  superfluidUndelegateAndUnbondLock(request: MsgSuperfluidUndelegateAndUnbondLock): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse>;
  /** Execute lockup lock and superfluid delegation in a single msg */

  lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse>;
  unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse>;
  unlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.superfluidDelegate = this.superfluidDelegate.bind(this);
    this.superfluidUndelegate = this.superfluidUndelegate.bind(this);
    this.superfluidUnbondLock = this.superfluidUnbondLock.bind(this);
    this.superfluidUndelegateAndUnbondLock = this.superfluidUndelegateAndUnbondLock.bind(this);
    this.lockAndSuperfluidDelegate = this.lockAndSuperfluidDelegate.bind(this);
    this.unPoolWhitelistedPool = this.unPoolWhitelistedPool.bind(this);
    this.unlockAndMigrateSharesToFullRangeConcentratedPosition = this.unlockAndMigrateSharesToFullRangeConcentratedPosition.bind(this);
  }

  superfluidDelegate(request: MsgSuperfluidDelegate): Promise<MsgSuperfluidDelegateResponse> {
    const data = MsgSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
    return promise.then(data => MsgSuperfluidDelegateResponse.decode(new _m0.Reader(data)));
  }

  superfluidUndelegate(request: MsgSuperfluidUndelegate): Promise<MsgSuperfluidUndelegateResponse> {
    const data = MsgSuperfluidUndelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
    return promise.then(data => MsgSuperfluidUndelegateResponse.decode(new _m0.Reader(data)));
  }

  superfluidUnbondLock(request: MsgSuperfluidUnbondLock): Promise<MsgSuperfluidUnbondLockResponse> {
    const data = MsgSuperfluidUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
    return promise.then(data => MsgSuperfluidUnbondLockResponse.decode(new _m0.Reader(data)));
  }

  superfluidUndelegateAndUnbondLock(request: MsgSuperfluidUndelegateAndUnbondLock): Promise<MsgSuperfluidUndelegateAndUnbondLockResponse> {
    const data = MsgSuperfluidUndelegateAndUnbondLock.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegateAndUnbondLock", data);
    return promise.then(data => MsgSuperfluidUndelegateAndUnbondLockResponse.decode(new _m0.Reader(data)));
  }

  lockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate): Promise<MsgLockAndSuperfluidDelegateResponse> {
    const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
    return promise.then(data => MsgLockAndSuperfluidDelegateResponse.decode(new _m0.Reader(data)));
  }

  unPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool): Promise<MsgUnPoolWhitelistedPoolResponse> {
    const data = MsgUnPoolWhitelistedPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
    return promise.then(data => MsgUnPoolWhitelistedPoolResponse.decode(new _m0.Reader(data)));
  }

  unlockAndMigrateSharesToFullRangeConcentratedPosition(request: MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition): Promise<MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse> {
    const data = MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Msg", "UnlockAndMigrateSharesToFullRangeConcentratedPosition", data);
    return promise.then(data => MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse.decode(new _m0.Reader(data)));
  }

}