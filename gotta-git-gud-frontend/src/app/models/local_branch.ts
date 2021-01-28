import { Commit } from "./commit";

export class LocalBranch {
    id: number;
    contents: string;
    current_commit: Commit;
}