/* ref: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript */
export default () => {
    /* eslint-disable no-bitwise, no-magic-numbers */
    let d = new Date().getTime();

    return "xxxxxxxx-xxxx-4xxx-Yxxx-xxxxxxxxxxxx".replace(/[xY]/g, (c) => {
        const r = Math.floor((d + Math.random() * 16) % 16);
        d = Math.floor(d / 16);
        return ((c === "Y" && (r & 3) | 8) || r).toString(16);
    });
    /* eslint-enable no-bitwise, no-magic-numbers */
};
