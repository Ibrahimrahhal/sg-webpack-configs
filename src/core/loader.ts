import Utils from '../utils';


interface WebpackLoaderObject<T> {
    loader: string | (()=>void);
    options: T;
}

export default abstract class Loader<T> {

    protected abstract _name: string;
    protected abstract _desc: string;
    protected abstract _regex: RegExp;
    protected _env: 'dev' | 'prod' | 'both' = 'both';


    public abstract init(): WebpackLoaderObject<T>;

    public get name(): string {
        return this._name;
    }
    public get desc(): string {
        return this._desc;
    }
    public get regex(): RegExp {
        return this._regex;
    }

    public build(): WebpackLoaderObject<T> | null {
        if(Utils.configs.canRun(this._env)) return this.init();
        return null;
    }
}