import './style.scss';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const levels = [
    { code: 'n1', name: 'Out of the Woods', },
    { code: 'n2', name: 'The Peaceful Village', },
    { code: 'n3', name: 'The Vast Plain', },
    { code: 'n4', name: 'Bank of the Wild River', },
    { code: 'n5', name: 'The Tidal Coast', },
    { code: 'n6', name: 'Sea Turtle Rock', },
    { code : 'w1', name: 'Desert Ruin', },
    { code : 'w2', name: 'The Volcano’s Base', },
    { code : 'w3', name: 'The Pool of Rain', },
    { code : 'w4', name: 'A Town in Chaos', },
    { code : 'w5', name: 'Beneath the Waves', },
    { code : 'w6', name: 'The West Crater', },
    { code : 's1', name: 'The Grassland', },
    { code : 's2', name: 'The Big Bridge', },
    { code : 's3', name: 'Tower of Revival', },
    { code : 's4', name: 'The Steep Canyon', },
    { code : 's5', name: 'Cave of Flames', },
    { code : 's6', name: 'Above the Clouds', },
    { code : 'e1', name: 'The Stagnant Swamp', },
    { code : 'e2', name: 'The Frigid Sea', },
    { code : 'e3', name: 'Castle of Illusions', },
    { code : 'e4', name: 'The Colossal Hole', },
    { code : 'e5', name: 'The Warped Void', },
    { code : 'e6', name: 'The East Crater', },
    { code : 'e7', name: 'Forest of Fear', },
];

const treasureOrder = [
    { level: "n1", treasure: "gray", },
    { level: "n2", treasure: "gray", },
    { level: "n3", treasure: "gray", },
    { level: "w1", treasure: "gray", },
    { level: "w1", treasure: "red", },
    { level: "w2", treasure: "gray", },
    { level: "n1", treasure: "red", },
    { level: "w3", treasure: "gray", },
    { level: "w4", treasure: "gray", },
    { level: "s1", treasure: "gray", },
    { level: "s2", treasure: "gray", },
    { level: "n3", treasure: "green", },
    { level: "w3", treasure: "red", },
    { level: "w3", treasure: "gray", },
    { level: "w3", treasure: "green", },
    { level: "e1", treasure: "gray", },
    { level: "n2", treasure: "red", },
    { level: "s1", treasure: "green", },
    { level: "e2", treasure: "gray", },
    { level: "w4", treasure: "red", },
    { level: "n4", treasure: "gray", },
    { level: "n5", treasure: "gray", },
    { level: "s4", treasure: "gray", },
    { level: "n5", treasure: "red", },
    { level: "w2", treasure: "blue", },
    { level: "s4", treasure: "red", },
    { level: "e1", treasure: "red", },
    { level: "w6", treasure: "gray", },
    { level: "e4", treasure: "gray", },
    { level: "s3", treasure: "red", },
    { level: "n6", treasure: "gray", },
    { level: "s5", treasure: "gray", },
    { level: "s2", treasure: "blue", },
    { level: "e2", treasure: "green", },
    { level: "e3", treasure: "gray", },
    { level: "n6", treasure: "green", },
    { level: "w1", treasure: "blue", },
    { level: "e4", treasure: "green", },
    { level: "e1", treasure: "green", },
    { level: "w5", treasure: "gray", },
    { level: "s5", treasure: "green", },
    { level: "e1", treasure: "blue", },
    { level: "n1", treasure: "green", },
    { level: "n4", treasure: "green", },
    { level: "s3", treasure: "green", },
    { level: "e6", treasure: "gray", },
    { level: "e3", treasure: "green", },
    { level: "n1", treasure: "blue", },
    { level: "n3", treasure: "red", },
    { level: "s1", treasure: "red", },
    { level: "w2", treasure: "red", },
    { level: "s2", treasure: "red", },
    { level: "n2", treasure: "green", },
    { level: "w2", treasure: "green", },
    { level: "w1", treasure: "green", },
    { level: "e2", treasure: "red", },
    { level: "s2", treasure: "green", },
    { level: "n4", treasure: "red", },
    { level: "e4", treasure: "red", },
    { level: "n4", treasure: "blue", },
    { level: "w3", treasure: "blue", },
    { level: "w6", treasure: "red", },
    { level: "n2", treasure: "blue", },
    { level: "e2", treasure: "blue", },
    { level: "e3", treasure: "red", },
    { level: "e7", treasure: "gray", },
    { level: "e5", treasure: "gray", },
    { level: "e7", treasure: "green", },
    { level: "e5", treasure: "red", },
    { level: "e5", treasure: "green", },
    { level: "e7", treasure: "red", },
    { level: "e7", treasure: "blue", },
    { level: "e5", treasure: "blue", },
    { level: "s5", treasure: "red", },
    { level: "e4", treasure: "blue", },
    { level: "s4", treasure: "green", },
    { level: "w5", treasure: "red", },
    { level: "n5", treasure: "green", },
    { level: "w4", treasure: "blue", },
    { level: "n5", treasure: "blue", },
    { level: "s1", treasure: "blue", },
    { level: "w4", treasure: "green", },
    { level: "n6", treasure: "red", },
    { level: "s3", treasure: "blue", },
    { level: "s6", treasure: "gray", },
    { level: "s6", treasure: "red", },
    { level: "e6", treasure: "red", },
    { level: "w6", treasure: "green", },
    { level: "e3", treasure: "blue", },
    { level: "w6", treasure: "blue", },
    { level: "w5", treasure: "green", },
    { level: "s4", treasure: "blue", },
    { level: "n3", treasure: "blue", },
    { level: "w5", treasure: "blue", },
    { level: "s5", treasure: "blue", },
    { level: "s6", treasure: "green", },
    { level: "e6", treasure: "green", },
    { level: "n6", treasure: "blue", },
    { level: "s6", treasure: "blue", },
    { level: "e6", treasure: "blue", },
];

