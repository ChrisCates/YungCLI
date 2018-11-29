declare var process, require, __dirname;

import { cwd } from './config';

const fs = require('fs-jetpack');
const request = require('request');
const ADM = require('adm-zip');

export function download(url, path) {
    fs.dir(path);

    request.get({ url, encoding: null }, (err, res, body) => {
        const zip = new ADM(body);
        const files = zip.getEntries();

        files.forEach(file => {
            if (!file.isDirectory) {
                const filePath = file.entryName.replace('YungCPP-master', '');
                const content = zip.readAsText(file);
                fs.write(`${path}${filePath}`, content);
            }
        });

        console.log(`Created a new Yung C++ project in ${path}`.green.bold);
    });
}

export function route(name) {
    let template = `#include "../Shared.hpp"

#ifndef _HELLOROUTE_H
#define _HELLOROUTE_H 1

namespace yungroute {
    std::pair<web::http::status_code, std::string> hello() {
        web::json::value info;
        unsigned short status = 200;

        info = yungservice::metadata(info);

        std::string payload = info.serialize().c_str();
        return make_pair(status, payload);
    }
}

#endif`;
    const templateH = `_${name.toUpperCase()}ROUTE_H`;
    const templateUrl = `${cwd}/routes/${name}.route.hpp`;
    template = template.replace('_HELLOROUTE_H', templateH).replace('_HELLOROUTE_H', templateH);
    fs.write(templateUrl, template);

    console.log(`Created a new Yung C++ route in ${templateUrl}`.green.bold);
}

export function service(name) {
    let template = `#include "../Shared.hpp"

#ifndef _HELLOSERVICE_H
#define _HELLOSERVICE_H 1

namespace yungservice {
    web::json::value hello(web::json::value info) {
        return info;
    }
}

#endif`;
    const templateH = `_${name.toUpperCase()}SERVICE_H`;
    const templateUrl = `${cwd}/services/${name}.service.hpp`;
    template = template.replace('_HELLOSERVICE_H', templateH).replace('_HELLOSERVICE_H', templateH);
    fs.write(templateUrl, template);

    console.log(`Created a new Yung C++ service in ${templateUrl}`.green.bold);
}

