export interface IModule {
    init: () => Promise<void>;
}