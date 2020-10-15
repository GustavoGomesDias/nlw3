import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        //Salva no disco
        // __dirname retorna até config
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`
            cb(null, fileName);
        },
    })
};