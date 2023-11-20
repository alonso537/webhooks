import express from 'express';
import { envs } from './config/envs';
import { GithubController } from './presentation/github/controller';

(() => {
    main()
})();

function main() {
    const app = express()

    const githubController = new GithubController()

    app.post('/api/github', githubController.webhookhandler)


    app.listen(envs.PORT, () => {
        console.log(`Server running on port ${envs.PORT}`)
    })
}