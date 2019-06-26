import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore  from '../store';
import requestService from '../services/index.js'

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        let { data: user } = await requestService({ path: 'user/me' })
        // we can dispatch from here too
        ctx.store.dispatch({type: 'FOO', payload: 'foo'});
        ctx.store.dispatch({ type: "CREATE_USER", payload: user })

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);