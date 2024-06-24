import path from 'path';
import sassTrue from 'sass-true';

const sassFile = path.join(__dirname, 'test.scss');
sassTrue.runSass({ describe, it }, sassFile);
