//author: pdtvi
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { BarChart, HeaderPredicateFactory, Visualization,PieChart,DonutChart,Headline,PivotTable,ScatterPlot,BubbleChart,Treemap,Heatmap,AreaChart,LineChart,ColumnChart,ComboChart } from '@gooddata/react-components';

const WRAPPER_STYLE = { width: 1200, height: 400 };
import fixtures from '../src/data/fixtures'; 
import { black } from 'ansi-colors';

storiesOf('Align-PieDonut-Chart', module)
    .add('Pie Chart', () => (
        <div style={WRAPPER_STYLE}>
        <h1>Pie chart 1M</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'bottom'
                },
                legend: {
                    enabled: true, 
                    position: 'bottom'
                },
            }}
        />
       </div>
       <h1>Pie chart N measures</h1>
       <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP,fixtures.m_SnapshotBOP]}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'middle'
                },
                legend: {
                    enabled: true,
                    position: 'left'
                }
            }}
        />
        </div>
         <h1>Pie chart 1M,1VB</h1>
         <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'middle'
                },
                legend: {
                    enabled: true, 
                    position: 'right'
                },
            }}
        />
        </div>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <h1>Pie chart filter local</h1>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_YearClosed}
            filters={[fixtures.filterProductExplorerGrammarPlus]}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                },
                legend: {
                    enabled: true, 
                    position: 'right'
                },
            }}
        />
        </div>
        <h1>Invalid</h1>
        <h1>No data</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_YearClosed}
            filters={[fixtures.filterProductTouchAll]}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        />
        </div>
        <h1>Many data</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_Account}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        />
        </div>
        <h1>Negative measure</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNegative]}
            viewBy={fixtures.a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        />
        </div>
        
    </div>
    ))
    
    .add('Donut Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Donut chart 1M,1VB</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        />
        </div>
        <h1>Donut chart 2M</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        />
        </div>
        <h1>Donut chart 2M,1VB</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP,fixtures.m_]}
            viewBy={fixtures.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        /> 
        </div> 
        <h1>Donut chart 20M</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP,fixtures.m_Amount,fixtures.m_AmountBOP,fixtures.m_AmountDuplicate,fixtures.m_AmountNullFormat,fixtures.m_AvgWon]}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        />
        </div>
        <h1>Donut chart has restrict data</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ActivityRestricted,fixtures.m_AmountBOP]}
            viewBy={[fixtures.a_Product]}
            config={{
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign: 'top'
                }
            }}
        />
        </div>
        </div>
    ))
    .add('Visualization', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Pie chart - legend left, data show</h1>
            <div style={{width: 400, height: 800, border: "solid 2px black"}}>
            <Visualization
                 projectId={fixtures.projectId}
                 identifier="aaeBD4gMeSc0"
                 config = {{
                    dataLabels: {
                        visible: true
                    },
                    chart:{
                        verticalAlign: 'bottom'
                    }
                 }} 
            />
            </div>
            <h1>Pie chart - ratio, legend right, custom color</h1>
            <div style={{width: 400, height: 800, border: "solid 2px black"}}>
            <Visualization
                 projectId={fixtures.projectId}
                 identifier="aabBE0y2dt4j"
                 config = {{
                    dataLabels: {
                        visible: true
                    },
                    chart:{
                        verticalAlign: 'top'
                    }
                 }} 
            />
            </div>
            <h1>Pie chart - legend top</h1>
            <div style={{width: 400, height: 800, border: "solid 2px black"}}>
            <Visualization
                 projectId={fixtures.projectId}
                 identifier="aahBCA8deD4c"
                 config = {{
                    dataLabels: {
                        visible: true
                    },
                    chart:{
                        verticalAlign: 'top'
                    }
                 }} 
            />
            </div>
            <h1>Pie chart - legend bottom, filter combine</h1>
            <div style={{width: 400, height: 800, border: "solid 2px black"}}>
            <Visualization
                 projectId={fixtures.projectId}
                 identifier="aagBD5grdqDP"
                 config = {{
                    dataLabels: {
                        visible: true
                    },
                    chart:{
                        verticalAlign: 'bottom'
                    }
                 }} 
            />
            </div>
            <h1>Pie chart - many measures</h1>
            <div style={{width: 400, height: 800, border: "solid 2px black"}}>
            <Visualization
                 projectId={fixtures.projectId}
                 identifier="aaiBMt3meK1b"
                 config = {{
                    dataLabels: {
                        visible: true
                    },
                    chart:{
                        verticalAlign: 'top'
                    },
                    legend: {
                        enabled: true, 
                        position: 'bottom'
                    }
                 }} 
            />
            </div>
            <h1>Pie chart - metric format</h1>
            <div style={{width: 400, height: 800, border: "solid 2px black"}}>
            <Visualization
                 projectId={fixtures.projectId}
                 identifier="aawCYDB3huZx"
                 config = {{
                    dataLabels: {
                        visible: true
                    },
                    chart:{
                        verticalAlign: 'top'
                    }
                 }} 
            />
            </div>
    
            <h1>Pie chart - Protected attribute</h1>
            <div style={{width: 400, height: 800, border: "solid 2px black"}}>
            <Visualization
                 projectId={fixtures.projectId}
                 identifier="aabIPdZufDRl"
                 config = {{
                    dataLabels: {
                        visible: true
                    },
                    chart:{
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
    .add('Others chart - not apply', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart</h1>
            <div style={{width: 800, height: 1200, border: "solid 2px black"}}>
            <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            stackBy={fixtures.a_StageName}
            config={{
                chart:{
                    verticalAlign:'bottom'                },
                    legend: {
                        enabled: true, // boolean
                        position: 'bottom', // 'top' | 'left' | 'right' | 'bottom'
                    }
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.stage.name.stagename')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </div>
            <h1>Bar Chart</h1>
            <div style={{width: 800, height: 1200, border: "solid 2px black"}}>
            <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose]}
            viewBy={[fixtures.a_Product]}
            stackBy={fixtures.a_StageName}
            config={{
                stackMeasuresToPercent: true,
                chart:{
                    verticalAlign:'bottom'                },
                    legend: {
                        enabled: true, // boolean
                        position: 'left', // 'top' | 'left' | 'right' | 'bottom'
                    }
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('label.product.id.name')
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </div>
            <h1>Line chart</h1>
            <div style={{width: 800, height: 1200, border: "solid 2px black"}}>
        <LineChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP, fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            trendBy={fixtures.a_YearClosed}
            config={{
                secondary_yaxis: {
                    measures: ['ClosedBOP','SnapshotBOP']
                },
                dataLabels: {
                    visible: true
                },
                chart:{
                    verticalAlign:'bottom'                },
                    legend: {
                        enabled: true, // boolean
                        position: 'right', // 'top' | 'left' | 'right' | 'bottom'
                    }
            }}
        />
        </div>
            <h3>Area Chart</h3>
            <div style={{width: 800, height: 1200, border: "solid 2px black"}}>
            <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_OpenOpps, fixtures.m_CountStageHistory, fixtures.m_changeOfOpenOppsAndCountStageHistory, fixtures.m_ratioOfOpenOppsAndCountStageHistory]}
            viewBy={fixtures.a_Product}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '180',
                    min: 0
                },
                chart:{
                    verticalAlign:'bottom'                }

            }}
            drillableItems={[
                HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/1174`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </div>
            <h1>Combo Chart</h1>
            <div style={{width: 800, height: 1200, border: "solid 2px black"}}>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP,fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearClosed}
            config = {{
                stackMeasuresToPercent: true,
                chart:{
                    verticalAlign:'bottom'                },
                    primaryChartType: 'area', // string
    secondaryChartType: 'area'
            }
            }
        />
        </div>
        <h1>Headline</h1>
        <div style={{width: 400, height: 800, border: "solid 2px black"}}>
        <Headline
            projectId={fixtures.projectId}
            primaryMeasure={fixtures.m_ClosedBOP}
            secondaryMeasure={fixtures.m_ClosedEOP}
            config={{
                chart:
                {
                    verticalAlign:'bottom'
                }
            }}
        />
        </div>
        <h1>Scatter plot</h1>
        <div style={{width: 800, height:1200, border: "solid 2px black"}}>
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
                    verticalAlign:'bottom'
                }
            }}
        />
        </div>
<h1>Bubble chart</h1>
<div style={{width: 800, height: 1200, border: "solid 2px black"}}>
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
                    verticalAlign:'bottom'
                }
            }}
        />
        </div>
<h1>Treemap</h1>
<div style={{width: 800, height: 1200, border: "solid 2px black"}}>
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
                    verticalAlign:'bottom'
                }
            }}
        />
        </div>
<h1>Heatmap</h1>
<div style={{width: 800, height: 1200, border: "solid 2px black"}}>
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
                    verticalAlign:'bottom'
                }
            }}
        />
        </div>
        <h1>Pivot table</h1>
        <div style={{width: 800, height: 1200, border: "solid 2px black"}}>
        <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_AvgWon, fixtures.m_Amount]}
            rows={[fixtures.a_StageName]}
            columns={[fixtures.a_Product]}
            config={{
                chart:
                {
                    verticalAlign:'bottom'
                }
                
            }}
        />
        </div>  
        </div>   
    ));
