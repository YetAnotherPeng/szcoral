import React, {Component} from 'react';
import STLViewer from 'stl-viewer'
// import http from 'axios'

class Model extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const modelName = this.props.match.params.name;
        console.log("get name from route:"+modelName);
        // Request the storage location of a model by name
    }

    render() {
        const divStyle = {
            textAlign : "center"
        }
        // const o0psUrl=192.168.84.48
        const stgUrl="30.23.77.36";
        const modelUrl = "http://"+stgUrl+":8000/" + this.props.match.params.name + ".stl";
        console.log("get url of model:"+modelUrl);
        // const modelUrl = this.props.match.params.name;
        return (
            <div style={divStyle}>
                <STLViewer url= {modelUrl}
                model={modelUrl}
	            width={360}
	            height={360}
	            modelColor='#FF4500'
	            backgroundColor='#EAEAEA'
	            rotate={true}
	            orbitControls={true}
                cameraX={-50}
                cameraY={-310}
                cameraZ={400}
                lights={[-500, -500, 500]}
                lightColor={'#FFFFFF'}
                />
            </div>
        )
    }
}

export default Model;
