import express from 'express';
import { envs } from './config/envs';

(() => {
    main()
})();

function main() {
    const app = express()

    app.post('/api/github', (req, res) => {
        res.send('Hello World!')
    
    })


    app.listen(envs.PORT, () => {
        console.log(`Server running on port ${envs.PORT}`)
    })
}