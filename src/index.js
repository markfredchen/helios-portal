import React from 'react';
import {Layout, Button} from 'antd';
import {render} from 'react-dom';
import './index.scss';

const {Header, Content} = Layout;

class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content className="main">
                        <Button type="primary">Primary</Button>
                    </Content>
                </Layout>
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'));
