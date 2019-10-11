//author: pdtvi
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { AreaChart, HeaderPredicateFactory, Visualization, ColumnChart, BarChart, LineChart, ComboChart, Headline, PivotTable, ScatterPlot, BubbleChart, Heatmap, Treemap, PieChart, DonutChart } from '@gooddata/react-components';

import fixtures from '../src/data/fixtures';
const WRAPPER_STYLE = { width: 1200, height: 400 };

storiesOf('Axis name and position', module)
    .add('1 measure', () => (
        <div style={WRAPPER_STYLE}>
            <h1>name, position show correctly</h1>
            <h1>Column Chart</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        rotation: "-30"
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                    },
                    legend: {
                        enabled: true, 
                        position: 'bottom',
                    },
                    dataLabels: {
                        visible: 'true' 
                    },
                    grid: {
                        enabled: true 
                    },
                    separators: {
                        thousand: ' ',
                        decimal: ':'
                    }
                }}
            />
            <h1>Bar Chart</h1>
            <BarChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    secondary_xaxis: {
                        
                        measures:['Amount'],
                        name: {
                            visible: true, 
                            position: "middle",
                        },
                        rotation: "-30"
                    },
                    yaxis: {
                        
                        rotation: '90',
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        rotation: "-60"
                    },
                    legend: {
                        enabled: true, 
                        position: 'left',
                    },
                    dataLabels: {
                        visible: 'true' 
                    },
                    grid: {
                        enabled: true 
                    },
                    separators: {
                        thousand: ', ',
                        decimal: '. '
                    },
                    stackMeasures: true
                }}
               
            />
            <h1>Line Chart</h1>
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_ClosedBOP]}
                trendBy={fixtures.a_Product}
                segmentBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true, 
                        labelsEnabled: true, 
                        rotation: 'auto'
                    },
                    legend: {
                        enabled: false, 
                        position: 'bottom',
                    },
                    dataLabels: {
                        visible: 'true' 
                    },
                    grid: {
                        enabled: false 
                    },
                    separators: {
                        thousand: ' ',
                        decimal: ':'
                    },
                    stackMeasures:true,
                    stackMeasuresToPercent:true

                }}
            />
            <h1>Area chart</h1>
            <AreaChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_ClosedBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true,
                        //labelsEnabled: true,
                        rotation: 'auto'
                        //min: -4500,
                        //max: 8000
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true, 
                        //labelsEnabled: true, 
                        rotation: 'auto',
                        min: '-100000', 
                        max: '300000' 
                    }
                    
                }}
            />
            <h1>Combo chart</h1>
            <ComboChart
                projectId={fixtures.projectId}
                primaryMeasures={[fixtures.m_ClosedBOP]}
                secondaryMeasures={[fixtures.m_AmountDuplicate]}
                viewBy={[fixtures.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "middle",
                        },
                        //visible: true,
                        //labelsEnabled: true,
                        rotation: '45'
                        //min: -4500,
                        //max: 8000
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true, 
                        //labelsEnabled: true, 
                        rotation: '45'
                        //min: '30', 
                        //max: '40' 
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true, 
                        //labelsEnabled: true, 
                        rotation: '45'
                        //min: '30', 
                        //max: '40' 
                    },
                    secondaryChartType: 'area'
                }}

            />
            <h1>ScatterPlot Chart</h1>
            <ScatterPlot
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                attribute={fixtures.a_Product}
                config={{
                    dataLabels: {
                    visible: true
                    },
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart</h1>
            <BubbleChart
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                size={fixtures.m_AvgWon}
                viewBy={fixtures.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true,
                        labelsEnabled: true,
                        rotation: 'auto'
                        //min: -4500,
                        //max: 8000
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true, 
                        labelsEnabled: true, 
                        rotation: 'auto'
                        //min: '30', 
                        //max: '40' 
                    },
                    dataLabels: {
                        visible: 'true' 
                    }
                }}
            />

            <h1>Heatmap chart</h1>
            <Heatmap
                projectId={fixtures.projectId}
                measure={fixtures.m_ClosedBOP}
                rows={fixtures.a_Product}
                columns={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true,
                        //labelsEnabled: true,
                        rotation: 'auto'
                        //min: -4500,
                        //max: 8000
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        //visible: true, 
                        //labelsEnabled: true, 
                        rotation: 'auto'
                        //min: '30', 
                        //max: '40' 
                    }
                }}
            />
        </div>
    ))
    .add('>= 2 measures', () => (
        <div style={WRAPPER_STYLE}>
            <h1>>= 2 measures: turn on name, change position => y axis: check name not show</h1>
            <h1>Column Chart</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                        //min: '30', 
                        //max: '40' 
                    }
                }}

            />
            <h1>Bar Chart</h1>
            <BarChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Line Chart</h1>
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP,fixtures.m_AmountNegative]}
                trendBy={fixtures.a_Product}
                segmentBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart</h1>
            <AreaChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart</h1>
            <ComboChart
                projectId={fixtures.projectId}
                primaryMeasures={[fixtures.m_Amount,fixtures.m_AmountNegative]}
                secondaryMeasures={[fixtures.m_AvgWon,fixtures.m_AvgAmount]}
                viewBy={[fixtures.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },

                    secondary_yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
        </div>
    ))
    .add('turn off name, position is disabled', () => (
        <div style={WRAPPER_STYLE}>
            <h1>turn off name, change position => name isn't shown</h1>
            <h1>Column Chart</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bar Chart</h1>
            <BarChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Line Chart</h1>
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                trendBy={fixtures.a_Product}
                segmentBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart</h1>
            <AreaChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart</h1>
            <ComboChart
                projectId={fixtures.projectId}
                primaryMeasures={[fixtures.m_Amount]}
                secondaryMeasures={[fixtures.m_AvgWon]}
                viewBy={[fixtures.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <ScatterPlot
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                attribute={fixtures.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart 1x,1y,1s,1VB</h1>
            <BubbleChart
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                size={fixtures.m_AvgWon}
                viewBy={fixtures.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />

            <h1>Heatmap chart 1M,1VB,1SB</h1>
            <Heatmap
                projectId={fixtures.projectId}
                measure={fixtures.m_ClosedBOP}
                rows={fixtures.a_Product}
                columns={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />


        </div>
    ))
    .add('turn on/off Labels/Scale, Name isnt affected', () => (
        <div style={WRAPPER_STYLE}>
            <h1>turn on/off label, change rotation => Name isnt affected</h1>
            <h1>Column Chart</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30' 
                    }
                }}
            />
            <h1>Bar Chart</h1>
            <BarChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30' 
                    }
                }}
            />
            <h1>Line Chart</h1>
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_AmountBOP]}
                trendBy={fixtures.a_Product}
                segmentBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart</h1>
            <AreaChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart</h1>
            <ComboChart
                projectId={fixtures.projectId}
                primaryMeasures={[fixtures.m_Amount]}
                secondaryMeasures={[fixtures.m_AvgWon]}
                viewBy={[fixtures.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>ScatterPlot chart</h1>
            <ScatterPlot
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                attribute={fixtures.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart</h1>
            <BubbleChart
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                size={fixtures.m_AvgWon}
                viewBy={fixtures.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30' 
                    }
                }}
            />

            <h1>Heatmap chart</h1>
            <Heatmap
                projectId={fixtures.projectId}
                measure={fixtures.m_ClosedBOP}
                rows={fixtures.a_Product}
                columns={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />


        </div>
    ))
    .add('turn off xaxis, yaxis', () => (
        <div style={WRAPPER_STYLE}>
            <h1>when turn off xaxis, yaxis</h1>
            <h1>Column Chart</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false, 
                        labelsEnabled: true, 
                        rotation: '60',
                        min: 30,
                        max: 50
                    }
                }}
            />
            <h1>Bar Chart</h1>
            <BarChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                        
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false, 
                        labelsEnabled: true, 
                        rotation: 'auto',
                        min: '30', 
                        max: '40' 
                    }
                }}
            />
            <h1>Line Chart</h1>
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                trendBy={fixtures.a_Product}
                segmentBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90',
                        min: '30', 
                        max: '40' 
                    }
                }}
            />
            <h1>Area chart</h1>
            <AreaChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90',
                        min: '30', 
                        max: '40' 
                    }
                }}
            />
            <h1>Combo chart</h1>
            <ComboChart
                projectId={fixtures.projectId}
                primaryMeasures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountDuplicate]}
                viewBy={[fixtures.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90',
                        min: '30', 
                        max: '40' 
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90',
                        min: '30', 
                        max: '40' 
                    }
                }}
            />
            <h1>ScatterPlot chart</h1>
            <ScatterPlot
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                attribute={fixtures.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90',
                        min: '30', 
                        max: '40' 
                    }
                }}
            />
            <h1>Bubble chart</h1>
            <BubbleChart
                projectId={fixtures.projectId}
                xAxisMeasure={fixtures.m_Amount}
                yAxisMeasure={fixtures.m_AmountBOP}
                size={fixtures.m_AvgWon}
                viewBy={fixtures.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45',
                        min: '30', 
                        max: '50' 
                    }
                }}
            />

            <h1>Heatmap chart</h1>
            <Heatmap
                projectId={fixtures.projectId}
                measure={fixtures.m_ClosedBOP}
                rows={fixtures.a_Product}
                columns={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true, 
                            position: "low",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '45',
                        min: '30', 
                        max: '50' 
                    }
                }}
            />


        </div>
    ))
    ;
