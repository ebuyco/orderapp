import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';


const withErrorHandler = (WrapperComponent, axios) => class extends Component {
        state = {
          error: null
        }

        componentDidMount() {
          axios.interceptors.request.use((req) => {
            this.setState({ error: null });
            return req;
          });


          axios.interceptors.response.use(res => res, (error) => {
            this.setState({ error });
          });
        }

        errorConfirmedHandler = () => {
          this.setState({ error: null });
        }

        render() {
          return (
            <Aux>
              <Modal
                show={this.state.error}
                modalClosed={this.state.error.errorConfirmedHandler}
              >
                {this.state.error ? this.state.error.message : null}
              </Modal>
              <WrapperComponent {...this.props} />
            </Aux>
          );
        }
};

export default withErrorHandler;
