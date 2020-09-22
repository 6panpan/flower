import React from 'react';
// import { FileDoneOutlined, RedEnvelopeOutlined, UserOutlined } from '@ant-design/icons';
import Member from './content/Member';
import Order from './content/Order';
import Integral from './content/Integral';
import Evaluation from './content/Evaluation';
import Information from './content/Information';
import Birth from './content/Birthremind';

export default class Right extends React.Component {
    constructor (props) {
        super();
        this.state = {
            
        }
      }
    componentWillReceiveProps(nextProps){
        // const {jump_id} = nextProps
        console.log(nextProps);
    }
    getul() {
        console.log(this.props.page);
        switch(this.props.page){
            case '0': return <Member/>;
            case '1': return <Order/>;
            case '3': return <Evaluation/>;
            case '4': return <Integral/>;
            case '6': return <Information/>;
            case '9': return <Birth/>;
            default: return <Member/>
        }  
    }
    render() {
        console.log(this.props.page);
        return (
            <>
                <div className='rigth-content'>
                    {this.getul()}
                </div>
            </>
        )
    }
}