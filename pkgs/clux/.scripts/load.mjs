import fs from 'fs';
import path from 'path';

/**
 * Convert kebab or snake case to PascalCase.
 */
function toPascalCase(name) {
	return name
		.split(/[-_]/)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

const baseDir = 'src/lib/components';

/**
 * Recursively find components with `elements` directories.
 * A valid "root" file is now `<foldername>.svelte`.
 */
function findComponents(dir = baseDir) {
	const components = [];

	fs.readdirSync(dir).forEach((item) => {
		const itemPath = path.join(dir, item);
		if (!fs.statSync(itemPath).isDirectory()) return;

		const elementsPath = path.join(itemPath, 'elements');
		if (fs.existsSync(elementsPath) && fs.statSync(elementsPath).isDirectory()) {
			const files = fs.readdirSync(elementsPath).filter((file) => file.endsWith('.svelte'));
			const folderName = path.basename(itemPath);
			const rootFile = files.find((f) => f === `${folderName}.svelte`) || null;
			const subComponents = files.map((file) => path.basename(file, '.svelte'));

			components.push({ dir: itemPath, subComponents, rootFile });
		} else {
			components.push(...findComponents(itemPath));
		}
	});

	return components;
}

function ensureFolderFile(componentDir) {
	const folderFile = path.join(componentDir, `elements.ts`);
	if (!fs.existsSync(folderFile)) {
		fs.writeFileSync(folderFile, 'export {};', 'utf-8');
		console.log(`Ensured folder file exists: ${folderFile}`);
	}
}

function generateRootComponentFile(componentDir, subComponents, rootFile) {
	const folderName = path.basename(componentDir);
	const componentName = toPascalCase(folderName);
	const outputFile = path.join(componentDir, `elements.ts`);

	const subComponentImports = subComponents
		.filter((name) => name !== folderName)
		.map((name) => `import ${toPascalCase(name)} from './elements/${name}.svelte';`)
		.join('\n');

	const subComponentAssignments = subComponents
		.filter((name) => name !== folderName)
		.map(
			(name) =>
				`${componentName}.${toPascalCase(name)} = ${toPascalCase(name)} as ${componentName}Type['${toPascalCase(name)}'];`
		)
		.join('\n');

	const fileContent = `
// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/${rootFile}';
${subComponentImports}

type ${componentName}Type = typeof Root & {
${subComponents
	.filter((name) => name !== folderName)
	.map((name) => `  ${toPascalCase(name)}: SubComponent<typeof ${toPascalCase(name)}>;`)
	.join('\n')}
};

const ${componentName} = Root as ${componentName}Type;
${subComponentAssignments}

export default ${componentName};
`.trim();

	fs.writeFileSync(outputFile, fileContent, 'utf-8');
	console.log(`Generated component file with root: ${outputFile}`);
}

function generateExportFile(componentDir, subComponents) {
	const exportFile = path.join(componentDir, 'elements/__index__.ts');
	const folderName = path.basename(componentDir);
	const isSingleRootOnly = subComponents.length === 1 && subComponents[0] === folderName;

	let exportContent;

	if (isSingleRootOnly) {
		exportContent = `// This file is auto-generated. Do not edit manually.
import ${toPascalCase(folderName)} from './${folderName}.svelte';
export default ${toPascalCase(folderName)};`;
	} else {
		const header = `// This file is auto-generated. Do not edit manually.\n`;
		const exports = subComponents
			.map((name) => `export { default as ${toPascalCase(name)} } from './${name}.svelte';`)
			.join('\n');
		exportContent = `${header}${exports}`;
	}

	fs.writeFileSync(exportFile, exportContent, 'utf-8');
	console.log(`Generated export file: ${exportFile}`);
}
function generateFolderExportFile(componentDir, subComponents) {
	const folderFile = path.join(componentDir, `elements.ts`);
	const folderName = path.basename(componentDir);
	const isSingleRootOnly = subComponents.length === 1 && subComponents[0] === folderName;

	const fileContent = isSingleRootOnly
		? `// This file is auto-generated. Do not edit manually.
export { default } from './elements/__index__.js';`
		: `// This file is auto-generated. Do not edit manually.
export * as default from './elements/__index__.js';`;

	fs.writeFileSync(folderFile, fileContent, 'utf-8');
	console.log(`Generated folder export file: ${folderFile}`);
}



export async function generateComponents() {
	console.log('Starting component generation process...');
	const components = findComponents();

	if (components.length === 0) {
		console.log('No valid components found.');
		return;
	}

	for (const { dir, subComponents, rootFile } of components) {
	const folderName = path.basename(dir);

	const isSingleRootOnly =
		subComponents.length === 1 &&
		subComponents[0] === folderName &&
		rootFile === `${folderName}.svelte`;

	if (isSingleRootOnly) {
		console.log(`Processing ${dir} as single-root-only`);
		generateExportFile(dir, subComponents);
		generateFolderExportFile(dir, subComponents); // <--- Pass subComponents
	} else if (rootFile) {
		console.log(`Processing ${dir} with root file: ${rootFile}`);
		ensureFolderFile(dir);
		generateRootComponentFile(dir, subComponents, rootFile);
	} else {
		console.log(`Processing ${dir} with no root file`);
		generateExportFile(dir, subComponents);
		generateFolderExportFile(dir, subComponents); // <--- Pass subComponents
	}
}


	console.log('Component generation completed.');
}


function generateComponentsIndex(baseDir = 'src/lib/components') {
	const outputFile = path.join(baseDir, 'index.ts');
	const exports = [];

	function walk(dir) {
		const files = fs.readdirSync(dir);
		let hasElements = false;

		for (const file of files) {
			const fullPath = path.join(dir, file);
			const stats = fs.statSync(fullPath);

			if (stats.isDirectory()) {
				if (file === 'elements') {
					hasElements = true;
				} else {
					walk(fullPath);
				}
			}
		}

		if (hasElements) {
			const relDir = path.relative(baseDir, dir);
			const componentName = path.basename(dir);
			const pascalName = toPascalCase(componentName);
			const importPath = `$lib/components/${relDir}/elements.js`.replace(/\\/g, '/');
			exports.push(`export { default as U${pascalName} } from '${importPath}';`);
		}
	}

	walk(baseDir);
	fs.writeFileSync(outputFile, `// This file is auto-generated. Do not edit manually.\n${exports.join('\n')}\n`);
	console.log(`Generated components index: ${outputFile}`);
}
(async () => {
	await generateComponents();
	generateComponentsIndex(); // <-- ADD THIS
})();
