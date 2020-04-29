//ntthuong
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { ComboChart, HeaderPredicateFactory } from '@gooddata/react-components';

const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';
import fixtures from '../src/data/fixtures';

let exportResult: any;

function onExportReady(execution: any){
	exportResult = execution;
}

async function doExport(){
	const result = await exportResult({
		format: 'xlsx',
		//title: 'CustomTitle',
		includeFilterContext: true,
		//showFilters: [],
		mergeHeaders: true
	});
	//downloadFile(result.uri);
	window.open(result.uri);
}

storiesOf('ComboChart/Column-Line', module)
    .add('DualAxis+Export+Drill', () => (
	<div style={WRAPPER_STYLE}>
        <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
        <p>Applied filter by string, identifier, relativeDate</p>

        <h1>Default chart type and drill by attribute value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP, fixtures.m_SumDayToClose]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_POP_SumDayToClose]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
             ]}
             onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
			filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button>
        <h1>Drill by fact and show%</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_SumDayToCloseRatio]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`),
                ]}
                onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            //filters = {[filterProduct,fixtures.filterStageName,relativeDate]}
        />

        <h1>Drill AM</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_Sum_ClosedBOP_SnapshotBOP, fixtures.m_SumDayToClose]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/9211`),
                ]}
                onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
        />
        
        <h1>Stack%</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_PP_SumDayToClose, fixtures.m_SumDayToClose]}
            secondaryMeasures={[fixtures.m_Ratio_ClosedBOP_SnapshotBOP]}
            viewBy={[fixtures.a_Product, fixtures.a_StageName]}
            config={{
                primaryChartType: 'column',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('aaeb7jTCfexV'),
                ]}
            filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />

        <h1>stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP,fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_Product}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
                stackMeasures: true
            }}
        />

        <h1>dualAxis fasle</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_AmountBOP, fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount,fixtures.m_AvgWon]}
            viewBy={fixtures.a_StageName}
            config={{
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>1PM,1SM,1VB</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_AmountBOP]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_StageName}
        />
        <h1>1PM,1SM,1VB, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_StageName}
            config = {{
                stackMeasuresToPercent: true
            }}
        />

        <h1>1PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_AmountBOP]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Deparment}
            filters = {[fixtures.filterDepartment]}
        />

        <h1>2PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_AmountBOP,fixtures.m_AvgAmount]}
            secondaryMeasures={[fixtures.m_MinAmount]}
            viewBy={fixtures.a_Deparment}
            filters = {[fixtures.filterDepartment]}
        />

        <h1>2PM,2SM,1date</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP,fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearClosed}
        />

        <h1>2PM,2SM,1date, stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP,fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearClosed}
            config = {{
                stackMeasures: true
            }
            }
        />

        <h1>2PM,2SM,1date, stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_ClosedEOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP,fixtures.m_SnapshotEOP]}
            viewBy={fixtures.a_YearClosed}
            config = {{
                stackMeasuresToPercent: true
            }
            }
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
    .add('Drill Eventing', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Column+column and drill eventing</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_Sum_ClosedBOP_SnapshotBOP, fixtures.m_SumDayToClose]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_POP_SumDayToClose]}
            viewBy={fixtures.a_Product}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'column'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
        />

        <h1>Column+line and drill eventing</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_Sum_ClosedBOP_SnapshotBOP, fixtures.m_SumDayToClose]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_POP_SumDayToClose]}
            viewBy={fixtures.a_Product}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
        />

        <h1>Column+area and drill eventing</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_Sum_ClosedBOP_SnapshotBOP, fixtures.m_SumDayToClose]}
            secondaryMeasures={[fixtures.m_SnapshotBOP, fixtures.m_POP_SumDayToClose]}
            viewBy={fixtures.a_Product}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'area'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${fixtures.projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[fixtures.filterProduct,fixtures.filterStageName,fixtures.relativeDateYear]}
        />

    </div>

    ))
    .add('Special combo charts', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Combo chart no data</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_YearSnapshot}           
            filters = {[fixtures.relativeDateYearSnapshot]}
        />

        <h1>Combo chart too many data points to display</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            secondaryMeasures={[fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_Account}            
        />

        <h1>Combo chart only primary bucket</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_Account}            
        />

        <h1>Combo chart column only primary bucket and stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP,fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_StageName} 
            config = {{
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP,fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_StageName} 
            config = {{
                primaryChartType: 'line',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP,fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_StageName} 
            config = {{
                primaryChartType: 'area',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart column only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP,fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_YearClosed} 
            config = {{
                stackMeasuresToPercent: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP,fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_YearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'line'
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP,fixtures.m_SnapshotBOP]}
            viewBy={fixtures.a_YearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'area'
            }
            }          
        />
        <h1>Combo chart line only secondary bucket, 1 measure</h1>
        <ComboChart
            projectId={fixtures.projectId}
            secondaryMeasures={[fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_StageName}            
        />
        <h1>Combo chart line only secondary bucket, some measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            secondaryMeasures={[fixtures.m_ClosedEOP,fixtures.m_ClosedBOP]}
            viewBy={fixtures.a_StageName}            
        />
        <h1>Combo chart column only secondary bucket, some measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            secondaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_StageName}   
            config = {{
                secondaryChartType: 'column'
            }
            }         
        />
        <h1>Combo chart area only secondary bucket, some measures</h1>
        <ComboChart
            projectId={fixtures.projectId}
            secondaryMeasures={[fixtures.m_ClosedBOP,fixtures.m_ClosedEOP]}
            viewBy={fixtures.a_StageName}   
            config = {{
                secondaryChartType: 'area'
            }
            }         
        />
    
    </div>

));
