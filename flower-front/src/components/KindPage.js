import React from 'react';
import MySearch from "../view/MySearch"
import MyNav from "../view/MyNav"
import SortAll from "../components/sortAll"

class KingdPage extends React.Component {
    render() {
        return (
            <div>
                <MySearch />
                <MyNav history={this.props.history} />
                <p>首页&gt;{this.props.location.query}</p>
                <SortAll />
            </div>
        )
    }
}

export default KingdPage;
