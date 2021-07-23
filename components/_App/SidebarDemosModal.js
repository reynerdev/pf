import React, { Component } from 'react'

export default class SidebarDemosModal extends Component {
    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <React.Fragment>
                <div className={`demos-side-content ${this.props.active}`}>
                    <div className="modal-header">
                        <h2>View Demo</h2>
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="modal-body">
                        <ul>
                            <li>
                                <div className="demo-item">
                                    <a href="/">
                                        <span>Demo - 1</span>
                                        <img src="/images/demos/demo1.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/index-2">
                                        <span>Demo - 2</span>
                                        <img src="/images/demos/demo2.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/index-3">
                                        <span>Demo - 3</span>
                                        <img src="/images/demos/demo3.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/index-4">
                                        <span>Demo - 4</span>
                                        <img src="/images/demos/demo4.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/index-5">
                                        <span>Demo - 5</span>
                                        <img src="/images/demos/demo5.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/index-6">
                                        <span>Demo - 6</span>
                                        <img src="/images/demos/demo6.jpg" alt="Demos" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
