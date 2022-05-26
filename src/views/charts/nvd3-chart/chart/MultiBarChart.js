import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: 'Store 1',
        values: [
            {
                label: 'jan',
                value: 29.765957771107,
                color: '#1DE9B6'
            },
            {
                label: 'feb',
                value: 10,
                color: '#1DE9B6'
            },
            {
                label: 'mar',
                value: 32.807804682612,
                color: '#1DE9B6'
            },
            {
                label: 'apr',
                value: 196.45946739256,
                color: '#1DE9B6'
            },
            {
                label: 'may',
                value: 0.25434030906893,
                color: '#1DE9B6'
            },
            {
                label: 'jun',
                value: 8.079782601442,
                color: '#1DE9B6'
            },
            {
                label: 'july',
                value: 13.925743130903,
                color: '#1DE9B6'
            },
            {
                label: 'aug',
                value: 5.1387322875705,
                color: '#1DE9B6'
            }
            ,
            {
                label: 'sep',
                value: 219.765957771107,
                color: '#1DE9B6'
            },
            {
                label: 'oct',
                value: 110,
                color: '#1DE9B6'
            },
            {
                label: 'nov',
                value: 132.807804682612,
                color: '#1DE9B6'
            },
            {
                label: 'dec',
                value: 96.45946739256,
                color: '#1DE9B6'
            },
        ]
    },
    {
        key: 'Store 2',
        values: [
            {
                label: 'jan',
                value: 219.765957771107,
                color: '#FF8A65'
            },
            {
                label: 'feb',
                value: 110,
                color: '#FF8A65'
            },
            {
                label: 'mar',
                value: 132.807804682612,
                color: '#FF8A65'
            },
            {
                label: 'apr',
                value: 96.45946739256,
                color: '#FF8A65'
            },
            {
                label: 'may',
                value: 10.25434030906893,
                color:  '#FF8A65'
            },
            {
                label: 'jun',
                value: 18.079782601442,
                color: '#FF8A65'
            },
            {
                label: 'july',
                value: 113.925743130903,
                color:'#FF8A65'
            },
            {
                label: 'aug',
                value: 2.1387322875705,
                color: '#FF8A65'
            },
            {
                label: 'sep',
                value: 76.765957771107,
                color: '#FF8A65'
            },
            {
                label: 'oct',
                value: 170,
                color: '#FF8A65'
            },
            {
                label: 'nov',
                value: 42.807804682612,
                color: '#FF8A65'
            },
            {
                label: 'dec',
                value: 46.45946739256,
                color: '#FF8A65'
            },
        ]
    },
    {
        key: 'Store 3',
        values: [
            {
                label: 'jan',
                value: 29.765957771107,
                color: '#C6A7DF'
            },
            {
                label: 'feb',
                value: 10,
                color: '#C6A7DF'
            },
            {
                label: 'mar',
                value: 32.807804682612,
                color: '#C6A7DF'
            },
            {
                label: 'apr',
                value: 196.45946739256,
                color: '#C6A7DF'
            },
            {
                label: 'may',
                value: 0.25434030906893,
                color: '#C6A7DF'
            },
            {
                label: 'jun',
                value: 8.079782601442,
                color: '#C6A7DF'
            },
            {
                label: 'july',
                value: 13.925743130903,
                color: '#C6A7DF'
            },
            {
                label: 'aug',
                value: 5.1387322875705,
                color: '#C6A7DF'
            }
            ,
            {
                label: 'sep',
                value: 29.765957771107,
                color: '#C6A7DF'
            },
            {
                label: 'oct',
                value: 10,
                color: '#C6A7DF'
            },
            {
                label: 'nov',
                value: 12.807804682612,
                color: '#C6A7DF'
            },
            {
                label: 'dec',
                value: 196.45946739256,
                color: '#C6A7DF'
            },
        ]
    },
];
   
                
               
                
                
const MultiBarChart = () => {
    return <NVD3Chart tooltip={{ enabled: true}} type="multiBarChart" datum={datum} x="label" y="value" height={300} groupSpacing={0.2} showValues />;
};

export default MultiBarChart;
