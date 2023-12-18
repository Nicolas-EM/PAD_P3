class BookCard extends React.Component {
    render() {
        const { imagesrc, title, author, infoLink } = this.props.book;

        return e(
            'a',
            { className: 'col', href: infoLink },
            e(
                'div',
                { className: 'card h-100' },
                e('img', { src: imagesrc, className: 'card-img-top', alt: 'Book Cover' }),
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