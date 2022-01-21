import glob from 'glob';
import path from 'path';
import * as components from './index';

// add module name here to get ignored
const ignoredModules = ['index'];

describe('components/index', () => {
  it('should export all Components inside components folder', (done) => {
    glob(
      path.resolve(__dirname, '**/!(*.spec|*.test|*.stories|*.styles|_*).js'),
      {},
      (err, files) => {
        const moduleNames = files
          .map((filePath) => path.basename(filePath, '.js'))
          .filter((fileName) => !ignoredModules.includes(fileName));

        moduleNames.forEach((moduleName) => {
          expect({ module: moduleName, export: components[moduleName] }).toEqual({
            module: moduleName,
            export: expect.anything(),
          });
        });

        done();
      }
    );
  });
});