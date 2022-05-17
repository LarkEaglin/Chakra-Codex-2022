export interface Roles{
    subscriber?: boolean;
    editor?: boolean;
    
}
export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    myCustomData?: string;
    roles?: Roles;
}