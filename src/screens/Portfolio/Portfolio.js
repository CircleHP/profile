import React, { Component } from 'react';

import ScreenHeader from 'components/ScreenHeader';

import './Portfolio.styled.sass';

import data from 'companiesData/Company.json';

import Card from './Card';

const NR_OF_LINES = 10;

class Portfolio extends Component {
    state = {
        data: [],
      }

    componentDidMount(){
        const slicedArr = data.slice(0,10);
        this.setState( {
          data: slicedArr,
        });
      }
    
    
render() {

    const date = new Date().toLocaleString().slice(0, 10);

        return (
            <div className='portfolioContainer'>
                <ScreenHeader label='Portfölj' />
                <div>Senast uppdaterat {date}</div>

                <div className='portfolio-table'>

                    <div className="card-container">
                        
                        <th>Företag</th>
                        <th>Innehav</th>
                        <th>Aktietyp</th>
                        <th>Antal aktier</th>
                        <th>Aktienummer</th>
                        <th>Ågarandel</th>
                        <th>Röstvärde</th>                            <th>Download</th>
                        
                        {this.state.data.map((data, key) => {
                            return (
                                <Card
                                key={key}
                                companyName={data.companyName}
                                invested={data.invested}
                                actionType={data.actionType}                                    numberOfActions={data.numberOfActions}
                                actionNumber={data.actionNumber}
                                ownershipInterest={data.ownershipInterest}
                                votingPower={data.votingPower}
                                buttonName={"Download"}
                                download={this.downloadData}
                                /> 
                            );
                        })}            
                    </div>

                    
                </div>
            </div>
        );
    }
};

export default Portfolio;
