import Character from "./Character.mjs";
export default class Scholar extends Character{
    constructor(nickname, img){
        super(nickname,img);
        this.version = 1;
    }
}
