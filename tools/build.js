import webpack from 'webpack';
import config from '../webpack.config.prod';
import {chalkError, chalkSuccess, chalkWarning, chalkProcessing} from './chalk.config';
import ora from 'ora';

process.env.NODE_ENV = 'production';

console.log(chalkProcessing('Packaging Profile for Production'));

// const spinner = ora('building for production');
// spinner.start();

webpack(config).run((error, stats) => {
    chalkProcessing('start');
    if (error) {
        console.log(chalkError(error));
        return 1;
    }
    chalkProcessing('end');
    return 0;
});