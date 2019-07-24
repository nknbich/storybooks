import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization, ComboChart, HeaderPredicateFactory } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';

import catalogJson from '../src/data/catalog.json';
import catalog from '../src/data/catalog';
import { linearGradient } from 'polished';
const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';

const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly","Explorer","CompuSci","PhoenixSoft","WonderKid"],true);
const filterStageName = Model.negativeAttributeFilter(`/gdc/md/${catalogJson.projectId}/obj/1805`,[`/gdc/md/${catalogJson.projectId}/obj/1095/elements?id=966649`]);
const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const filterDepartment = Model.positiveAttributeFilter('label.owner.department',["Direct Sales"],true);
const relativeDateSnapshot = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-1,-1);

const yearSnapshot = Model.attribute('snapshot.aag81lMifn6q');
const yearClosed = Model.attribute('closed.aag81lMifn6q');

const m_SumDayToCloseRatio = Model.measure(`/gdc/md/${catalogJson.projectId}/obj/1146`)
   .localIdentifier('SumDayToClose')
   .ratio()
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_SumDayToClose = Model.measure(`/gdc/md/${catalogJson.projectId}/obj/1146`)
   .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
   .localIdentifier('SumDayToCloseNoRatio')
   .title('<button>Sum days to close</button>')
   .aggregation('sum')
   .filters(filterProduct)
   ;

const m_MinAmount = Model.measure(`/gdc/md/${catalogJson.projectId}/obj/1144`)
   .localIdentifier('MinAmount')
   .title('<button>Min Amount</button>')
   .aggregation('min')
   ;

const m_POPMeasure = Model.popMeasure('SumDayToCloseNoRatio', `/gdc/md/${catalogJson.projectId}/obj/323`)
.localIdentifier('POP_SumDayToClose')
.alias('POP SumDayToClose');

const m_PPMeasure = Model.previousPeriodMeasure('SumDayToCloseNoRatio', [{dataSet: `/gdc/md/${catalogJson.projectId}/obj/330`, periodsAgo: 1}])
.localIdentifier('PP_SumDayToClose')
.alias('PP SumDayToClose');

