//ntthuong
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { ComboChart } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures';

const DOWNLOADER_ID = 'downloader';
const WRAPPER_STYLE = { width: 1000, height: 500 };

storiesOf('ComboChart/Other Combo types', module)
    .add('Column+column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Deparment}
            config={{
                secondaryChartType: 'column'
            }}
            filters = {[fixtures.filterDepartment]}
        />

        <h1>2PM, 1SM, 1 date, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                secondaryChartType: 'column'
            }}
            filters = {[fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'column'
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon,fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon,fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearClosed}
            config={{
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '-100000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />

    </div>
    ))
    .add('Column+line',() => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            filters = {[fixtures.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
        />

        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />            
    </div>
    ))
    .add('Column+area', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_Product}
            config={{
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_Product}
            config={{
                secondaryChartType: 'area'
            }}
            filters = {[fixtures.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            config={{
                secondaryChartType: 'area'
            }}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'area'
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon,fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon,fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon,fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
    </div>  
    ))
    .add('Line+Column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
            }}
            filters = {[fixtures.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
            }}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />    
    </div> 
    ))
    .add('Line+Line', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
            }}
            filters = {[fixtures.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
            }}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
    </div> 
    ))
    .add('Line+Area', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
            }}
            filters = {[fixtures.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
            }}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
    </div>
    ))
    .add('Area+Column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
            }}
            filters = {[fixtures.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
            }}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
    </div>
    ))
    .add('Area+Line', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
            }}
            filters = {[filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
            }}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
    </div>
    ))
    .add('Area+Area', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
            }}
            filters = {[fixtures.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
            }}
            filters = {[fixtures.filterProduct,fixtures.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_MinAmount]}
            viewBy={fixtures.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_AvgWon, fixtures.m_AmountBOP]}
            viewBy={fixtures.a_YearClosed}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
    </div>

));
