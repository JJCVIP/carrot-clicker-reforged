/** Creates Character objects */
export default class Character{
    /** Characters in the Game
     * @param {String} nickname Shortened name
     * @param {String} img the Image of the Character
     */
    constructor(nickname, img) {
        this.nickname=nickname;
        this.img=img;
        this.version=1;
    }
    unlock(){
        //possibly a method to unlock the characters
    }
    lock(){
        //possibly a method to lock the characters
    }
}