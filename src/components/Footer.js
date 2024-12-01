export default function Footer(props) {
    return (
        <>
            <div className="container" >
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-white">© {props.copyright}</p>

                    <ul className="nav col-md-4 justify-content-end">
                        {props.footeritems.map((item, index) => {
                            return <li key={index} className="nav-item"><a href="/" className="nav-link px-2 text-white">{item}</a></li>
                        }
                        )}</ul>
                </footer>
            </div>
        </>
    )
}