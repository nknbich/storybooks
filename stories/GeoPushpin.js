import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import {ColumnChart, HeaderPredicateFactory, GeoPushpinChart, Visualization } from '@gooddata/react-components';

import fixtures from '../src/data/fixtures';
const WRAPPER_STYLE = { width: 1200, height: 400 };
const WRAPPER_STYLE2 = {position: "relative", height: 600, border: "solid 2px black"};
const WRAPPER_STYLE3 = {position: "relative", height: 1600, border: "solid 2px black"};
let exportResult: any;

const DEFAULT_CONFIG = {
    mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
}

function onExportReady(execution: any) {
    exportResult = execution;
}

async function doExport() {
    const result = await exportResult({
        format: 'xlsx',
        includeFilterContext: true,
        mergeHeaders: true
    });
    window.open(result.uri);
}

storiesOf('Geo Pushpin', module)
    .add('Basic cases', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Geo clustering</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    config={{ 
                        ...DEFAULT_CONFIG
                    }}
                />
            </div>
            <h1>Location - zoom - center</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    config={{ 
                        ...DEFAULT_CONFIG,
                        center: {
                            lat: 36.800486,
                            lng: -94.922363,
                        },
                        zoom: 6
                    }}
                />
            </div>
             <h1>Location + Size</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    config={{ 
						...DEFAULT_CONFIG 
                }}
                />
            </div>
            <h1>Location + Color</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Location + Segment By</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    segmentBy={fixtures.a_State}
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Location + Size + Segment By</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Location + Color + Segment By</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div> 
            <h1>Location + Size + Color + Segment By - tooltipText</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
                            ...DEFAULT_CONFIG,
                            tooltipText: fixtures.g_Latlon
					}}
                />
            </div>
            <h1>Location + Size + Color + Segment By</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
        </div>
    ))
    .add('Special cases', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Missing Location - should render error</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    size={fixtures.m_SumPopulation}
                    color={[fixtures.m_MinPopulation]}
                    segmentBy={fixtures.a_Timezone}
                    filters={[fixtures.filterCity]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Too large insight but can’t render</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon1}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>No data</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    filters={[fixtures.filterMinPopulation_EqualTo]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Invalid data</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_StageName}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Protected attribute</h1> //Protected attribute: DST
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
        </div> 
    ))
    .add('Apply measure format', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Measure apply custom metric format</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_PopulationRatio}
                    color={fixtures.m_SumPopulationFormat}
                    segmentBy={fixtures.a_City}
                    config={{ 
                            ...DEFAULT_CONFIG,
                            tooltipText: fixtures.g_Latlon
					}}
                />
            </div>
            <h1>Measure Ratio - should ignore computing ratio</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_PopulationRatio}
                    color={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Derive measure - POP</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_POP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Derive measure - PP</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_PP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
        </div>
    ))
    .add('Filter', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Static filter inside measures - less than or = 50 </h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_LessThanOrEqualTo]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Static filter inside measures - between 0 -50</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Between]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Static filter inside measures - equal 6</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Equal]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Global filter by attribute</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Global filter negative attribute</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                    filters={[fixtures.filterDSTNegative]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Global filter by absolute date</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
                </div> 
            <h1>Global filter by relative date</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterrelativeYearSnapshot]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Global filter by attribute + date</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>both static and global filters</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterSumPopulation_Between}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>filter state and export</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    filters={[fixtures.filterState]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    onExportReady={onExportReady}
                />
                <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Drill', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Drill into measure size/color</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    drillableItems={[
                        //HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77186`),
                        HeaderPredicateFactory.uriMatch(`/gdc/md/${fixtures.projectId}/obj/77082`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                />
            </div>
            <h1>Drill into Location/Segment By</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                />
            </div>
        </div>
    ))
    .add('Export', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Export geo pushpin to csv</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    onExportReady={onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
            <h1>Export to xlsx</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    onExportReady={onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
            <h1>Export to xlsx</h1>
            <p>Missing 1 or more buckets</p>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    onExportReady={onExportReady}
                />
            </div>
            <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
        </div>
    ))
    .add('Element Masking', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Element Masking</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_Zip}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
        </div>
    ))
    .add('Localization', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Localization: fr-FR</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_StageName}
                    locale="fr-FR"
                />
            </div>
        </div>
    ))
    .add('Visualizaton', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No location</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaSc2ulWdbHf"
                    cconfig={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Only Location</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aasxRRtKbTLU"
                    config={{
                        ...DEFAULT_CONFIG
                    }}
                />
            </div> 
            <h1>Location + size</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaiXFzYnfuDp"
                    config={{ 
						...DEFAULT_CONFIG,
						tooltipText: fixtures.a_State
					}}
                />
            </div> 
             <h1>Location + color</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabfiMtLeZGC"
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Location + size + segment</h1>
            <div style={WRAPPER_STYLE3}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadfkyQZgXcx"
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Location + color + segment</h1>
            <div style={WRAPPER_STYLE3}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabMcl9oaEHj"
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Location + size + color</h1>
            <div style={WRAPPER_STYLE3}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaerv5m0iy8m"
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Location + size + color + segment</h1>
            <div style={WRAPPER_STYLE3}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaryAqK6hpES"
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div>
            <h1>Filter inside measure</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaryAqK6hpES"
                    filters={[
                        {
                            "measureValueFilter": {
                                "condition": {
                                    "comparison": {
                                        "operator": "LESS_THAN_OR_EQUAL_TO",
                                        "value": 50
                                    }
                                },
                                "measure": {
                                    "localIdentifier": "76bffd5231754b46a0fdf2575bacd032"
                                }
                            }
                        }
                    ]}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                />
            </div> 
            <h1>Filter attribute + date</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaryAqK6hpES"
                    filters ={[
                        {
                           "positiveAttributeFilter" : {
                              "displayForm" : {
                                 "uri" : "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/77084"
                              },
                              "in" : [ "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/77083/elements?id=316"
                            ]
                           }
                        }
                     ]}
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Drill metric SumPopulation</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    drillableItems={[
                        HeaderPredicateFactory.identifierMatch(`e2ca72bcfbf542fbb427e76b45b4ebbc`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Drill attribute City</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    drillableItems={[
                        HeaderPredicateFactory.identifierMatch(`97851f168dca4118ac88f3abfd3bdf2a`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Localization</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabBJ3S0cEN5"
                    //identifier="aadUg2hJghFC"
                    locale="fr-FR"
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
            </div>
            <h1>Export</h1>
            <div style={WRAPPER_STYLE2}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    config={{ 
							...DEFAULT_CONFIG
					}}

                />
                <button onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 1', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Ratio + format metric + filter, zoom minimum</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulationRatio}
                    color={fixtures.m_MinPopulationRatio}
                    segmentBy={fixtures.a_State}
                    config={{
                        zoom: 1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 2', () => (
        <div style={WRAPPER_STYLE}>
            <h1>POP + format metric + filter</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_PP_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{  position: "relative",padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 3', () => (
        <div style={WRAPPER_STYLE}>
            <h1>AM sum + format metric + filter, zoom maximum</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Sum_SumPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        zoom: 14,
                        center: { lat: 40.922326, lng: -72.637078 },
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity]}
                    onExportReady = {onExportReady}
                />
                <button style={{  position: "relative",padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div> 
            <h1>AM dif + format metric + filter</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Difference_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{  position: "relative",padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
             <h1>AM ratio + format metric + filter</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Ratio_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
             <h1>AM change + format metric + filter</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Change_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{  position: "relative",padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
            <h1>AM multiplication + format metric + filter</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_Multiplication_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 4', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Element masking + format metric + filter</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_Zip}
                    config={{ 
							...DEFAULT_CONFIG
					}}
                    filters={[fixtures.filterCity1value]}
                    onExportReady = {onExportReady}
                />
                <button style={{  position: "relative",padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Combine case 5', () => (
        <div style={WRAPPER_STYLE}>
            <h1>config zoom, center, mdObject</h1>
            <div style={WRAPPER_STYLE2}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    config={{
                        tooltipText: fixtures.g_Latlon,
                        zoom: 1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        ...DEFAULT_CONFIG
                    }}
                    filters={[fixtures.filterCity]}
                    onExportReady = {onExportReady}
                />
                <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))