const chestColors = [
    'gray',
    'red',
    'green',
    'blue',
];

const LevelTable = props => {
    const { getStatus, generateChecker } = props;

    const getTotal = index => levels.reduce( ( total, level ) => {
        return total + chestColors.reduce( ( total, color ) => {
            return total + ( getStatus( level.code, color, index ) ?? false );
        }, 0 );
    }, 0 );

    return <table className="wl3__table wl3__table-level-order">
        <thead>
            <tr>
                <th></th>
                <th>Rough</th>
                <th>Screenshots</th>
                <th>Revised</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Totals</th>
                <td className="wl3__total-cell">{ getTotal( 0 ) } / { levels.length * 4 }</td>
                <td className="wl3__total-cell">{ getTotal( 1 ) } / { levels.length * 4 }</td>
                <td className="wl3__total-cell">{ getTotal( 2 ) } / { levels.length * 4 }</td>
            </tr>
        </tbody>
        { levels.map( level => {
            return <tbody>
                <tr key={ level.code }>
                    <th>{ level.code.toUpperCase() } { level.name }</th>
                </tr>
                { chestColors.map( color => {
                    return <tr key={ color }>
                        <th className={ `wl3__color-name wl3__color-name-${ color }` }>{ color }</th>
                        { Array.from( { length: 3 } ).map( ( _, index ) => <>
                            <td>
                                <input
                                    checked={ getStatus( level.code, color, index ) ?? false }
                                    type="checkbox"
                                    onClick={ generateChecker( level.code, color, index ) }
                                />
                            </td>
                        </> ) }
                    </tr>;
                }) }
            </tbody>;
        } ) }
    </table>;
};

