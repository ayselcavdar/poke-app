import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Translate from '../../components/Translate/Translate';
import {Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Error = () => {
    return (
        <div title="ErrorPageTitle">
            <ErrorMessage>
            <Translate
                turkish="404 Sayfa bulunamıyor."
                english="404 Page is not found."
              />
              <LinkContainer className="d-inline" to="/">
                <Nav.Link>
                  <Translate turkish="Ana Sayfa" english="Home Page" />
                </Nav.Link>
              </LinkContainer>
            </ErrorMessage>
        </div>
    )
}

export default Error
