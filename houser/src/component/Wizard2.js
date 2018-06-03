import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImgURL } from '../redux/reducer'
import axios from 'axios'

class Wizard2 extends Component {

    componentDidMount() {
        axios.get('/api/houses').then((res) => {
            this.setState({ houses: res.data })
        })
    }

    render() {
        return (
            <div>
                <p>Image URL</p>
                <input
                    type="text"
                    placeholder='Enter Image URL'
                    onChange={(e) => this.props.updateImgURL(e.target.value)} />
                <br />
                <hr />
                <Link to="/wizard/1">
                    <button>
                        Previous Step
                    </button>
                </Link>
                <Link to="/wizard/3">
                    <button>
                        Next Step
                    </button>
                </Link>
                <br />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgUrl: state.imgUrl,
    }
}

export default connect(mapStateToProps, { updateImgURL })(Wizard2)