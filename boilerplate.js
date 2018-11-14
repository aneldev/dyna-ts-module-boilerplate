const fs = require('fs');

const projectName = process.cwd().replace(/\\/g, '/').split('/').reverse()[0];
const _package = JSON.parse(fs.readFileSync('./package.json').toString());

const scriptsToRemove = [
	'create',
	'.creation-prepare',
	'.creation-install',
	'.creation-done',
];
scriptsToRemove.forEach(scriptName => delete _package.scripts[scriptName]);

_package.name = projectName;
_package.version = '0.0.1';
_package.author = '';
_package.description = 'The ' + projectName;
_package.repository.url = 'http://github.com/YOUR_ACCOUNT/' + projectName;

fs.writeFileSync('./package.json', JSON.stringify(_package, null, 2));
fs.unlinkSync('./boilerplate.js');

console.log('       vv');
console.log('      vv');
console.log('vv   vv');
console.log(' vv vv');
console.log('  vvv      module ' + projectName + ' is created successfully');
