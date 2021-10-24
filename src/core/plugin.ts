import Utils from '../utils';

export default abstract class Plugin {

    protected abstract _name: string;
    protected abstract _desc: string;
    protected _env: 'dev' | 'prod' | 'both' = 'both';
    protected _isOptimization: boolean = false;



    public abstract init(): (()=>void);

    public get name(): string {
        return this._name;
    }
    public get desc(): string {
        return this._desc;
    }
    public get isOptimization(): boolean {
        return this._isOptimization;
    }

    public build(): (()=>void) | null {
        if(Utils.configs.canRun(this._env)) return this.init();
        return null;
    }
}