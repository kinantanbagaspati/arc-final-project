import React, {Component} from 'react';
import './instanceKru.css';
import triangleLeft from '../assets/triangle-left.png';
import triangleDown from '../assets/triangle-down.png';

const Rangkuman = (props) => {
    const { id, value } = props;
  
    return (
      <div className="Rangkum">
        <h2 className="h2writing">{id}. </h2>
        <h2 className="h2writing">{value}</h2>
      </div>
    );
};

class Kru extends Component{
    constructor(props) {
        super(props);
        this.state = {
            details: false
        }
    }
    handleDetailFalse(){
        this.setState({details: false});
    }
    handleDetailTrue(){
        this.setState({details: true});
    }
    render(){
        if(this.state.details){
            return (
                <div className="Kru">
                    <div className="Kru-header" onClick={() => this.handleDetailFalse()}>
                        <h1>{this.props.Nama}</h1>
                        <img src={triangleDown} className="triangle"/>
                    </div>
                    <div className="Kru-body">
                        <div className="detail">
                            <div className="detail-key">
                                <h2 className="h2writing">NIM</h2>
                                <h2 className="h2writing">Date</h2>
                            </div>
                            <div className="detail-value">
                                <h2 className="h2writing">: {this.props.NIM} </h2>
                                <h2 className="h2writing">: {this.props.Date}</h2>
                            </div>
                        </div>
                        <img src={this.props.URL} className="Kru-foto"/>
                        <div className="detail">
                            <div className="detail-key">
                                <h2 className="h2writing">Catatan</h2>
                            </div>
                            <div className="detail-value">
                                <h2 className="h2writing">:</h2>
                            </div>
                        </div>
                        <div className="Rangkuman">
                            {this.props.Catatan.map((Rangkum) => (
                                <Rangkuman key={Rangkum.key} {...Rangkum}/>
                            ))}
                        </div>
                    </div>
                  
                </div>
            );
        }else{
            return (
                <div className="Kru">
                    <div className="Kru-header" onClick={() => this.handleDetailTrue()}>
                        <h1>{this.props.Nama}</h1>
                        <img src={triangleLeft} className="triangle"/>
                    </div>
                </div>
            );
        }
    }
};

const ListKru = (props) => {
    const {data} = props;
    return (
        <div className="ListKru">
            {data.map((Krus) => (
                <Kru key={Krus.NIM} {...Krus} idx={0}/>
            ))}
        </div>
    );
}
export default ListKru;