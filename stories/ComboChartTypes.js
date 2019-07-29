import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { ComboChart } from '@gooddata/react-components';
import { Model } from '@gooddata/react-components';

import { triangle } from 'polished';

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

const DOWNLOADER_ID = 'downloader';
const WRAPPER_STYLE = { width: 1200, height: 400 };

const filterProduct = Model.positiveAttributeFilter('label.product.id.name',["Educationly","Explorer","CompuSci","PhoenixSoft","WonderKid"],true);
const filterStageName = Model.negativeAttributeFilter(`/gdc/md/${projectId}/obj/1805`,[`/gdc/md/${projectId}/obj/1095/elements?id=966649`]);
const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt','2010-01-01','2010-06-30');
const relativeDate = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-8,-8);
const filterDepartment = Model.positiveAttributeFilter('label.owner.department',["Direct Sales"],true);
const relativeDateSnapshot = Model.relativeDateFilter('closed.dataset.dt','GDC.time.year',-1,-1);

const yearSnapshot = Model.attribute('snapshot.aag81lMifn6q');
const yearClosed = Model.attribute('closed.aag81lMifn6q');
const a_Product = Model.attribute(`/gdc/md/${projectId}/obj/952`).localIdentifier('ProductName');
const a_StageName = Model.attribute(`/gdc/md/${projectId}/obj/1805`).localIdentifier('StageName');
const a_Deparment = Model.attribute(`/gdc/md/${projectId}/obj/1027`).localIdentifier('Deparment');
const a_Account = Model.attribute(`/gdc/md/${projectId}/obj/969`).localIdentifier('Account');

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
const m_SumAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'sum');
const m_ChangeAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'change');
const m_DifferenceAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'difference');
const m_RatioAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'ratio');
const m_MultiplicationAM = Model.arithmeticMeasure(['aaeb7jTCfexV', 'aazV2yX2gz2z'],'multiplication');

const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`);
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`);

const m_SnapshotBOP = Model.measure(`/gdc/md/${projectId}/obj/2723`);
const m_SnapshotEOP = Model.measure(`/gdc/md/${projectId}/obj/1275`);
const m_SnapshotEOP1 = Model.measure(`/gdc/md/${projectId}/obj/10880`);
const m_Amount = Model.measure(`/gdc/md/${projectId}/obj/1279`);
const m_AmountBOP = Model.measure(`/gdc/md/${projectId}/obj/2858`);
const m_AvgAmount = Model.measure(`/gdc/md/${projectId}/obj/62827`);
const m_AvgWon = Model.measure(`/gdc/md/${projectId}/obj/1281`);
   


storiesOf('ComboChart/Other Combo types', module)
    .add('Column+column', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
                        secondaryChartType: 'column',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
                        secondaryChartType: 'column'
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
                        secondaryChartType: 'column'
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column'
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon,m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon,m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'column',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon,m_MinAmount]}
                    viewBy={yearClosed}
                    config={{
                        secondaryChartType: 'column',
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
    .add('Column+line',() => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={a_Product}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        stackMeasures: true,
                        dualAxis: false
                    }}
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
    .add('Column+area', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotEOP]}
                    viewBy={a_Product}
                    config={{
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        }
                    }}
                />

            <h1>1PM,  1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotEOP]}
                    viewBy={a_Product}
                    config={{
                        secondaryChartType: 'area'
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={a_Product}
                    config={{
                        secondaryChartType: 'area'
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area'
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon,m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon,m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
                        secondaryChartType: 'area',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon,m_AmountBOP]}
                    viewBy={yearClosed}
                    config={{
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
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
    .add('Line+Column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_ClosedBOP]}
                secondaryMeasures={[m_SnapshotBOP]}
                viewBy={a_Product}
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
                projectId={projectId}
                primaryMeasures={[m_ClosedBOP]}
                secondaryMeasures={[m_SnapshotBOP]}
                viewBy={a_Product}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                }}
                filters = {[filterProduct]}
            />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_Amount, m_AvgAmount]}
                secondaryMeasures={[m_MinAmount]}
                viewBy={a_Product}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                }}
                filters = {[filterProduct,relativeDate]}
            />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                }}
            />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasures: true
                }}
            />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasuresToPercent: true
                }}
            />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_Amount, m_AvgAmount]}
                secondaryMeasures={[m_AvgWon, m_MinAmount]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasuresToPercent: true
                }}
            />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_Amount, m_AvgAmount]}
                secondaryMeasures={[m_AvgWon, m_MinAmount]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    stackMeasures: true,
                    dualAxis: false
                }}
            />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
                projectId={projectId}
                primaryMeasures={[m_Amount, m_AvgAmount]}
                secondaryMeasures={[m_AvgWon, m_AmountBOP]}
                viewBy={yearSnapshot}
                config={{
                    primaryChartType: 'line',
                    secondaryChartType: 'column',
                    dataLabels: {
                        visible: true
                    },
                    secondary_yaxis: {
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
    .add('Line+Line', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotEOP]}
                    viewBy={a_Product}
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
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotEOP]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_AmountBOP]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'line',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
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
    .add('Line+Area', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
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
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_AmountBOP]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'line',
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
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
    .add('Area+Column', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
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
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_AmountBOP]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'column',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
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
    .add('Area+Line', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
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
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_AmountBOP]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'line',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
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
    .add('Area+Area', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1PM,  1SM, 1VB</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
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
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP]}
                    secondaryMeasures={[m_SnapshotBOP]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct]}
                />

            <h1>2PM, 1SM, 1VB, filter 1 value</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_MinAmount]}
                    viewBy={a_Product}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                    }}
                    filters = {[filterProduct,relativeDate]}
                />
            
            <h1>2PM,  2SM, 1 date</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                    }}
                />
            <h1>2PM,  2SM, 1 date, stack measures</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasures: true
                    }}
                />
            
            <h1>2PM,  2SM, 1 date, stack to percent</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_ClosedBOP, m_ClosedEOP]}
                    secondaryMeasures={[m_SnapshotBOP, m_SnapshotEOP]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasuresToPercent: true
                    }}
                />

            <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_MinAmount]}
                    viewBy={yearSnapshot}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        stackMeasures: true,
                        dualAxis: false
                    }}
                />

            <h1>2PM,  2SM, 1 date, set min-max</h1>
            <ComboChart
                    projectId={projectId}
                    primaryMeasures={[m_Amount, m_AvgAmount]}
                    secondaryMeasures={[m_AvgWon, m_AmountBOP]}
                    viewBy={yearClosed}
                    config={{
						primaryChartType: 'area',
                        secondaryChartType: 'area',
                        dataLabels: {
                            visible: true
                        },
                        secondary_yaxis: {
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

    ));
