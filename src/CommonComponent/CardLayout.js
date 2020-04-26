import React from 'react';
import { Card } from 'react-bootstrap';
 
const CardLayout = (props) => {
    const { mainClassName, headerClassName, bodyClassName, title, bodyComponent } = props
    return (
        <Card className={mainClassName}>
            <Card.Header className={headerClassName}>
                {title}
            </Card.Header>
            <Card.Body className={bodyClassName}>
                {bodyComponent}
            </Card.Body>
        </Card>
    );
}
 
export default CardLayout;

// export class Album extends Component {
//     render() {
//         return (
            // <Card >
            //     <Card.Header className='playlist_title'>
            //         ADD TO CART
            //     </Card.Header>
            //     <Card.Body>Hello! I'm the body</Card.Body>
            // </Card>
//         )
//     }
// }

// export default Album
