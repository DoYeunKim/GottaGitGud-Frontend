import { Commit } from "./commit";

export class Branch {
    id: number;
    contents: string;
    commits: Commit[];
}