export class Authpair {
    isAuthenticated:boolean;
    type:String;
    constructor(isA:boolean,t:String){
        this.isAuthenticated=isA;
        this.type=t;
    }
}
