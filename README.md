# Yung C++ CLI Tool

![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![Build Status](https://travis-ci.org/ChrisCates/YungCLI.svg?branch=master)](https://travis-ci.org/ChrisCates/YungCLI)
[![Coverage Status](https://coveralls.io/repos/github/ChrisCates/YungCLI/badge.svg?branch=master)](https://coveralls.io/github/ChrisCates/YungCLI?branch=master)
![NPM Version](https://img.shields.io/badge/npm-v6.4.1-blue.svg)
![Node Version](https://img.shields.io/badge/node-v10.14.1-blue.svg)

## This repository has been archived

### All future development continues at the [CLI-WSF](https://github.com/YungSociety/CLI-WSF) repository.

Use this CLI tool to easily bootstrap new Yung C++ projects and create project templates.

## Installation

```bash
(sudo) npm install yungcli -g
# or with yarn
yarn global add yungcli
```

## Creating a new project

**Generate a new YungC++ project in a new folder called `/Hello`**:

```bash
yungcli new project Hello
```

## Generate a new route

**Run the command**:

```bash
yungcli new route Hello
```

**This will create `./routes/Hello.route.hpp`**:

```c++
#include "../Shared.hpp"

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

#endif
```

## Generate a new service

**Run the command**:

```bash
yungcli new service Hello
```

**This will create `./services/Hello.service.hpp`**:

```c++
#include "../Shared.hpp"

#ifndef _HELLOSERVICE_H
#define _HELLOSERVICE_H 1

namespace yungservice {
    web::json::value hello(web::json::value info) {
        return info;
    }
}

#endif
```
