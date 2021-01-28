import { LocalBranch } from "./local_branch";
import { Role } from "./role";
import { Stash } from "./stash";

export class User {
    id: number;
    username: string;
    password: string;
    role: Role;
    stash_items: Stash[];
    local_branches: LocalBranch[];
}