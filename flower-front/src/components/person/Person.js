import React from 'react';

import { Breadcrumb } from 'antd';

import './css/Person.css';
import Nav from '../../view/nav/Nav.js';
import Lefthead from './LeftHead';
import Rigthcontent from './RigthContent';



export default class Person extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <div>
                    <Nav></Nav>
                    <div className='header'>

                    </div>
                    <div>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                            <Breadcrumb.Item href="">会员中心</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='main'>
                        <div className='sider'>
                            会员中心
                            <Lefthead/>
                        </div>
                        <div className='content'>
                           <Rigthcontent/>
                        </div>
                    </div>



                </div>
            </>
        )
    }
}