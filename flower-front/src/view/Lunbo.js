import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    width: "1200px",
    height: "340px",
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};

class Lunbo extends React.Component {
    render() {
        return (
            <Carousel style={{ zIndex: "-100" }} autoplay dots>
                <div>
                    <img style={contentStyle} src="https://img02.hua.com/slider/20_zhongqiu_banner_pc.jpg" />
                </div>
                <div>
                    <img style={contentStyle} src="https://img02.hua.com/slider/20_youflower_pc.jpg" />
                </div>
                <div>
                    <img style={contentStyle} src="https://img02.hua.com/slider/20_day920_banner_pc.jpg" />
                </div>
                <div>
                    <img style={contentStyle} src="https://img02.hua.com/slider/20_birthday_pc.jpg" />
                </div>
            </Carousel>
        )
    }
}

export default Lunbo;