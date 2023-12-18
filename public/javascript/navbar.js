class Navbar extends React.Component {
    render() {
        return e(
            'nav',
            { className: 'navbar bg-body-tertiary' },
            e(
                'div',
                { className: 'container-fluid' },
                e(
                    'span',
                    { className: 'navbar-brand mb-0 h1' },
                    e('img', {
                        src: './images/favicon.png',
                        alt: 'Logo',
                        width: '30',
                        height: '24',
                        className: 'd-inline-block align-text-top'
                    }),
                    'Google Books Client'
                )
            )
        );
    }
}