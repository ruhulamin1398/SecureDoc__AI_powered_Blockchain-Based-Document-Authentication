"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concat = require("concat-stream");
class MemoryStorage {
    _handleFile(_req, file, cb) {
        file.stream.pipe(concat({ encoding: 'buffer' }, function (data) {
            cb(null, {
                buffer: data,
                size: data.length,
            });
        }));
    }
    _removeFile(_req, file, cb) {
        delete file.buffer;
        cb(undefined);
    }
}
exports.default = () => new MemoryStorage();
//# sourceMappingURL=memory.js.map