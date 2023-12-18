"use strict"

class SearchForm extends React.Component {
    componentDidMount() {
        const form = document.getElementById('searchForm');
        form.addEventListener('submit', this.searchBooks);
    }

    componentWillUnmount() {
        const form = document.getElementById('searchForm');
        form.removeEventListener('submit', this.searchBooks);
    }

    searchBooks = (event) => {
        event.preventDefault();

        const default_thumbnail_url = "https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4="
        const apiKey = "AIzaSyARjoFFYw_iyO-qYuNuXap8yWa2q9WCjqo";

        const searchType = document.querySelector('input[name="searchType"]:checked').value;
        const textInput = document.getElementById("searchQuery").value
        const searchQuery = `${searchType}${textInput}`;

        if (textInput) {
            console.log("Searching:", searchQuery);

            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}&maxResults=40`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    const books = response.data.items;
                    const bookComponents = [];

                    for (let x in books) {
                        const bookInfo = books[x].volumeInfo;
                        const authors = bookInfo.authors

                        let authorsString = "";
                        for (let y in authors) {
                            authorsString += `, ${authors[y]}`
                        }
                        authorsString = authorsString.substring(2);

                        // Create book
                        const book = {
                            imagesrc: bookInfo.imageLinks?.thumbnail || default_thumbnail_url,
                            title: bookInfo.title || 'No Title',
                            author: authorsString || 'Unknown Author',
                            infoLink: bookInfo.infoLink || '#',
                        };

                        // Create a BookCard component and add it to the array
                        bookComponents.push(e(BookCard, { key: x, book }));
                    }

                    // Render the array of BookCard components in the root
                    booksRoot.render(bookComponents);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    };

    render() {
        return e(
            'form',
            { id: 'searchForm' },
            e(
                'div',
                { className: 'mb-3' },
                e('label', { htmlFor: 'searchQuery', className: 'form-label' }, 'Search:'),
                e('input', {
                    type: 'text',
                    className: 'form-control',
                    id: 'searchQuery',
                    'aria-describedby': 'searchHelp'
                }),
                e('div', { id: 'searchHelp', className: 'form-text' }, 'Enter a book title or author')
            ),
            e(
                'div',
                { className: 'form-check' },
                e('input', {
                    className: 'form-check-input',
                    type: 'radio',
                    name: 'searchType',
                    id: 'radioBtntitle',
                    value: 'intitle:',
                    defaultChecked: true
                }),
                e('label', { className: 'form-check-label', htmlFor: 'radioBtntitle' }, 'Search by Title')
            ),
            e(
                'div',
                { className: 'form-check mb-3' },
                e('input', {
                    className: 'form-check-input',
                    type: 'radio',
                    name: 'searchType',
                    value: 'inauthor:',
                    id: 'radioBtnAuthor'
                }),
                e('label', { className: 'form-check-label', htmlFor: 'radioBtnAuthor' }, 'Search by Author')
            ),
            e('button', { type: 'submit', className: 'btn btn-primary' }, 'Submit')
        );
    }
}