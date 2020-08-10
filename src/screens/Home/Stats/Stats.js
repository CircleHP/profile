import React from 'react';

const Stats = ({ header, data, total }) => {
    // const persents = (totalInvested / total) * 100;

    // let totalInvested = 0;
    // console.log(data.map((item) => summ += item.invested))
    // console.log(persents)

    const medicine = data.filter((item) => item.industry === 'medicine').map((total) => total.invested).reduce((accum, item) => { return accum + item});
    const build = data.filter((item) => item.industry === 'build').map((total) => total.invested).reduce((accum, item) => { return accum + item});
    const fin = data.filter((item) => item.industry === 'fin').map((total) => total.invested).reduce((accum, item) => { return accum + item});
    const indX = data.filter((item) => item.industry === 'ind-x').map((total) => total.invested).reduce((accum, item) => { return accum + item});
    const other = data.filter((item) => item.industry === 'other').map((total) => total.invested).reduce((accum, item) => { return accum + item});

    const persents = (summ) => {
        return (summ / total) * 100
    }

    console.log(medicine, build, fin, indX, other);

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: `${persents(medicine)}%`, height: 30, background: 'black' }}>
            </div>
            <div style={{ width: `${persents(build)}%`, height: 30, background: 'red' }}>
            </div>
            <div style={{ width: `${persents(fin)}%`, height: 30, background: 'yellow' }}>
            </div>
            <div style={{ width: `${persents(indX)}%`, height: 30, background: 'green' }}>
            </div>
            <div style={{ width: `${persents(other)}%`, height: 30, background: 'grey' }}>
            </div>
        </div>
    );
};

export default Stats;
