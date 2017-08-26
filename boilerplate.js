let fs = require('fs');

const withReact = fs.existsSync('./node_modules/react');

function removeReact() {
  let tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json').toString());
  delete tsconfig.compilerOptions.jsx;
  fs.writeFileSync('./tsconfig.json', JSON.stringify(tsconfig, null, 2));
}

function cleanUpPackage() {
  let scriptsToRemove = [
    'create-module',
    'create-module-with-react',
    '.creation-prepare',
    '.creation-install',
    '.creation-done',
  ];
  let package = JSON.parse(fs.readFileSync('./package.json').toString());

  scriptsToRemove.forEach(scriptName => delete package.scripts[scriptName]);
  package.name = 'my-ts-module';
  package.version = '0.0.1';
  package.author = '';
  package.repository.url = '';

  fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));
}

if (!withReact) removeReact();
cleanUpPackage();
fs.unlinkSync('./boilerplate.js');

