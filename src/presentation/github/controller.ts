import { Request, Response } from "express"


export class GithubController  {
    constructor(
        // private readonly githubService: GithubService
    ) {}

    webhookhandler = (req: Request, res: Response) => {
        // console.log('webhookhandler')/

        const githubEvent = req.headers['x-github-event'] ?? '';
        // const githubSignature = req.headers['x-hub-signature-256'] ?? '';
        const payload = req.body

        console.log('githubEvent', githubEvent);
        

        
        

        res.status(202).send('ok')
    }
}