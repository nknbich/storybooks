//author: pdtvi
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { Headline, PivotTable, ColumnChart, BarChart, LineChart, AreaChart, HeaderPredicateFactory, PieChart, DonutChart, Treemap, Heatmap, ComboChart, Visualization, ScatterPlot, BubbleChart } from '@gooddata/react-components';
import fixtures from '../src/data/fixtures';
import { ConfigModule } from '@gooddata/gooddata-js/lib/config';

const DOWNLOADER_ID = 'downloader';
let exportResult: any;

function onExportReady(execution: any) {
   exportResult = execution;
}

async function doExport() {
   const result = await exportResult({
      format: 'xlsx',
      includeFilterContext: true,
      mergeHeaders: true
   });
   //downloadFile(result.uri);
   window.open(result.uri);
}

const WRAPPER_STYLE = { width: 1200, height: 400 };
storiesOf('Filter by value measure', module)
   .add('Pivot Table', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000</h1>
         <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_StageName]}
            columns={[fixtures.a_Product]}
            filters={[fixtures.filterAmount_GreaterThan]}
         />
         <h1>Ratio, Amount>5000000</h1>
         <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountRatio]}
            rows={[fixtures.a_StageName]}
            columns={[fixtures.a_Product]}
            filters={[fixtures.filterAmountRatio_GreaterThan]}
         />
         <h1>AM - Filter positive attribute + absolute date, Change_ClosedBOP_SnapshotBOP = -100%
         </h1>
         <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
            rows={[fixtures.a_StageName, fixtures.a_Product]}
            columns={[fixtures.a_YearSnapshot]}
            filters={[fixtures.filterChange_EqualTo, fixtures.filterStageNameInterest, fixtures.absoluteYearSnapshot]}
         />
         <h1>PP, SLPY - Combine all filters, m_POP_SumDayToClose between 20000 and 100000</h1>
         <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_SumDayToClose, fixtures.m_POP_SumDayToClose]}
            rows={[fixtures.a_YearClosed]}
            columns={[fixtures.a_StageName]}
            filters={[fixtures.filterPOPSumDayToClose_Between, fixtures.filterStageNameNegative, fixtures.relativeYearSnapshot]}
         />
         <h1>Pivot has sub-total and sort attribute Product
            Amount less than 1000000, drill Amount, export to xlsx</h1>
         <button onClick={() => doExport()}>Export</button>
         <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            rows={[fixtures.a_Product, fixtures.a_StageName]}
            columns={[fixtures.a_Product]}
            totals={[fixtures.totalsPivotTable]}
            sortBy={fixtures.sortonPivotTable}
            filters={[fixtures.filterAmount_LessThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
      </div>
   ))
   .add('Column Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={[fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[fixtures.a_StageName]}
            filters={[fixtures.filterChange_EqualTo]}
            config={{
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Bar Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={[fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[fixtures.a_StageName]}
            filters={[fixtures.filterChange_EqualTo]}
            config={{
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Line Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <LineChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            trendBy={fixtures.a_StageName}
            segmentBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_GreaterThan]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <LineChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
            trendBy={fixtures.a_StageName}
            filters={[fixtures.filterChange_EqualTo]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Area Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={[fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_GreaterThan]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP, fixtures.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[fixtures.a_StageName]}
            filters={[fixtures.filterChange_EqualTo]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Combo Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_Amount]}
            secondaryMeasures={[fixtures.m_AmountBOP]}
            viewBy={[fixtures.a_StageName]}
            filters={[fixtures.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <ComboChart
            projectId={fixtures.projectId}
            primaryMeasures={[fixtures.m_ClosedBOP, fixtures.m_SnapshotBOP]}
            secondaryMeasures={[fixtures.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[fixtures.a_StageName]}
            filters={[fixtures.filterChange_EqualTo]}
            config={{
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Scatter Plot/Bubble Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <ScatterPlot
            projectId={fixtures.projectId}
            xAxisMeasure={fixtures.m_Amount}
            yAxisMeasure={fixtures.m_AvgAmount}
            attribute={fixtures.a_StageName}
            config={{
               dataLabels: {
                  visible: true
               }
            }}
            filters={[fixtures.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>Ratio, Amount>5000000, stack to %</h1>
         <BubbleChart
            projectId={fixtures.projectId}
            xAxisMeasure={fixtures.m_AmountRatio}
            yAxisMeasure={fixtures.m_Amount}
            viewBy={fixtures.a_StageName}
            filters={[fixtures.filterAmountRatio_GreaterThan]}
            config={{
               dataLabels: {
                  visible: true
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Pie/Donut Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={fixtures.a_StageName}
            filters={[fixtures.filterAmount_GreaterThan]}
            config={{
               dataLabels: {
                  visible: true
               }
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>Ratio, Amount>5000000, drill Amount, stack to %</h1>
         <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountRatio]}
            viewBy={fixtures.a_StageName}
            filters={[fixtures.filterAmountRatio_GreaterThan]}
            config={{
               dataLabels: {
                  visible: true
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
         />
      </div>
   ))
   .add('Treemap/Heatmap', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <Treemap
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={fixtures.a_StageName}
            segmentBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Filter positive attribute + absolute date, Change_ClosedBOP_SnapshotBOP = -100%
            stack to %
         </h1>
         <Heatmap
            projectId={fixtures.projectId}
            measure={fixtures.m_AmountRatio}
            rows={fixtures.a_StageName}
            columns={fixtures.a_Product}
            config={{
               dataLabels: {
                  visible: true
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
            filters={[fixtures.filterAmountRatio_GreaterThan]}
         />
      </div>
   ))
   .add('Special Insights', () => (
      <div style={WRAPPER_STYLE}>
         <h1>No data</h1>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={[fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_NotBetween]}
         />
         <h1>Invalid Insight</h1>
         <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountRatio]}
            viewBy={[fixtures.a_StartFrom]}
            filters={[fixtures.filterAmountRatio_GreaterThan]}
         />
         <h1>Insight has negative measure (Pie/Donut/Treemap)</h1>
         <h2>Pie chart</h2>
         <PieChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNegative]}
            viewBy={fixtures.a_StageName}
            filters={[fixtures.filterAmountNegative_NotEqualTo]}
         />
         <h2>Donut chart</h2>
         <DonutChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNegative]}
            viewBy={fixtures.a_StageName}
            filters={[fixtures.filterAmountNegative_NotEqualTo]}
         />
         <h2>Treemap</h2>
         <Treemap
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNegative]}
            viewBy={fixtures.a_StageName}
            filters={[fixtures.filterAmountNegative_NotEqualTo]}
         />
         <h1>Insight has too large data, can’t show data</h1>
         <AreaChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={fixtures.a_Account}
            stackBy={fixtures.a_StageName}
            filters={[fixtures.filterAmount_GreaterThan]}
         />
         <h1>Insight contains NULL or empty value</h1>
         <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_AmountNullFormat]}
            rows={[fixtures.a_StageName, fixtures.a_Product]}
            columns={[fixtures.a_YearSnapshot, fixtures.a_YearClosed]}
            filters={[fixtures.filterAmountNullFormat_GreaterThanOrEqualTo]}
         />
         <h1>Insight has restricted fact</h1>
         <PivotTable
            projectId={fixtures.projectId}
            measures={[fixtures.m_ActivityRestricted]}
            rows={[fixtures.a_Department]}
            filters={[fixtures.filterActivityRestricted_LessThanOrEqualTo]}
         />
         <h1>Insight has protected attribute</h1>
         <h3>Admin: show insight, Other roles: show “SORRY, WE CAN’T DISPLAY ...” </h3>
         <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={[fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_GreaterThan]}
         />
         <h1>Insight has duplicated measures, check that render correctly</h1>
         <BarChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_AmountDuplicate]}
            viewBy={[fixtures.a_StageName]}
            stackBy={fixtures.a_Product}
            filters={[fixtures.filterAmount_GreaterThan]}
         />
         <h1>Headline apply filter measure value</h1>
         <Headline
            projectId={fixtures.projectId}
            primaryMeasure={fixtures.m_Amount}
            filters={[fixtures.filterAmount_GreaterThan]}
         />
         <h1>Insight has only measures</h1>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_AvgAmount]}
            filters={[fixtures.filterAmount_GreaterThan]}
         />
         <h1>Insight has many measures that there are more than one measure value filter, but each filter references to the same measure.</h1>
         <h3>1. Filter duplicate 1 measure: Difference logical-operators</h3>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_AmountRatio]}
            viewBy={[fixtures.a_Product]}
            filters={[fixtures.filterAmount_GreaterThan, fixtures.filterAmount_NotBetween]}
         />
         <h3>1. Filter duplicate 1 measure: Difference value</h3>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_AmountRatio]}
            viewBy={[fixtures.a_Product]}
            filters={[fixtures.filterAmount_GreaterThan, fixtures.filterAmount_GreaterThan_differencevalue]}
         />
         <h3>2. Filter duplicate 1 measure: same value</h3>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_AmountRatio]}
            viewBy={[fixtures.a_Product]}
            filters={[fixtures.filterAmount_GreaterThan, fixtures.filterAmount_GreaterThan_samevalue]}
         />
         <h3>3. Filter duplicate more measures</h3>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount, fixtures.m_AmountRatio]}
            viewBy={[fixtures.a_Product]}
            filters={[fixtures.filterAmount_GreaterThan, fixtures.filterAmount_NotBetween, fixtures.filterAmountRatio_GreaterThan, fixtures.filterAmountRatio_LessThan]}
         />
         <h1>Insight applies measure value filters that reference measure that is not in the AFM</h1>
         <ColumnChart
            projectId={fixtures.projectId}
            measures={[fixtures.m_Amount]}
            viewBy={[fixtures.a_Product]}
            filters={[fixtures.filterAmountRatio_GreaterThan]}
         />
      </div>
   ))
   .add('Visualization ', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Normal measure, Ad-hoc Fact, Ad-hoc Attribute</h1>
         <h1>Date Filter, Min Amount > -400000</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aagWYcrFdD5S"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN",
                           "value": -400000
                        }
                     },
                     "measure": {
                        "localIdentifier": "f0bfefdf31df413eb09d8ceb3a651d35"
                     }
                  }
               }
            ]}
         />
         <h1>Attribute Filter, _Close [BOP] = 40659</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aaeWYp5of4AP"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "EQUAL_TO",
                           "value": 40659
                        }
                     },
                     "measure": {
                        "localIdentifier": "aff55a1e143048f08158c2567e2754b0"
                     }
                  }
               }
            ]}
         />
         <h1>Combine with local filters, Count of Opp. Snapshot, Snapshot between 3000 and 15000</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aabWY3v3f91C"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "range": {
                           "operator": "BETWEEN",
                           "from": 3000,
                           "to": 15000
                        }
                     },
                     "measure": {
                        "localIdentifier": "0be7e315c6d84d8780bf51007dc23b65"
                     }
                  }
               }
            ]}
         />
         <h1>only measure value filter, Median Amount less than or = 12000</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aahWYp5of4AP"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "LESS_THAN_OR_EQUAL_TO",
                           "value": 12000
                        }
                     },
                     "measure": {
                        "localIdentifier": "181c95923a4a4bbca5ea3ae1097b78fd"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Avg Amount less than 60000</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aabXOST3fFdR"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "LESS_THAN",
                           "value": 60000
                        }
                     },
                     "measure": {
                        "localIdentifier": "f0bfefdf31df413eb09d8ceb3a651d35"
                     }
                  }
               }
            ]}
         />
         <h1>Derived SPLY/PP</h1>
         <h1>Combine all filters, Amount Negative-period ago != 96000</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aabYfa1ka3dM"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "NOT_EQUAL_TO",
                           "value": 96000
                        }
                     },
                     "measure": {
                        "localIdentifier": "e08b94c9dbeb4382b3027cb5da075b1f_previous_period"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Amount[BOP]-SP year ago >= 2000000</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aadYfa1ka3dM"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 2000000
                        }
                     },
                     "measure": {
                        "localIdentifier": "a69896f13d2948a5aaea02d5c22ae6b6_pop"
                     }
                  }
               }
            ]}
         />
         <h1>AM/derive AM</h1>
         <h1>Combine all filters, Difference of Avg Amount >=0 -> check data show 2010,2013</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aabYinzuhoJY"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 0
                        }
                     },
                     "measure": {
                        "localIdentifier": "110ecb65904d4eb6acd24b9f6a35cbd3"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Change-PP between -0.1 and 2 -> check data show 2011,2013</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aagYhsAShoCJ"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "range": {
                           "operator": "BETWEEN",
                           "from": -0.1,
                           "to": 2
                        }
                     },
                     "measure": {
                        "localIdentifier": "110ecb65904d4eb6acd24b9f6a35cbd3"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Ratio of… -SP year ago not between 0.5 and 1
                        -> check data show 2011,2012</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aadYibo5hoGm"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "range": {
                           "operator": "NOT_BETWEEN",
                           "from": 0.5,
                           "to": 1
                        }
                     },
                     "measure": {
                        "localIdentifier": "110ecb65904d4eb6acd24b9f6a35cbd3_pop"
                     }
                  }
               }
            ]}
         />
         <h1>Ratio - Combine all filters</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aad2RgVtdKFY"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 0.8
                        }
                     },
                     "measure": {
                        "localIdentifier": "1821f5c3719a45c096d66921939f4aae"
                     }
                  }
               }
            ]}
         />
         <h1>Format in % - Combine all filters, Amount[BOP]>=1000000</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="adm3s7hoa6Uk"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 1000000
                        }
                     },
                     "measure": {
                        "localIdentifier": "5cefcaa439af4a58b064202c2926ecf0"
                     }
                  }
               }
            ]}
         />
         <h1>Stack to % - Combine all filters</h1>
         <Visualization
            projectId={fixtures.projectId}
            identifier="aak3KyV3dDev"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 50
                        }
                     },
                     "measure": {
                        "localIdentifier": "a2db5e17b01e42748a0de2d438e7c14b"
                     }
                  }
               }
            ]}
         />
      </div>
   ))

   ;
