let fs = require('fs');
let execSync = require('child_process').execSync;

const globalPackage = JSON.parse(fs.readFileSync('./package.json').toString());

module.exports.create = function (moduleName, withReact) {

  exec('mkdir ' + moduleName, 'Cannot create path ./' + moduleName + ' under ' + process.cwd());

  exec('cd ' + moduleName, 'Cannot change to path ./' + moduleName + ' under ' + process.cwd())

  exec('git clone ' + globalPackage.repository.url, 'Cannot git clone repo: [' + globalPackage.repository.url + ']')

  exec('rm -rf ./.git', 'Cannot clean up the source repo');

  exec('rm package-lock.json', 'Cannot clean up the package-lock.json');

  exec('mv README.md README.boilerplate.md', 'Cannot prepare the README.md');

  // update the tsconfig.json
  if (!withReact) {
    method(
      function () {
        let tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json').toString());
        delete tsconfig.compilerOptions.jsx;
        fs.writeFileSync('./tsconfig.json', JSON.stringify(tsconfig, null, 2));
      },
      'Cannot update the tsconfig.json'
    );
  }

  // update the package.json - uninstall react deps
  if (!withReact) {
    exec('npm uninstall --save react', 'Cannot npm uninstall react (1/2)');
    exec('npm uninstall --save-dev babel-preset-react babel-plugin-react-transform', 'Cannot npm uninstall react (2/2)');
  }

  // update the package.json - init for the new module
  method(
    function () {
      let package_ = JSON.parse(fs.readFileSync('./package.json').toString());
      delete package_.bin;
      package_.name = moduleName;
      package_.version = '0.0.1';
      package_.author = '';
      package_.repository.url = '';
      fs.writeFileSync('./package.json', JSON.stringify(package_, null, 2));
    },
    'Cannot update the package'
  );

  exec(
    'rm -rf ./boilerplate',
    'Cannot clean up the boilerplate, this is not a critical error, just delete the ./boilerplate folder',
    true
  );

  let success = exec(
    'npm install',
    'Cannot npm install',
    true,
  );

  if (success){
    endProcessSuccess('Success creation');
  }

};

function exec(command, errorMessage, warn) {
  try {
    execSync(command);
    return true;
  } catch (error) {
    if (warn) {
      endProcessWarning(errorMessage, error);
    }
    else {
      endProcessFailed(errorMessage, error);
    }
    return false;
  }
}

function method(cb) {
  try {
    cb();
  } catch (error) {
    endProcessFailed(errorMessage, error);
  }
}

function endProcessSuccess(message) {
  console.log('        vv');
  console.log('       vv');
  console.log('      vv');
  console.log('vv   vv');
  console.log(' vv vv');
  console.log('  vvv      Info: module ' + moduleName + ': ' + message);
  process.exit(0)
}

function endProcessFailed(message, data) {
  console.log('xx     xx');
  console.log(' xx   xx');
  console.log('  xx xx');
  console.log('   xxx');
  console.log('  xx xx');
  console.log(' xx   xx');
  console.log('xx     xx');
  console.error('Error: module ' + moduleName + ': ' + message, data);
  process.exit(1)
}

function endProcessWarning(message, data) {
  console.log('  vv');
  console.log('  vv');
  console.log('  vv');
  console.log('  vv');
  console.log('');
  console.log('  vv      Warning: module ' + moduleName + ': ' + message, data);
}

