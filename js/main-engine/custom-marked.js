const renderer = {
    blockquote(tokens) {
        const body = marked.parse(tokens);
        return `<blockquote class="blockquote">\n${body}</blockquote>\n`;
    },
    image(href, title, text) { 
        const cleanHref = encodeURI(href).replace(/%25/g, '%');
        if (cleanHref === null) {
            return text;
        }
        href = cleanHref;

        return '<div class="row">'
            + '<div class="col-sm-3"></div>'
            + '<div class="col-sm-6">'
            + '<div class="img-thumbnail">'
            + '<img class="img-fluid" alt="'
            + text
            + '" loading="lazy" src="'
            + href
            + '" '
            + (title ? 'title="' + title + '">' : '>')
            + '</div>'
            + '</div>'
            + '<div class="col-sm-3"></div>'
            + '</div>'
    }
}