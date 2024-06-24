import path from 'path';
import fs from 'fs';
import sassTrue from 'sass-true';

/**
 * Recursively get all files with a specific extension in a directory
 *
 * @param dir
 * @param ext
 * @param files
 * @returns {*[]}
 */
function getFiles(dir, ext, files = []) {
	fs.readdirSync(dir).forEach(file => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			getFiles(filePath, ext, files);
		} else if (path.extname(file) === ext) {
			files.push(filePath);
		}
	});

	return files;
}

const sassTestFiles = getFiles(path.resolve(process.cwd(), 'tests'), '.scss');

sassTestFiles.forEach(sassFile =>
	sassTrue.runSass({ describe, it }, sassFile)
);
