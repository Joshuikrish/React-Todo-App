import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(props) {
    let appname = props.appname || 'Bootstrap';
    let navbaritems = props.navbaritems || [];
    return (
        <header>

            <Navbar >
                <Container>
                    <Navbar.Brand className='text-white' href="/">{appname}</Navbar.Brand>
                    <Nav className="mr-auto">
                        {navbaritems.map((item, index) => (
                            <Nav.Link key={index} className='text-white' href='/'>
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}