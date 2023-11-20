import { Request, Response } from "express"
import { GithubService } from "../../services/github.service";


export class GithubController  {
    constructor(
        private readonly githubService = new GithubService()
    ) {}

    webhookhandler = (req: Request, res: Response) => {
        // console.log('webhookhandler')/

        const githubEvent = req.headers['x-github-event'] ?? '';
        // const githubSignature = req.headers['x-hub-signature-256'] ?? '';
        const payload = req.body
        let message:string = '';

        // console.log('githubEvent', githubEvent);

        // console.log(JSON.stringify(payload));

        switch (githubEvent) {
            case 'star':
                message = this.githubService.onStar(payload)
                break;
            case 'issues':
                // this.githubService.onIssue(payload)
                break;
            default:
                message = 'Event not supported'
                
        }
        
        

        
        console.log(message);
        

        res.status(202).send('ok')
    }
}