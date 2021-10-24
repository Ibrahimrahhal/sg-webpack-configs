import Utils from '../utils';
import { Configuration } from 'webpack';

export default abstract class Configs {

    protected abstract _name: string;
    protected abstract _desc: string;
    protected _env: 'dev' | 'prod' | 'both' = 'both';
    protected _isOptimization: boolean = false;



    public abstract init(): Configuration;

    public get name(): string {
        return this._name;
    }
    public get desc(): string {
        return this._desc;
    }

    public build(): Configuration {
        return this.init();
    }
    
}