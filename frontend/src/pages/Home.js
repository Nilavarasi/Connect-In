import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';
import { appTitle } from '../config';

const Home = () => (  
  <div>
  <AppHeader />
    <Container fluid text style={{ padding: '2rem 0'}}>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
        link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
        ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
        Curabitur ullamcorper ultricies nisi.
      </p>
    </Container>
    <AppFooter />
  </div>
);

export default Home;