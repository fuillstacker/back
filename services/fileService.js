const fs = require('fs');
const File = require('../models/File');
const config = require('config');

class FileService {
    createDir(req, file) {
        const filePath = getPath(req, file)
        return new Promise((resolve, reject) => {

            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath);
                    return resolve({ msg: 'File directory was created' }); 
                } else {
                    return reject({ msg: 'File directory already exists' });
                }
            } catch (e) {
                return reject({ msg: 'Error creating file directory' }); 
            }

        });
    }
    getPath(req, file) {
        return req.filePath + '\\' + file.user + '\\' + file.path
    }

     deleteFile(req, file) {
        const path = getPath(req, file)
        if (file.type === 'dir') {
            fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }
}

module.exports = new FileService();