//M1: _Closed [BOP], M2: _Snapshot [BOP]
const m_SumAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'sum');
const m_ChangeAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'change');
const m_DifferenceAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'difference');
const m_RatioAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'ratio');
const m_MultiplicationAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'multiplication');

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
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]'], m_SumDayToClose]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'], m_POPMeasure]}
            viewBy={[catalog['Product'], catalog['Stage Name']]}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
             ]}
             onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
			filters = {[filterProduct,filterStageName,relativeDate]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button>
        <h1>Drill by fact and show%</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[m_SumDayToCloseRatio]}
            secondaryMeasures={[catalog['_Snapshot [BOP]']]}
            viewBy={[catalog['Product'], catalog['Stage Name']]}
            config={{
                primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/1146`),
                ]}
                onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            //filters = {[filterProduct,filterStageName,relativeDate]}
        />

        <h1>Drill AM</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'], m_POPMeasure]}
            viewBy={[catalog['Product'], catalog['Stage Name']]}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.composedFromUri(`/gdc/md/${catalogJson.projectId}/obj/9211`),
                ]}
                onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDate]}
        />

        <h1>Stack%</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], catalog['_Snapshot [BOP]'], m_PPMeasure, m_SumDayToClose]}
            secondaryMeasures={[m_RatioAM]}
            viewBy={[catalog['Product'], catalog['Stage Name']]}
            config={{
                primaryChartType: 'column',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicateFactory.identifierMatch('aaeb7jTCfexV'),
                ]}
            filters = {[filterProduct,filterStageName,relativeDate]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        />

        <h1>stack measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
            viewBy={catalog['Product']}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
                stackMeasures: true
            }}
        />

        <h1>dualAxis fasle</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['Amount [BOP]'], catalog['Avg. Amount']]}
            secondaryMeasures={[m_MinAmount,catalog['Avg. Won']]}
            viewBy={catalog['Stage Name']}
            config={{
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>1PM,1SM,1VB</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['Amount [BOP]']]}
            secondaryMeasures={[m_MinAmount]}
            viewBy={catalog['Stage Name']}
        />
        <h1>1PM,1SM,1VB, stack to percent</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]']]}
            secondaryMeasures={[catalog['_Close [EOP]']]}
            viewBy={catalog['Stage Name']}
            config = {{
                stackMeasuresToPercent: true
            }}
        />

        <h1>1PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['Amount [BOP]']]}
            secondaryMeasures={[m_MinAmount]}
            viewBy={catalog['Department']}
            filters = {[filterDepartment]}
        />

        <h1>2PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['Amount [BOP]'],catalog['Avg. Amount']]}
            secondaryMeasures={[m_MinAmount]}
            viewBy={catalog['Department']}
            filters = {[filterDepartment]}
        />

        <h1>2PM,2SM,1date</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
            viewBy={yearClosed}
        />

        <h1>2PM,2SM,1date, stack measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
            viewBy={yearClosed}
            config = {{
                stackMeasures: true
            }
            }
        />

        <h1>2PM,2SM,1date, stack to percent</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], catalog['_Close [EOP]']]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'],catalog['_Snapshot [EOP]']]}
            viewBy={yearClosed}
            config = {{
                stackMeasuresToPercent: true
            }
            }
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['Amount(1)'], catalog['Avg. Amount']]}
            secondaryMeasures={[catalog['Avg. Won'], catalog['Amount [BOP]']]}
            viewBy={yearClosed}
            config={{
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60"
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
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'], m_POPMeasure]}
            viewBy={catalog['Product']}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'column'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${catalogJson.projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDate]}
        />

        <h1>Column+line and drill eventing</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'], m_POPMeasure]}
            viewBy={catalog['Product']}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${catalogJson.projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDate]}
        />

        <h1>Column+area and drill eventing</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'], m_SumAM, m_SumDayToClose]}
            secondaryMeasures={[catalog['_Snapshot [BOP]'], m_POPMeasure]}
            viewBy={catalog['Product']}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'area'
            }}
            drillableItems={[
                HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/949/elements?id=168279`),
				HeaderPredicateFactory.composedFromUri(`/gdc/md/${catalogJson.projectId}/obj/9211`),
				HeaderPredicateFactory.uriMatch(`/gdc/md/${catalogJson.projectId}/obj/1146`),
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            filters = {[filterProduct,filterStageName,relativeDate]}
        />

        </div>

    ))
    .add('Special combo charts', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Combo chart no data</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]']]}
            secondaryMeasures={[catalog['_Snapshot [BOP]']]}
            viewBy={yearSnapshot}           
            filters = {[relativeDateSnapshot]}
        />

        <h1>Combo chart too many data points to display</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]']]}
            secondaryMeasures={[catalog['_Close [EOP]']]}
            viewBy={catalog['Account']}            
        />

        <h1>Combo chart only primary bucket</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]']]}
            viewBy={catalog['Department']}            
        />

        <h1>Combo chart column only primary bucket and stack measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'],catalog['_Close [EOP]'],catalog['_Snapshot']]}
            viewBy={catalog['Stage Name']} 
            config = {{
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'],catalog['_Close [EOP]'],catalog['_Snapshot']]}
            viewBy={catalog['Stage Name']} 
            config = {{
                primaryChartType: 'line',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'],catalog['_Close [EOP]'],catalog['_Snapshot']]}
            viewBy={catalog['Stage Name']} 
            config = {{
                primaryChartType: 'area',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart column only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'],catalog['_Close [EOP]'],catalog['_Snapshot']]}
            viewBy={yearClosed} 
            config = {{
                stackMeasuresToPercent: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'],catalog['_Close [EOP]'],catalog['_Snapshot']]}
            viewBy={yearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'line'
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack to percent</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            primaryMeasures={[catalog['_Close [BOP]'],catalog['_Close [EOP]'],catalog['_Snapshot']]}
            viewBy={yearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'area'
            }
            }          
        />
        <h1>Combo chart line only secondary bucket, 1 measure</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            secondaryMeasures={[catalog['_Close [EOP]']]}
            viewBy={catalog['Stage Name']}            
        />
        <h1>Combo chart line only secondary bucket, some measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            secondaryMeasures={[catalog['_Close [EOP]'],catalog['_Close [BOP]']]}
            viewBy={catalog['Stage Name']}            
        />
        <h1>Combo chart column only secondary bucket, some measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            secondaryMeasures={[catalog['_Close [EOP]'],catalog['_Close [BOP]']]}
            viewBy={catalog['Stage Name']}   
            config = {{
                secondaryChartType: 'column'
            }
            }         
        />
        <h1>Combo chart area only secondary bucket, some measures</h1>
        <ComboChart
            projectId={catalogJson.projectId}
            secondaryMeasures={[catalog['_Close [EOP]'],catalog['_Close [BOP]']]}
            viewBy={catalog['Stage Name']}   
            config = {{
                secondaryChartType: 'area'
            }
            }         
        />
    
    </div>

    ));
