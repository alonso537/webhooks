import { GithubIssuePayload, GithubStarPayload } from "../interfaces";


export class GithubService {
    constructor(){}

    onStar(payload: GithubStarPayload): string {
        let message: string = '';

        const {starred_at, action, sender, repository} = payload;

        // console.log('starred_at', starred_at);

        if(starred_at) {
            message = `🌟 User ${sender.login} ${action} ${repository.full_name} 🌟`
        }
        

        return  message;
    }

    onIssue(payload: GithubIssuePayload): string {
        let message: string = '';

        const {action, issue, sender, repository} = payload;

        // console.log('action', action);

        if(action === 'opened') {
            message = `🔥 User ${sender.login} ${action} ${repository.full_name} 🔥`
        }


        return message;
    }
}