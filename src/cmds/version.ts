import * as fs from 'fs';
const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = json.version;

export default () => {
	console.log(`v${version}`);
};
