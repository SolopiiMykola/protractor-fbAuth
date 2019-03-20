export const stringGen = len => {
    let text = '';
    const CHARSET = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < len; i++) {
        text += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
    }
    return text;
};