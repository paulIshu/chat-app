import React from 'react'
import { Grid, Row , Col} from 'rsuite'
import Slidbar from '../components/Slidbar';

const Home = () => {
  return <Grid className='h-100'>
    <Row>
      <Col xs={24} md={8}>
      <Slidbar/>
      </Col>

    </Row>
  </Grid>
};
export default Home;
