import { Component } from "react";
import Placeholder from "./img/Placeholder.png"

class Info extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    discoverSrc(details){
        if(details === "" || details === null || details === undefined ){
            return(<></>);
        } else {
            return(<aside id="info">
            <div className="asideText">
                <h1>{details.name}</h1>
                <h3>{details.pronouns}</h3>
                <p><i>{details.description}</i></p>
            </div>
            <img src={details.url || Placeholder} alt={details.name} 
                className="infoPortrait" width="250px" height="250px"></img>
        </aside>);
        }
    }

    render(){
        return(
            <>
                {this.discoverSrc(this.props.details)}
            </>
        )
    }
}

export default Info;