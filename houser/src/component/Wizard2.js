import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImgURL } from '../redux/reducer'

class Wizard2 extends Component {

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
        imgurl: state.imgurl
    }
}

export default connect(mapStateToProps, { updateImgURL })(Wizard2)