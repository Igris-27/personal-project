
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Customnavbar from './CustomNavbar';


const Page2 = () => {
    const funct = () => {
        window.location.href ="https://en.wikipedia.org/wiki/Spider_lily";
    }
    return (
        <div className='page2-container'>
            <div>

                <Customnavbar />

                    <h1>This is Page2</h1>
                <p>This page is designed to demonstrate the use of
                Bootstrap by creating any elements using bootstrap on the page</p>
            {/* <p>THis is a simple page with a heading and a paragraph.
                And will inclouse
            </p> */}
            </div>
            <div>
                <h1>Container with a Card</h1>
                <div className='card-container'>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://media.istockphoto.com/id/1153997565/photo/red-spider-lily-flowers.jpg?s=170667a&w=0&k=20&c=hcpbUqm6Dk6M1ehNpTWXlZqjZpv4xtvyXfvTz7nyRaY=" />
                            <Card.Body>
                                <Card.Title>Red Spider Lily</Card.Title>
                                <Card.Text>
                                    Lycoris radiata, known as red spider lily, red magic lily, or equinox flower,
                                    The plant is used to treat a variety of illnesses, including ulcers.
                                </Card.Text>
                                <Button variant="primary" onClick={funct}>Click!</Button>
                            </Card.Body>
                        </Card>
                </div>
            </div>
        </div>
    )
}
export default Page2;
