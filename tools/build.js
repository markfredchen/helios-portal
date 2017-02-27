import webpack from 'webpack';
import config from '../webpack.config.prod';
import {chalkError, chalkSuccess, chalkWarning, chalkProcessing} from './config/chalk.config';
import ora from 'ora';

process.env.NODE_ENV = 'production';

console.log(chalkProcessing('BUILDING FOR PRODUCTION'));

const spinner = ora('BUILDING FOR PRODUCTION');
spinner.start();

webpack(config).run((error, stats) => {
    console.log(chalkProcessing('start'));
    if (error) {
        console.log(chalkError(error));
        return 1;
    }
    console.log(chalkSuccess(stats));
    console.log(chalkSuccess("================================="));
    console.log(chalkSuccess("BUILD SUCCESS!!!"));
    console.log(chalkSuccess("================================="));
    spinner.stop();
    return 0;
});
