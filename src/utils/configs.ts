import { Service } from 'typedi';

@Service()
export default class Configs {

    public get environment(): 'prod' | 'dev' {
        return 'prod';
    }

    public canRun(env: 'prod' | 'dev' | 'both'): boolean{
        return (env === 'both') || (env === this.environment);
    }

}