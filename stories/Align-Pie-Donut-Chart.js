//author: pdtvi
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { BarChart, HeaderPredicateFactory, Visualization, PieChart, DonutChart, Headline, PivotTable, ScatterPlot, BubbleChart, Treemap, Heatmap, AreaChart, LineChart, ColumnChart, ComboChart } from '@gooddata/react-components';

const WRAPPER_STYLE = { width: 1200, height: 400 };
import fixtures from '../src/data/fixtures';
import { black } from 'ansi-colors';

storiesOf('Align-PieDonut-Chart', module)
    .add('Pie Chart', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1 measure, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        },
                    }}
                />
            </div>
            <h1>N measures, Align: middle</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'middle'
                        },
                        legend: {
                            enabled: true,
                            position: 'left'
                        }
                    }}
                />
            </div>
            <h1>1 measure, 1 viewBy, Align: middle</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP]}
                    viewBy={fixtures.a_YearClosed}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'middle'
                        },
                        legend: {
                            enabled: true,
                            position: 'right'
                        },
                    }}
                />
            </div>
            <h1>Filter local, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP]}
                    viewBy={fixtures.a_YearClosed}
                    filters={[fixtures.filterProductExplorerGrammarPlus]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        },
                        legend: {
                            enabled: true,
                            position: 'right'
                        },
                    }}
                />
            </div>
            <h1>Invalid cases</h1>
            <h1>No data</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
                    viewBy={fixtures.a_YearClosed}
                    filters={[fixtures.filterProductTouchAll]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Many data</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP]}
                    viewBy={fixtures.a_Account}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Negative measure</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_AmountNegative]}
                    viewBy={fixtures.a_Product}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>

        </div>
    ))

    .add('Donut Chart', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1 measure, 1 viewBy, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP]}
                    viewBy={fixtures.a_YearClosed}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>2 measures, Align: middle</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'middle'
                        }
                    }}
                />
            </div>
            <h1>2 measures, 1 viewBy, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
                    viewBy={fixtures.a_YearClosed}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>many measures, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_Amount, fixtures.m_AmountBOP, fixtures.m_AmountDuplicate, fixtures.m_AmountNullFormat, fixtures.m_AvgWon]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>has restrict data, Align: middle</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ActivityRestricted, fixtures.m_AmountBOP]}
                    viewBy={[fixtures.a_Product]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'middle'
                        }
                    }}
                />
            </div>
        </div>
    ))
    .add('Visualization', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Pie chart - Not config, Align: default (middle)</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaeBD4gMeSc0"
                />
            </div>
            <h1>Pie chart - Config on sdk, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaeBD4gMeSc0"
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Ratio, legend right, custom color, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabBE0y2dt4j"
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Legend top, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aahBCA8deD4c"
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Legend bottom, filter combine, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aagBD5grdqDP"
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Many measures, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaiBMt3meK1b"
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Metric format, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aawCYDB3huZx"
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>

            <h1>Pie chart - Protected attribute, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabIPdZufDRl"
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'top'
                        }
                    }}
                />
            </div>
        </div>

    ))
    .add('Other charts not affected align vertical', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <ColumnChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose]}
                    viewBy={[fixtures.a_Product, fixtures.a_StageName]}
                    stackBy={fixtures.a_StageName}
                    config={{
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom',
                        }
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                />
            </div>
            <h1>Bar Chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <BarChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_SumDayToClose]}
                    viewBy={[fixtures.a_Product]}
                    stackBy={fixtures.a_StageName}
                    config={{
                        stackMeasuresToPercent: true,
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'left',
                        }
                    }}
                    drillableItems={[
                        HeaderPredicateFactory.identifierMatch('label.product.id.name')
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                />
            </div>
            <h1>Line chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <LineChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP, fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
                    trendBy={fixtures.a_YearClosed}
                    config={{
                        secondary_yaxis: {
                            measures: ['ClosedBOP', 'SnapshotBOP']
                        },
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'right',
                        }
                    }}
                />
            </div>
            <h1>Area Chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <AreaChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_OpenOpps, fixtures.m_CountStageHistory, fixtures.m_changeOfOpenOppsAndCountStageHistory, fixtures.m_ratioOfOpenOppsAndCountStageHistory]}
                    viewBy={fixtures.a_Product}
                    config={{
                        stackMeasuresToPercent: true,
                        secondary_yaxis: {
                            measures: ['CountStageHistory', 'OpenOpps'],
                            rotation: '180',
                            min: 0
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }

                    }}
                    drillableItems={[
                        HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/1174`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                />
            </div>
            <h1>Combo Chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <ComboChart
                    projectId={fixtures.projectId}
                    primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
                    secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
                    viewBy={fixtures.a_YearClosed}
                    config={{
                        stackMeasuresToPercent: true,
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        primaryChartType: 'area', // string
                        secondaryChartType: 'area'
                    }
                    }
                />
            </div>
            <h1>Headline, Align: not apply</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Headline
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_ClosedBOP}
                    secondaryMeasure={fixtures.m_ClosedEOP}
                    config={{
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Scatter plot, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
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
                            rotation: '30'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Bubble chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <BubbleChart
                    projectId={fixtures.projectId}
                    xAxisMeasure={fixtures.m_Amount}
                    yAxisMeasure={fixtures.m_AmountBOP}
                    size={fixtures.m_AvgWon}
                    viewBy={fixtures.a_Product}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        rotation: '30',
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Treemap, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <Treemap
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP]}
                    viewBy={fixtures.a_YearClosed}
                    segmentBy={fixtures.a_Product}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        legend: {
                            position: 'bottom'
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Heatmap, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <Heatmap
                    projectId={fixtures.projectId}
                    measure={fixtures.m_ClosedBOP}
                    rows={fixtures.a_YearClosed}
                    columns={fixtures.a_Product}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pivot table, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <PivotTable
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_AvgWon, fixtures.m_Amount]}
                    rows={[fixtures.a_StageName]}
                    columns={[fixtures.a_Product]}
                    config={{
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }

                    }}
                />
            </div>
        </div>
    ))
    .add('invalid values of position parameter', () => (
        <div style={WRAPPER_STYLE}>
            <h1>invalid values of position parameter, check Align: default (middle) </h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    projectId={fixtures.projectId}
                    measures={[fixtures.m_ClosedBOP, fixtures.m_AmountBOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'BOTTOM'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        },
                    }}
                />
            </div>
        </div>
    ));
