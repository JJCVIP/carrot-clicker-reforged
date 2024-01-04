/** Creates Character objects */
export default class Character{
    /** Characters in the Game
     * @param {String} nickname Shortened name
     * @param {String} img the Image of the Character
     */
    constructor(name, nickname, img) {
        this.name= name;
        this.nickname=nickname;
        this.img=img;
        this.version=1;
    }
}