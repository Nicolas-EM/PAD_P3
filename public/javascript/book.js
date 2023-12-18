class BookCard extends React.Component {
    render() {
        const { imagesrc, title, author, infoLink } = this.props.book;

        return e(
            'a',
            { className: 'col', href: infoLink, style: {textDecoration: 'none'} },
            e(
                'div',
                { className: 'card' },
                e('img', { src: imagesrc, className: 'card-img-top', alt: 'Book Cover',
                style: { maxHeight: '250px' } }),
                e(
                    'div',
                    { className: 'card-body' },
                    e('h5', { className: 'card-title' }, title),
                    e('h6', { className: 'card-subtitle mb-2 text-body-secondary' }, author)
                )
            )
        );
    }
}