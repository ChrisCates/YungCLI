import { join } from 'path';

declare const __dirname, process;

export const dbPath = join(__dirname, '.trusty');
export const rootDir = __dirname;
export const cwd = process.cwd();

export const optionsObj = {
    new: ['n', 'Create a new project', 'string'],
    route: ['r', 'Create a new template route', 'string'],
    service: ['s', 'Create a new template service', 'string'],
};
