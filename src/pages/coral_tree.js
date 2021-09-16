import React, {Component} from 'react';
import STLViewer from 'stl-viewer'

class CoralTree extends Component{
    render() {
        return (
            <STLViewer
	            url='http://127.0.0.1:8000/coral_tree.stl'
	            width={400}
	            height={400}
	            modelColor='#B92C2C'
	            backgroundColor='#EAEAEA'
	            rotate={true}
	            orbitControls={true}
            />
        )
    }
}

export default CoralTree;