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
        const modelUrl = "http://127.0.0.1:3000/" + this.props.match.params.name + ".stl";
        console.log("get url of model:"+modelUrl);
        // const modelUrl = this.props.match.params.name;
        return (
            <div style={divStyle}>
                <STLViewer url= {modelUrl}
                model={modelUrl}
	            width={700}
	            height={700}
	            modelColor='#FF4500'
	            backgroundColor='#EAEAEA'
	            rotate={true}
	            orbitControls={true}
                cameraX={1}
                cameraY={1}
                cameraZ={null}
                lights={[0, 0, 1]}
                lightColor={'#F5F5F5'}
                />
            </div>
        )
    }
}

export default Model;