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
            <h1>Column Chart - xaxis name: high, yaxis name: low</h1>
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
            <h1>Bar Chart - xaxis name: middle, yaxis name: high</h1>
            <BarChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    secondary_xaxis: {

                        measures: ['Amount'],
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
            <h1>Line Chart - xaxis name: high, yaxis name: high</h1>
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
                    stackMeasures: true,
                    stackMeasuresToPercent: true

                }}
            />
            <h1>Area chart - xaxis name: low, yaxis name: low</h1>
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
                        rotation: 'auto'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: 'auto',
                        min: '-100000',
                        max: '300000'
                    }

                }}
            />
            <h1>Combo chart - xaxis name: middle, yaxis name: low, secondary_yaxis name: low</h1>
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
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: '45'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: '45'
                    },
                    secondaryChartType: 'area'
                }}

            />
            <h1>Scatter Plot - xaxis name: low, yaxis name: low</h1>
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
            <h1>Bubble chart - xaxis name: low, yaxis name: low</h1>
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
                        labelsEnabled: true,
                        rotation: 'auto'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        labelsEnabled: true,
                        rotation: 'auto'
                    },
                    dataLabels: {
                        visible: 'true'
                    }
                }}
            />

            <h1>Heatmap chart - xaxis name: low, yaxis name: low</h1>
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
                        rotation: 'auto'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: 'auto'
                    }
                }}
            />
        </div>
    ))
    .add('Dual Axis - 1 measure on each axis', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis name: high, yaxis name: high, secondary_yaxis: high</h1>
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
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30',
                        measures: ['AmountBOP']
                    }
                }}

            />
            <h1>Bar Chart - xaxis name: low, yaxis name: low, secondary_yaxis: low</h1>
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
                        visible: true,
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
                        rotation: '45'
                    },
                    secondary_xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '45',
                        measures: ['AmountBOP']
                    }
                }}
            />
            <h1>Line Chart - xaxis name: middle, yaxis name: middle, secondary_yaxis: middle</h1>
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                trendBy={fixtures.a_Product}
                segmentBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '60'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '60'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '60',
                        measures: ['AmountBOP']
                    }
                }}
            />
            <h1>Area Chart - xaxis name: high, yaxis name: middle, secondary_yaxis: low</h1>
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
                        rotation: '75'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '75'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '75',
                        measures: ['AmountBOP']
                    }
                }}
            />
        </div>
    ))
    .add('>= 2 measures', () => (
        <div style={WRAPPER_STYLE}>
            <h1>>= 2 measures</h1>
            <h1>Column Chart - xaxis name: high, yaxis name: not show</h1>
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
                    }
                }}

            />
            <h1>Bar Chart - xaxis name: not show, yaxis name: high</h1>
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
            <h1>Line Chart - xaxis name: high, yaxis name: not show</h1>
            <LineChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP, fixtures.m_AmountNegative]}
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
            <h1>Area chart - xaxis name: high, yaxis name: not show</h1>
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
            <h1>Combo chart - xaxis name: high, yaxis name: not show, secondary_yaxis name: high</h1>
            <ComboChart
                projectId={fixtures.projectId}
                primaryMeasures={[fixtures.m_Amount, fixtures.m_AmountNegative]}
                secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AvgAmount]}
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
            <h1>Column Chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Bar Chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Line Chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Area chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Combo chart - xaxis name: not show, yaxis name: not show, secondary_yaxis name: not show</h1>
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
            <h1>Scatter Plot - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Bubble chart - xaxis name: not show, yaxis name: not show</h1>
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

            <h1>Heatmap chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Column Chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Bar Chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Line Chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Area chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Combo chart - xaxis,yaxis,secondary_yaxis name: high, turn off label</h1>
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
            <h1>ScatterPlot chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Bubble chart - xaxis name: high, yaxis name: high, turn off label</h1>
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

            <h1>Heatmap chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
    .add('turn on name, turn off xaxis, yaxis', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis, yaxis: not show</h1>
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
                        rotation: '60'
                    }
                }}
            />
            <h1>Bar Chart - xaxis, yaxis: not show</h1>
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
                        rotation: 'auto'
                    }
                }}
            />
            <h1>Line Chart - xaxis, yaxis: not show</h1>
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
                        rotation: '90'
                    }
                }}
            />
            <h1>Area chart - xaxis, yaxis: not show</h1>
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
                        rotation: '90'
                    }
                }}
            />
            <h1>Combo chart - xaxis, yaxis: not show</h1>
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
                        rotation: '90'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    }
                }}
            />
            <h1>Scatter Plot  - xaxis, yaxis: not show</h1>
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
                        rotation: '90'
                    }
                }}
            />
            <h1>BubbleChart - xaxis, yaxis: not show</h1>
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
                        rotation: '45'
                    }
                }}
            />

            <h1>Heatmap - xaxis, yaxis: not show</h1>
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
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    }
                }}
            />


        </div>
    ))
    .add('turn off name, position is disabled', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Bar Chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Line Chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Area chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Combo chart - xaxis name: not show, yaxis name: not show, secondary_yaxis name: not show</h1>
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
            <h1>Scatter Plot - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Bubble chart - xaxis name: not show, yaxis name: not show</h1>
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

            <h1>Heatmap chart - xaxis name: not show, yaxis name: not show</h1>
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
            <h1>Column Chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Bar Chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Line Chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Area chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Combo chart - xaxis,yaxis,secondary_yaxis name: high, turn off label</h1>
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
            <h1>ScatterPlot chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
            <h1>Bubble chart - xaxis name: high, yaxis name: high, turn off label</h1>
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

            <h1>Heatmap chart - xaxis name: high, yaxis name: high, turn off label</h1>
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
    .add('Visualization', () => (
        <div style={WRAPPER_STYLE}>
            <h1>not config: xaxis, yaxis: default</h1>
            <Visualization
                projectId={fixtures.projectId}
                identifier="aaeGiWByc7kl"
            />
            <h1>config on sdk: xaxis, yaxis: high</h1>
            <Visualization
                projectId={fixtures.projectId}
                identifier="aaeGiWByc7kl"
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
            <h1>config on AD then change config on sdk: xaxis, yaxis: high</h1>
            <Visualization
                projectId={fixtures.projectId}
                identifier="aacGkrpldnOi"
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
        </div>
    ))
    .add('invalid values of position parameter', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis name: high, yaxis name: low</h1>
            <ColumnChart
                projectId={fixtures.projectId}
                measures={[fixtures.m_Amount, fixtures.m_AmountBOP]}
                viewBy={[fixtures.a_Product]}
                stackBy={fixtures.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "HIGH",
                        },
                        rotation: "30"
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "MIDDLE",
                        },
                        rotation: "30"
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "HIGH",
                        },
                        measures: ['AmountBOP'],
                        rotation: "30"
                    }
                }}
            />
        </div>
    ))
    ;
