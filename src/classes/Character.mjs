/** Creates Character objects */
export default class Character{
    /** Characters in the Game
     * @param {String} nickname Shortened name
     * @param {String} img the Image of the Character
     */
    constructor(name, fullName, nickname, img, locked) {
        this.name= name;
        this.fullName=fullName;
        this.nickname=nickname;
        this.img=img;
        this.version=1;
        this.locked=locked;
    }
}