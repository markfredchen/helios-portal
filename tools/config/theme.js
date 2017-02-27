import {join, resolve} from 'path';


let packageJSONPath = join(__dirname, '../../package.json');
console.log(packageJSONPath);
const packageJSON = require(packageJSONPath);

console.log(packageJSONPath);
const getThemeConfig = require(join(__dirname, `../../${packageJSON.theme}`));
const theme = getThemeConfig();

export default theme;
