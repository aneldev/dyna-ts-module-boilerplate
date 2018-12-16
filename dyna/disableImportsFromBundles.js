var fs = require('fs');

const bundleFiles = [
	"./web.js",
	"./node.js",
];

const disableImport = getDisableImports();

if (disableImport.length) {
	console.log(`Disabling ${disableImport.length} import from the bundles (experimental)`);
	bundleFiles.forEach(processFile);
	console.log('Disabling import completed');
}
else {
	console.log(`Disabling none imports from the bundles`);
}

function processFile(bundleName) {
	console.log('processing', bundleName);
	let data = fs.readFileSync(bundleName, "utf8");
	disableImport.forEach(disableImport => {
		const pos = data.indexOf(`module.exports = require("${disableImport}")`);
		if (pos > -1) {
			data = stringInsert(data, pos, "// disableImport -> ");
		}
		else {
			console.error(`disableImports: import [${disableImport}] not found in the bundle [${bundleName}]`)
		}
		fs.writeFileSync(bundleName, data, "utf8");
	});
}

function stringInsert(text, position, subText) {
	return [text.slice(0, position), subText, text.slice(position)].join('');
}

function getDisableImports() {
	const packageJson = loadJSON('./package.json');
	return packageJson.dyna && packageJson.dyna.disableImportsFromBundles || [];
}

function loadJSON(filename) {
	return JSON.parse(fs.readFileSync(filename, 'utf8'));
}