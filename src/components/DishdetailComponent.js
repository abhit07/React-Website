import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import { ListGroup, ListGroupItem } from 'reactstrap';

class Dishdetail extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         selectedDish: null

    //     }

    // }


    renderDish(selecteddish) {
        if (selecteddish != null) {
                return(
                    <Card>
                        <CardImg width="100%" src={selecteddish.image} alt={selecteddish.name} />
                        <CardBody>
                            <CardTitle>{selecteddish.name}</CardTitle>
                            <CardText>{selecteddish.description}</CardText>
                        </CardBody>
                    </Card>
                );
        }
        else {
            return(<div></div>);
        }
    }

    
       
    

    renderComments(selecteddish) {

        if(selecteddish != null){

            console.log(selecteddish.comments);
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {selecteddish.comments.map((komment, index) => {
                            return (
                                <li key={index}>{komment.comment}<br/>
                                <p>--{komment.author}, {komment.date}</p></li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else {
                return(
                    <div></div>
                )
        }

    }
           


    render() {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                     {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        )
    }
}

export default Dishdetail;