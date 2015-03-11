function $(selector) {
    if (selector[0] === '.') {
        return document.getElementsByClassName(selector.substring(1));
    } else if (selector[0] === '#') {
        return document.getElementById(selector.substring(1));
    } else if (selector[0] != '.' && selector != '#') {
        return document.getElementsByTagName(selector);
    }
}

