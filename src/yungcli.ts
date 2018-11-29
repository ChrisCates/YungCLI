declare const process;
export const REPO_URL = 'https://codeload.github.com/ChrisCates/YungCPP/zip/master';

import 'colors';

import { parse } from 'cli';
import { optionsObj } from './config';
import { download, route, service } from './interface';

export function start() {
    const options = parse(optionsObj, null);

    if (options['new']) {
        console.log(`Creating a new project in ${options['new']}`.green.bold);
        download(REPO_URL, options['new']);
    } else if (options['route']) {
        const routeUrl = `${options['route']}`;
        console.log(`Creating a new route ${routeUrl}`.green.bold);
        route(routeUrl);
    } else if (options['service']) {
        const serviceUrl = `${options['service']}`;
        console.log(`Creating a new service ${serviceUrl}`.green.bold);
        service(serviceUrl);
    } else {
        console.log(`You need to specify a directory when using the --save or --use flag`.red.bold)
    }
}

if (process.env['LOADED_MOCHA_OPTS'] != 'true') {
    start();
}
