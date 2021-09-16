import React, {Component} from 'react';
import STLViewer from 'stl-viewer'

class Coral1 extends Component{
    render() {
        return (
            <STLViewer
	            url='http://127.0.0.1:3000/coral1.stl'
                model='http://127.0.0.1:3000/coral1.stl'
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

export default Coral1;