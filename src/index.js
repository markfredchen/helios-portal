import React from 'react';
import {Layout} from 'antd';
import {render} from 'react-dom';

const { Header, Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                </Layout>
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'));
