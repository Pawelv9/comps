import React from 'react';

function Table({ data, config }) {
    const renderedHeaders = config.map(( column ) => {
        return <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map(fruit => {
        const renderedCells = config.map(column => {
            return <td className='p-3' key={column.label}>{column.render(fruit)}</td>
        })

        return (
            <tr className='border-b' key={fruit.name}>
                {renderedCells}
                {/*<td className='p-3'>{config[0].render(fruit)}</td>*/}
                {/*<td className='p-3'>*/}
                {/*    {config[1].render(fruit)}*/}
                {/*    /!*<div className={`p- 3 m-2 ${config[1].render(fruit)}`}></div>*!/*/}
                {/*</td>*/}
                {/*<td className='p-3'>{config[2].render(fruit)}</td>*/}
            </tr>
        );
    });

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
            <tr className='border-b-2'>{renderedHeaders}</tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;