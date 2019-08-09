import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization, ComboChart, HeaderPredicateFactory } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';

import { linearGradient } from 'polished';

const demoProject = {
    'https://secure.gooddata.com': '',
    'https://staging3.intgdc.com': 'pbqw1946hsb7q22oqb1xuzma3s75kltx',
    'https://staging2.intgdc.com': 'kia6t756e97f3usw9vbuhirjhuja158j',
    'https://staging.intgdc.com': ''
};
const backendUrl = "https://staging3.intgdc.com"; // eslint-disable-line no-undef
const demoProjectId = demoProject[backendUrl];
if (!demoProjectId) {
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject); // eslint-disable-line no-console
}
const backendUrlForInfo = backendUrl;
const projectId = demoProjectId;

const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';

const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly","Explorer","CompuSci","PhoenixSoft","WonderKid"],true);
const filterStageName = Model.negativeAttributeFilter(`/gdc/md/${projectId}/obj/1805`,[`/gdc/md/${projectId}/obj/1095/elements?id=966649`]);
const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const relativeDateClosed = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const filterDepartment = Model.positiveAttributeFilter('label.owner.department',["Direct Sales"],true);
const relativeDateSnapshot = Model.relativeDateFilter('snapshot.dataset.dt','GDC.time.year',-1,-1);

const yearSnapshot = Model.attribute('snapshot.aag81lMifn6q');
const yearClosed = Model.attribute('closed.aag81lMifn6q');
const a_Product = Model.attribute(`/gdc/md/${projectId}/obj/952`).localIdentifier('ProductName');
const a_StageName = Model.attribute(`/gdc/md/${projectId}/obj/1805`).localIdentifier('StageName');
const a_Deparment = Model.attribute(`/gdc/md/${projectId}/obj/1027`).localIdentifier('Deparment');
const a_Account = Model.attribute(`/gdc/md/${projectId}/obj/970`).localIdentifier('Account');

const m_CountProduct = Model.measure(`/gdc/md/${projectId}/obj/949`)
   .localIdentifier('CountProduct')
   .title('<button>Count Product</button>')
   .aggregation('count')
   ;

const m_SumDayToCloseRatio = Model.measure(`/gdc/md/${projectId}/obj/1146`)
   .localIdentifier('SumDayToClose')
   .ratio()
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_SumDayToClose = Model.measure(`/gdc/md/${projectId}/obj/1146`)
   .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
   .localIdentifier('SumDayToCloseNoRatio')
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_MinAmount = Model.measure(`/gdc/md/${projectId}/obj/1144`)
   .localIdentifier('MinAmount')
   .title('<button>Min Amount</button>')
   .aggregation('min')
   ;

const m_POPMeasure = Model.popMeasure('SumDayToCloseNoRatio', `/gdc/md/${projectId}/obj/323`)
.localIdentifier('POP_SumDayToClose')
.alias('POP SumDayToClose');

const m_PPMeasure = Model.previousPeriodMeasure('SumDayToCloseNoRatio', [{dataSet: `/gdc/md/${projectId}/obj/330`, periodsAgo: 1}])
.localIdentifier('PP_SumDayToClose')
.alias('PP SumDayToClose');


//M1: _Closed [BOP], M2: _Snapshot [BOP]
const m_SumAM = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'],'sum');

const m_ChangeAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'change');
const m_DifferenceAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'difference');
const m_RatioAM = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'],'ratio');
const m_MultiplicationAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'multiplication');

const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`);
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`).localIdentifier('ClosedBOP');

