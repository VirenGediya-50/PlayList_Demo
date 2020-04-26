import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardLayout from '../../CommonComponent/CardLayout';
import AllPlaylists from './AllPlaylists';
import AllAlubums from './AllAlubums';

class Home extends Component {
    render() {
        return (
            <Container fluid className={'main'}>
                <Row >
                    <Col xs={6} md={4} className={'playlist_frame'}>
                        <h1>YOUR GREATEST HITS ALBUM</h1>
                        <CardLayout title={'ADD TO CARD'} bodyComponent={<AllPlaylists />} headerClassName={'playlist_title'} />
                    </Col>
                    <Col xs={6} md={7} className={'album_frame'}>
                        <AllAlubums />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home
