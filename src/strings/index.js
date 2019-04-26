const SCRIPT_REGEX = /<script[^>]*>([\S\s]*?)<\/script>/gim;
const TAG_REGEX = /<\/?[^>]+>/gi;
const TEMPLATE_FORMAT = /(\{[^}]+\})/gm;


/**
 * Removes all leading and trailing spaces from the given string
 *
 * @param {String} string   the string to trim
 * @return {String} a string with all leading and trailing spaces removed
 */
String.trim = (string) => string.replace(/^\s+/, "").replace(/\s+$/, "");


/**
 * Truncates this given string to the specified length and according to the given pattern
 *
 * @param {String} string           the string to truncate
 * @param {Number} length           the length to truncate to
 * @param {String} truncation       the default truncation pattern
 * @return {String} a string truncated to the specified length
 */
String.truncate = (string, length = 30, truncation = "...") => {
    return (string.length > length) ?
        `${string.slice(0, length - truncation.length)}${truncation}` : string;
};


/**
 * Formats the given string in a camel-case format by removing all dashes and capitalizing the resulting words
 *
 * @param {String} string       the string to format
 * @return {String} a camel-cased version of this string
 */
String.toCamelCase = (string) => {
    return string.replace(/-\D/g, (match) => match.charAt(1).toUpperCase());
};


/**
 * Capitalizes the first letter of the given string
 *
 * @param {String} string       the string to capitalize
 * @return {String} a string with the first letter capitalized
 */
String.capitalize = (string) => {
    return string.replace(/\b[a-z]/g, (match) => match.toUpperCase());
};


/**
 * Replaces all HTML special characters in the given string with the equivalent HTML entities
 *
 * @param {String} string       the string to HTML-escape
 * @return {String} a string with all HTML special characters replaced with their
 *  equivalent HTML entities
 */
String.escapeHTML = (string) => {
    return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};


/**
 * Removes all "script" tags from the given string
 *
 * @param {String} string       the string from which to remove the scripts
 * @return {String} a string with all "script" tags removed
 */
String.removeScripts = (string) => string.replace(SCRIPT_REGEX, "");


/**
 * Removes all HTML tags from the given string
 *
 * @param {String} string       the string from which to remove the HTML tags
 * @return {String} a string with all HTML tags removed
 */
String.removeTags = (string) => string.replace(TAG_REGEX, "");


/**
 * Returns true if the given string is empty; otherwise, returns false
 *
 * @param {String} string       the string to check
 * @return {Boolean} true if this string is empty; otherwise, returns false
 */
String.isEmpty = (string) => (String.trim(string).length === 0);


/**
 * Returns true if the given string contains the specified pattern; otherwise, returns false
 *
 * @param {String} string       the string to check
 * @param {String} pattern      the pattern to check in the string
 * @return {Boolean} true if this string contains the specified pattern; otherwise, returns false
 */
String.contains = (string, pattern) => (string.indexOf(pattern) !== -1);


/**
 * Returns true if the given string starts with the specified pattern; otherwise, returns false
 *
 * @param {String} string       the string to check
 * @param {String} pattern      the pattern to check in the string
 * @return {Boolean} true if this string starts with the specified pattern; otherwise, returns false
 */
String.startsWith = (string, pattern) => (string.indexOf(pattern) === 0);


/**
 * Returns true if the given string ends with the specified pattern; otherwise, returns false
 *
 * @param {String} string       the string to check
 * @param {String} pattern      the pattern to check in the string
 * @return {Boolean} true if this string ends with the specified pattern; otherwise, returns false
 */
String.endsWith = (string, pattern) => {
    const delta = string.length - pattern.length;
    return (delta > 0 && string.lastIndexOf(pattern) === delta);
};


/**
 * Creates a template based on the given string, and replaces its properties with those of the
 * specified replacement object
 *
 * @param {String} string           the string to format
 * @param {String} replacement      the object that contains the template values
 * @return {String} a string that is the result of replacing the properties of this string
 * with the values in the replacement object
 */
String.format = (string, replacement) => {
    return string.replace(TEMPLATE_FORMAT, (match) => {
        const key = match.substring(1, match.length - 1);
        return replacement[key] || match;
    });
};


/**
 * Returns a Unicode representation of the given string
 *
 * @param {String} string       the string to convert to Unicode
 * @return {String} a Unicode representation of this string
 */
String.toUnicode = (string) => {
    let result = "";

    for (let i = 0, len = string.length; i < len; i++) {
        let codePoint = string.charCodeAt(i).toString(16).toUpperCase();

        while (codePoint.length < 4) {
            codePoint = `0${codePoint}`;
        }

        codePoint = `\\u${codePoint}`;
        result += codePoint;
    }

    return result;
};
