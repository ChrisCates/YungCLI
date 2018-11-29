declare var describe, process, it, require;
import 'colors';

const fs = require('fs-jetpack');

import { assert } from 'chai';
import { join } from 'path';

import { cwd } from '../config';
import { REPO_URL, start } from '../yungcli'
import { download, route, service } from '../interface';

describe(`Basic test functionality`, () => {

    it(`Should save the test text file`, done => {
        download(REPO_URL, `${cwd}/cache/archive`);
        done();
    });

    it(`Should generate test route`, done => {
        route('test');
        done();
    });

    it(`Should generate test service`, done => {
        service('test');
        done();
    });

    it(`Should try to run CLI tool`, done => {
        start();
        done();
    });

    it(`Should clean up redundant files`, done => {
        fs.remove(`${cwd}/routes`);
        fs.remove(`${cwd}/services`);
        fs.remove(`${cwd}/hello`);
        done();
    });

});
