import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/react-components/styles/css/main.css';
import { HeaderPredicateFactory, GeoPushpinChart, Visualization, Model } from '@gooddata/react-components';

import fixtures from '../src/data/fixtures';
const WRAPPER_STYLE = { width: 1200, height: 400 };
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
    window.open(result.uri);
}

storiesOf('Geo Pushpin', module)
    .add('Basic cases', () => (
        <div style={WRAPPER_STYLE}>
            <h1>attribute on Location is non-geo attribute</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.a_StageName}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div> 
            <h1>attribute on Location is geo attribute</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    config={{ 
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" ,
                        tooltipText: fixtures.g_Latlon
                    }}
                />
            </div>
            <h1>Location + Size</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + Segment By</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    segmentBy={fixtures.a_City}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + Size + Segment By</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + Color + Segment By</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    color={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div> 
            <h1>Location + Size + Color + Segment By</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
        </div>
    ))
    .add('Special cases', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Missing Location</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    size={fixtures.m_SumPopulation}
                    color={[fixtures.m_MinPopulation, fixtures.m_MaxPopulation]}
                    segmentBy={fixtures.a_Timezone}
                    filters={[fixtures.filterCity]}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Too large insight but can’t render</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon1}
                />
            </div>
            <h1>No data</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterMinPopulation_Equal]}
                />
            </div>
            <h1>Invalid data</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_StageName}
                />
            </div>
            <h1>Protected attribute</h1> //Protected attribute: DST
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                />
            </div>
            <h1>Restricted fact</h1> //Restricted metric: SumLaBorPopulation
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumLaBorPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                />
                <button onClick={doExport}>Export</button>
            </div>
            <h1>Many measures, attributes on Size/Color/Location/Segment By</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={[fixtures.m_MinPopulation, fixtures.m_MaxPopulation]}
                />
            </div>
        </div>
    ))
    .add('Apply measure format', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Ratio</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_PopulationRatio}
                    color={fixtures.m_SumPopulation}
                    segmentBy={fixtures.a_City}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Derive measure - POP</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_POP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Derive measure - PP</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_PP_SumPopulation}
                    segmentBy={fixtures.a_YearSnapshot}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
        </div>
    ))
    .add('Filter', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Static filter inside measures - equal</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_LessThanOrEqualTo]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Static filter inside measures - less than or equal</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Between]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Static filter inside measures - between</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterSumPopulation_Between]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by attribute</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter negative attribute</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_DST}
                    filters={[fixtures.filterDSTNegative]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by absolute date</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by relative date</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterrelativeYearSnapshot]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Global filter by attribute + date</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>both static and global filters</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterMinPopulation_LessThanOrEqualTo]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_State}
                    filters={[fixtures.filterState]}
                    config=
                    {{
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                    onExportReady = {onExportReady}
                />
                <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add('Drill', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Drill into measure size/color</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
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
            <div style={{ height: 600, border: "solid 2px black" }}>
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
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    config={{mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    onExportReady={onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
            <h1>Export to xlsx</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    onExportReady={onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div> 
            <h1>Export to xlsx</h1>
            <p>Missing 1 or more buckets</p>
            <div style={{ height: 600, border: "solid 2px black" }}> 
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_City}
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    onExportReady={onExportReady}
                />
            </div>
            <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button>
        </div>
    ))
    .add('Element Masking', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Element Masking</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    projectId={fixtures.projectId}
                    location={fixtures.g_Latlon}
                    size={fixtures.m_SumPopulation}
                    color={fixtures.m_MinPopulation}
                    segmentBy={fixtures.a_Zip}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
        </div>
    ))
    .add('Localization', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Localization: fr-FR</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
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
            <h1>Location + size</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaiXFzYnfuDp"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + color</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabfiMtLeZGC"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + size + segment</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadfkyQZgXcx"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + color + segment</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabMcl9oaEHj"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + size + color</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaerv5m0iy8m"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Location + size + color + segment</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Filter inside measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
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
                                    "localIdentifier": "e2ca72bcfbf542fbb427e76b45b4ebbc"
                                }
                            }
                        }
                    ]}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                />
            </div>
            <h1>Filter attribute + date</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    filters={[fixtures.filterCity, fixtures.filterabsoluteYearSnapshot]}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Drill metric SumPopulation</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    drillableItems={[
                        HeaderPredicateFactory.identifierMatch(`e2ca72bcfbf542fbb427e76b45b4ebbc`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Drill attribute City</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    drillableItems={[
                        HeaderPredicateFactory.identifierMatch(`97851f168dca4118ac88f3abfd3bdf2a`)
                    ]}
                    onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Localization</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aabBJ3S0cEN5"
                    locale="fr-FR"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
            </div>
            <h1>Export</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aadUg2hJghFC"
                    config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}

                />
                <button onClick={doExport}>Export</button>
            </div> 
        </div>
    ))
