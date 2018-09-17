import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';

// const mapStatetoProps = (state) => {
//     return {num:state};
// }
// const actionCreators = {addGun, removeGun, addGunAsync};
//App = connect(mapStatetoProps,actionCreators)(App)//将上面的app component给connect 生存一个新的app
@connect(
    state=> ({num:state}),
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在有枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>回收武器</button>
                <button onClick={this.props.addGunAsync}>延迟两天交付武器</button>
            </div>
        )
    }
}
export default App;