const TreasureTable = props => {
    const { getStatus, generateChecker } = props;

    const getTotal = index => levels.reduce( ( total, level ) => {
        return total + chestColors.reduce( ( total, color ) => {
            return total + ( getStatus( level.code, color, index ) ?? false );
        }, 0 );
    }, 0 );

    return <table className="wl3__table wl3__table-treasure-order">
        <thead>
            <tr>
                <th colspan="2"></th>
                <th>Rough</th>
                <th>Screenshots</th>
                <th>Revised</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th colspan="2">Totals</th>
                <td className="wl3__total-cell">{ getTotal( 0 ) } / { levels.length * 4 }</td>
                <td className="wl3__total-cell">{ getTotal( 1 ) } / { levels.length * 4 }</td>
                <td className="wl3__total-cell">{ getTotal( 2 ) } / { levels.length * 4 }</td>
            </tr>
        </tbody>
        <tbody>
            { treasureOrder.map( ( { level, treasure } ) => {
                return <tr key={ `${ level }-${ treasure }` }>
                    <th>{ level.toUpperCase() } { levels.find( l => l.code === level ).name }</th>
                    <th className={ `wl3__color-name wl3__color-name-${ treasure }` }>{ treasure }</th>
                    { Array.from( { length: 3 } ).map( ( _, index ) => <>
                        <td>
                            <input
                                checked={ getStatus( level, treasure, index ) ?? false }
                                type="checkbox"
                                onClick={ generateChecker( level, treasure, index ) }
                            />
                        </td>
                    </> ) }
                </tr>;
            } ) }
        </tbody>
    </table>;
};

const App = props => {
    const [ order, setOrder ] = useState( localStorage.getItem( 'order' ) ?? 'level' );
    const [ status, setStatus ] = useState( JSON.parse( localStorage.getItem( 'status' ) ) );

    const getStatus = ( level, color, type ) => {
        if ( !status || !status[ level ] || !status[ level ][ color ] || !status[ level ][ color ][ type ] ) {
            return false;
        }
        return status[ level ][ color ][ type ];
    }

    const saveOrder = newOrder => {
        setOrder( newOrder );
        localStorage.setItem( 'order', newOrder );
    };

    const saveStatus = newStatus => {
        localStorage.setItem( 'status', JSON.stringify( newStatus ) );
    };

    const resetStatus = () => {
        setStatus( {} );
        saveStatus( {} );
    };

    const generateChecker = (level, color, type) => event => {
        setStatus( prevStatus => {
            const newStatus = { ...prevStatus };
            if ( !newStatus[ level ] ) {
                newStatus[ level ] = {};
            }
            if ( !newStatus[ level ][ color ] ) {
                newStatus[ level ][ color ] = {};
            }
            newStatus[ level ][ color ][ type ] = event.target.checked;
            saveStatus( newStatus );
            return newStatus;
        });
    };

    return <div className="wl3">
        <h1><i>Wario Land 3</i> Worst to Best Completion Chart</h1>
        <div className="wl3__order-controls">
            <button className="wl3__btn" disabled={ order === 'level' } onClick={ () => saveOrder( 'level' ) }>Order by Level</button>
            <button className="wl3__btn" disabled={ order === 'treasure' } onClick={ () => saveOrder( 'treasure' ) }>Order by Treasure</button>
        </div>
        { order === 'level' && <LevelTable getStatus={ getStatus } generateChecker={ generateChecker } /> }
        { order === 'treasure' && <TreasureTable getStatus={ getStatus } generateChecker={ generateChecker } /> }
        <div className="wl3__import-controls">
            <button className="wl3__btn" onClick={ resetStatus }>Reset</button>
            <a
                className="wl3__btn"
                href={ `data:text/json;charset=utf-8,${ encodeURIComponent( JSON.stringify( status ) ) }` }
                download="wl3.json"
            >
                Export
            </a>
            <input
                className="wl3__import"
                type="file"
                onChange={ event => {
                const file = event.target.files[ 0 ];
                const reader = new FileReader();
                reader.onload = event => {
                    const newStatus = JSON.parse( event.target.result );
                    setStatus( newStatus );
                    saveStatus( newStatus );
                };
                reader.readAsText( file );
            } } />
        </div>
    </div>;
};

document.addEventListener( 'DOMContentLoaded', () => {
    const rootElement = document.getElementById( 'root' );
    const root = createRoot( rootElement );
    root.render( <App /> );
} );
