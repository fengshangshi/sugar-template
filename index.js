/**
 * @file 模板
 * @author ss.feng
 */
'use strict'

const fs = require('fs');
const cache = require('sugar-utils').cache;


// 读取模板
exports.get = function(file) {
    if (fs.existsSync(file) === false) {
        return false;
    }

    // 优先从缓存中读取
    if (cache.has(file)) {
        return cache.get(file);
    }

    // 读取模板文件
    let template = fs.readFileSync(file, {
        encoding: VIEWENCODING || 'utf8',
    });

    // 写入缓存
    return cache.set(file, template).get(file);
};
