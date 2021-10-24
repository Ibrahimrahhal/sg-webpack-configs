import { Container, Inject, Service } from 'typedi';
import Configs from './configs';
import FileSystem from './filesystem';

@Service()
export class Utils {

    @Inject()
    public fileSystem: FileSystem;

    @Inject()
    public configs: Configs;
}


export default Container.get(Utils);