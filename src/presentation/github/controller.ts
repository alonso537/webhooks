import { Request, Response } from "express"


export class GithubController  {
    constructor(
        // private readonly githubService: GithubService
    ) {}

    webhookhandler = (req: Request, res: Response) => {
        console.log('webhookhandler')

        res.send('Hello World!')
    }
}