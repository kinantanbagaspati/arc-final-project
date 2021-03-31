import React, {Component} from 'react';
import './instanceCakru.css';
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

class Cakru extends Component{
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
                <div className="Cakru">
                    <div className="cakru-header" onClick={() => this.handleDetailFalse()}>
                        <h1>{this.props.Nama}</h1>
                        <img src={triangleDown} className="triangle"/>
                    </div>
                    <div className="cakru-body">
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
                        <img src={this.props.URL} className="cakru-foto"/>
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
                <div className="Cakru">
                    <div className="cakru-header" onClick={() => this.handleDetailTrue()}>
                        <h1>{this.props.Nama}</h1>
                        <img src={triangleLeft} className="triangle"/>
                    </div>
                </div>
            );
        }
    }
};

const ListCakru = (props) => {
    const {data} = props;
    return (
        <div className="ListCakru">
            {data.map((Cakrus) => (
                <Cakru key={Cakrus.NIM} {...Cakrus} idx={0}/>
            ))}
        </div>
    );
}
export default ListCakru;