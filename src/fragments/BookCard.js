function Book({ book }) {
    console.log(book);

    return (
        <a className="col" href={book.infoLink}>
            <div className="card h-100">
                <img src={book.imagesrc} className="card-img-top" alt="Book Cover"></img>
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{book.author}</h6>
                </div>
            </div>
        </a>
    );
}

export default Book;