const m_SnapshotBOP = Model.measure(`/gdc/md/${projectId}/obj/2723`).localIdentifier('SnapshotBOP');
const m_SnapshotEOP = Model.measure(`/gdc/md/${projectId}/obj/1275`);
const m_SnapshotEOP1 = Model.measure(`/gdc/md/${projectId}/obj/10880`);
const m_Amount = Model.measure(`/gdc/md/${projectId}/obj/1279`);
const m_AmountBOP = Model.measure(`/gdc/md/${projectId}/obj/2858`);
const m_AvgAmount = Model.measure(`/gdc/md/${projectId}/obj/62827`);
const m_AvgWon = Model.measure(`/gdc/md/${projectId}/obj/1281`);


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
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_ClosedEOP, m_SumDayToClose]}
            secondaryMeasures={[m_SnapshotBOP, m_POPMeasure]}
            viewBy={[a_Product, a_StageName]}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/949/elements?id=168279`),
             ]}
             onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
			filters = {[filterProduct,filterStageName,relativeDateClosed]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button>
        <h1>Drill by fact and show%</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_SumDayToCloseRatio]}
            secondaryMeasures={[m_SnapshotBOP]}
            viewBy={[a_Product, a_StageName]}
            config={{
                primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/1146`),
                ]}
                onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            //filters = {[filterProduct,filterStageName,relativeDate]}
        />

        <h1>Drill AM</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[m_SnapshotBOP]}
            viewBy={[a_Product, a_StageName]}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.composedFromUri(`/gdc/md/${projectId}/obj/9211`),
                ]}
                onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDateClosed]}
        />
        
        <h1>Stack%</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_SnapshotBOP, m_PPMeasure, m_SumDayToClose]}
            secondaryMeasures={[m_RatioAM]}
            viewBy={[a_Product, a_StageName]}
            config={{
                primaryChartType: 'column',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('aaeb7jTCfexV'),
                ]}
            filters = {[filterProduct,filterStageName,relativeDateClosed]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />

        <h1>stack measures</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
            secondaryMeasures={[m_SnapshotBOP,m_SnapshotEOP]}
            viewBy={a_Product}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
                stackMeasures: true
            }}
        />

        <h1>dualAxis fasle</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_AmountBOP, m_AvgAmount]}
            secondaryMeasures={[m_MinAmount,m_AvgWon]}
            viewBy={a_StageName}
            config={{
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>1PM,1SM,1VB</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_AmountBOP]}
            secondaryMeasures={[m_MinAmount]}
            viewBy={a_StageName}
        />
        <h1>1PM,1SM,1VB, stack to percent</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP]}
            secondaryMeasures={[m_ClosedEOP]}
            viewBy={a_StageName}
            config = {{
                stackMeasuresToPercent: true
            }}
        />

        <h1>1PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_AmountBOP]}
            secondaryMeasures={[m_MinAmount]}
            viewBy={a_Deparment}
            filters = {[filterDepartment]}
        />

        <h1>2PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_AmountBOP,m_AvgAmount]}
            secondaryMeasures={[m_MinAmount]}
            viewBy={a_Deparment}
            filters = {[filterDepartment]}
        />

        <h1>2PM,2SM,1date</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
            secondaryMeasures={[m_SnapshotBOP,m_SnapshotEOP]}
            viewBy={yearClosed}
        />

        <h1>2PM,2SM,1date, stack measures</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
            secondaryMeasures={[m_SnapshotBOP,m_SnapshotEOP]}
            viewBy={yearClosed}
            config = {{
                stackMeasures: true
            }
            }
        />

        <h1>2PM,2SM,1date, stack to percent</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
            secondaryMeasures={[m_SnapshotBOP,m_SnapshotEOP]}
            viewBy={yearClosed}
            config = {{
                stackMeasuresToPercent: true
            }
            }
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_Amount, m_AvgAmount]}
            secondaryMeasures={[m_AvgWon, m_AmountBOP]}
            viewBy={yearClosed}
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
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[m_SnapshotBOP, m_POPMeasure]}
            viewBy={a_Product}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'column'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDateClosed]}
        />

        <h1>Column+line and drill eventing</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[m_SnapshotBOP, m_POPMeasure]}
            viewBy={a_Product}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDateClosed]}
        />

        <h1>Column+area and drill eventing</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP, m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[m_SnapshotBOP, m_POPMeasure]}
            viewBy={a_Product}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'area'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDateClosed]}
        />

    </div>

    ))
    .add('Special combo charts', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Combo chart no data</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP]}
            secondaryMeasures={[m_SnapshotBOP]}
            viewBy={yearSnapshot}           
            filters = {[relativeDateSnapshot]}
        />

        <h1>Combo chart too many data points to display</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP]}
            secondaryMeasures={[m_ClosedEOP]}
            viewBy={a_Account}            
        />

        <h1>Combo chart only primary bucket</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP]}
            viewBy={a_Deparment}            
        />

        <h1>Combo chart column only primary bucket and stack measures</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP,m_ClosedEOP,m_SnapshotBOP]}
            viewBy={a_StageName} 
            config = {{
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack measures</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP,m_ClosedEOP,m_SnapshotBOP]}
            viewBy={a_StageName} 
            config = {{
                primaryChartType: 'line',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack measures</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP,m_ClosedEOP,m_SnapshotBOP]}
            viewBy={a_StageName} 
            config = {{
                primaryChartType: 'area',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart column only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP,m_ClosedEOP,m_SnapshotBOP]}
            viewBy={yearClosed} 
            config = {{
                stackMeasuresToPercent: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP,m_ClosedEOP,m_SnapshotBOP]}
            viewBy={yearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'line'
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={projectId}
            primaryMeasures={[m_ClosedBOP,m_ClosedEOP,m_SnapshotBOP]}
            viewBy={yearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'area'
            }
            }          
        />
        <h1>Combo chart line only secondary bucket, 1 measure</h1>
        <ComboChart
            projectId={projectId}
            secondaryMeasures={[m_ClosedEOP]}
            viewBy={a_StageName}            
        />
        <h1>Combo chart line only secondary bucket, some measures</h1>
        <ComboChart
            projectId={projectId}
            secondaryMeasures={[m_ClosedEOP,m_ClosedBOP]}
            viewBy={a_StageName}            
        />
        <h1>Combo chart column only secondary bucket, some measures</h1>
        <ComboChart
            projectId={projectId}
            secondaryMeasures={[m_ClosedBOP,m_ClosedEOP]}
            viewBy={a_StageName}   
            config = {{
                secondaryChartType: 'column'
            }
            }         
        />
        <h1>Combo chart area only secondary bucket, some measures</h1>
        <ComboChart
            projectId={projectId}
            secondaryMeasures={[m_ClosedBOP,m_ClosedEOP]}
            viewBy={a_StageName}   
            config = {{
                secondaryChartType: 'area'
            }
            }         
        />
    
    </div>

));
