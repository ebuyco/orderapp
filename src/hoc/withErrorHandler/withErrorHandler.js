import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';
import ErrorStyle from './ErrorStyle';
import { Network } from '../../assets/svg';

const withErrorHandler = (WrapperComponent, axios) => class extends Component {
        state = {
          error: null
        }

        componentWillMount = () => {
          this.reqInterceptor = axios.interceptors.request.use((req) => {
            this.setState({ error: null });
            return req;
          });
          this.resInterceptor = axios.interceptors.response.use(res => res, (error) => {
            this.setState({ error });
          });
        }

        componentWillUnMount = () => {
          axios.interceptors.request.eject(this.reqInterceptor);
          axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
          this.setState({ error: null });
        }

        render() {
          return (
            <Aux>
              <Modal
                show={this.state.error}
                modalClosed={this.errorConfirmedHandler}
              >
                <ErrorStyle><img src={Network} alt='name_network' />{this.state.error ? this.state.error.message : null}</ErrorStyle>
              </Modal>
              <WrapperComponent {...this.props} />
            </Aux>
          );
        }
};

export default withErrorHandler;
