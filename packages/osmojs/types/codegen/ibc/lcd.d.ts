export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        base: {
            node: {
                v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
            };
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
            v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
    ibc: {
        applications: {
            fee: {
                v1: import("./applications/fee/v1/query.lcd").LCDQueryClient;
            };
            interchain_accounts: {
                controller: {
                    v1: import("./applications/interchain_accounts/controller/v1/query.lcd").LCDQueryClient;
                };
                host: {
                    v1: import("./applications/interchain_accounts/host/v1/query.lcd").LCDQueryClient;
                };
            };
            transfer: {
                v1: import("./applications/transfer/v1/query.lcd").LCDQueryClient;
            };
        };
        core: {
            channel: {
                v1: import("./core/channel/v1/query.lcd").LCDQueryClient;
            };
            client: {
                v1: import("./core/client/v1/query.lcd").LCDQueryClient;
            };
            connection: {
                v1: import("./core/connection/v1/query.lcd").LCDQueryClient;
            };
        };
    };
}>;
