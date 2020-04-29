import React from "react";

import { storiesOf } from "@storybook/react";
import "@gooddata/react-components/styles/css/main.css";
import {
    BulletChart,
    HeaderPredicateFactory,
    Visualization,
} from "@gooddata/react-components";

import fixtures from "../src/data/fixtures";
const WRAPPER_STYLE = { width: 1200, height: 400 };
let exportResult: any;

function onExportReady(execution: any) {
    exportResult = execution;
}

async function doExport() {
    const result = await exportResult({
        format: "xlsx",
        includeFilterContext: true,
        mergeHeaders: true,
    });
    window.open(result.uri);
}

storiesOf("Bullet Chart", module)
    .add("Basic bullet chart", () => (
        <div style={WRAPPER_STYLE}>
            <h1>3M</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                />
            </div>
            <h1>Primary measure + Target measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                />
            </div>
            <h1>Primary measure + Comparative measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    comparativeMeasure={fixtures.m_Amount}
                />
            </div>
            <h1>Primary measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                />
            </div>
            <h1>Comparative measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    comparativeMeasure={fixtures.m_Amount}
                />
            </div>
            <h1>Target measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    targetMeasure={fixtures.m_AvgAmount}
                />
            </div>
            <h1>3M + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                />
            </div>
            <h1>Primary measure + Target measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                />
            </div>
            <h1>Primary measure + Comparative measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                />
            </div>
            <h1>Primary measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                />
            </div>
            <h1>Target measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    targetMeasure={fixtures.m_AvgAmount}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                />
            </div>
        </div>
    ))
    .add("Special bullet chart", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Too many data point</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_Account, fixtures.a_Opportunity]}
                />
            </div>
            <h1>Invalid</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_State]}
                />
            </div>
            <h1>No data</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                    filters={[fixtures.filterabsoluteYearSnapshot]}
                />
            </div>
            <h1>
                All measures on the primary, target, comparative measure are as
                the same
            </h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_Amount}
                    targetMeasure={fixtures.m_Amount1}
                    comparativeMeasure={fixtures.m_Amount2}
                    viewBy={[fixtures.a_StageName]}
                />
            </div>
            <h1>Negative bullet chart</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountNegative}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                />
            </div>
            <h1>Protected attribute</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                />
            </div>
            <h1>Element Masking</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_SnapshotEOP}
                    targetMeasure={fixtures.m_SnapshotBOP}
                    comparativeMeasure={fixtures.m_OppFirstSnapshot}
                    viewBy={[fixtures.a_Priority]}
                />
            </div>
        </div>
    ))
    .add("Different type measures", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Applies PP</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_Amount}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_PP_Amount}
                    viewBy={[fixtures.a_YearSnapshot, fixtures.a_StageName]}
                    filters={[fixtures.relativeYearSnapshot]}
                />
            </div>
            <h1>Applies SPLY</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_Amount}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_POP_Amount}
                    viewBy={[fixtures.a_YearSnapshot, fixtures.a_StageName]}
                    filters={[fixtures.relativeYearSnapshot]}
                />
            </div>
            <h1>Applies AM</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_SumPopulation}
                    targetMeasure={fixtures.m_MinPopulation}
                    comparativeMeasure={fixtures.m_Sum_SumPopulation}
                    viewBy={[fixtures.a_YearSnapshot,fixtures.a_State]}
                />
            </div>
            <h1>Applies Derive AM</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_SumPopulation}
                    targetMeasure={fixtures.m_Sum_SumPopulation}
                    comparativeMeasure={fixtures.m_derive_AM_Population}
                    viewBy={[fixtures.a_YearSnapshot,fixtures.a_State]}
                />
            </div>
        </div>
    ))
    .add("Apply configuration panel", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Bullet chart applies colors</h1>
            <h1>Case 1: palette color</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                    config={{
                        colorPalette: [
                            {
                                guid: "01",
                                fill: {
                                    r: 195,
                                    g: 49,
                                    b: 73,
                                },
                            },
                            {
                                guid: "02",
                                fill: {
                                    r: 168,
                                    g: 194,
                                    b: 86,
                                },
                            },
                            {
                                guid: "03",
                                fill: {
                                    r: 255,
                                    g: 230,
                                    b: 240,
                                },
                            }
                        ],
                    }}
                />
            </div>
            <h1>Case 2: custom color</h1>
            <p>custom color for Amount</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                    config={{
                        colorMapping: [
                            {
                                predicate: (headerItem) =>
                                    headerItem.measureHeaderItem &&
                                    headerItem.measureHeaderItem
                                        .localIdentifier === "Amount",
                                color: {
                                    type: "guid",
                                    value: "5",
                                },
                            },
                        ],
                    }}
                />
            </div>
            <h1>Case 3: array color</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                    config={{
                        colors: [
                            "rgb(255, 102, 163)",
                            "rgb(0, 204, 0)",
                            "rgb(255, 230, 240)"
                        ],
                    }}
                />
            </div>
            <h1>Bullet chart applies X-axis, Y-axis, legend, canvas </h1>
            <p>legend - right, grid line: not show, data labels: show</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                    config={{
                        xaxis: {
                            rotation: "30",
                        },
                        yaxis: {
                            name: {
                                position: "low",
                            },
                            rotation: "30",
                        },
                        dataLabels: {
                            visible: true,
                        },
                        legend: {
                            enabled: true,
                            position: "right", 
                        },
                        grid: {
                            enabled: false,
                        },
                    }}
                />
            </div>
        </div>
    ))
    .add("Filter", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Filter attribute in/not in</h1>
            <p>StageName: Interest, ShortList</p>
            <p>Product not in TouchAll, PhoenixSoft</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                    filters={[
                        fixtures.filterStageNameInterestShortList,
                        fixtures.filterProductNegative,
                    ]}
                />
            </div>
            <h1>Filter date absolute</h1>
            <p>from: '2011-01-01', to: '2011-06-30'</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_YearSnapshot, fixtures.a_StageName]}
                    filters={[fixtures.absoluteYearSnapshot]}
                />
            </div>
            <h1>Filter date relative</h1>
            <p>YearSnapshot >= 2012</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_YearSnapshot, fixtures.a_StageName]}
                    filters={[fixtures.relativeYearSnapshot]}
                />
            </div>
            <h1>Filter measure value</h1>
            <p>Amount > 5000000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName]}
                    filters={[fixtures.filterAmount_GreaterThan]}
                />
            </div>
            <p>Amount less than 1000000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                    filters={[fixtures.filterAmount_LessThan]}
                />
            </div>
            <h1>Combine all filters</h1>
            <p>StageName not in Closed Lost</p>
            <p>YearSnapshot >= 2012</p>
            <p>Amount not between 0 and 20000000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_YearSnapshot, fixtures.a_StageName]}
                    filters={[
                        fixtures.filterStageNameNegative,
                        fixtures.relativeYearSnapshot,
                        fixtures.filterAmount_NotBetween,
                    ]}
                />
            </div>
        </div>
    ))
    .add("Drill", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Drill event on bullet chart</h1>
            <p>drill Amount, Amount[BOP], Avg.Amount, StageName</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_StageName, fixtures.a_Product]}
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/2858`
                        ),
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/62827`
                        ),
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/1279`
                        ),
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/1805`
                        ),
                    ]}
                    onFiredDrillEvent={(data) => {
                        console.log(data.executionContext);
                        console.log(data.drillContext);
                    }}
                />
            </div>
        </div>
    ))
    .add("Export", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Export to xlsx</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_YearSnapshot, fixtures.a_StageName]}
                    filters={[
                        fixtures.filterStageNameNegative,
                        fixtures.relativeYearSnapshot,
                        fixtures.filterAmount_NotBetween,
                    ]}
                    onExportReady={onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
        </div>
    ))
    .add("Localization", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Localization: fr-FR</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    projectId={fixtures.projectId}
                    primaryMeasure={fixtures.m_AmountBOP}
                    targetMeasure={fixtures.m_AvgAmount}
                    comparativeMeasure={fixtures.m_Amount}
                    viewBy={[fixtures.a_YearSnapshot, fixtures.a_StageName]}
                    filters={[
                        fixtures.filterActivityRestricted_LessThanOrEqualTo,
                    ]}
                    locale="fr-FR"
                />
            </div>
        </div>
    ))
    .add("Visualizaton", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Render bullet chart</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaHgHv4Zf0gO"
                />
            </div>
            <h1>Config bullet chart</h1>
            <p>Colors, X-axis, Y-axis, legend, canvas</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaHgHv4Zf0gO"
                    config={{
                        xaxis: {
                            rotation: "30",
                        },
                        yaxis: {
                            name: {
                                position: "low",
                            },
                            rotation: "30",
                        },
                        dataLabels: {
                            visible: true,
                        },
                        legend: {
                            enabled: true,
                            position: "right", 
                        },
                        grid: {
                            enabled: false,
                        },
                    }}
                />
            </div>
            <h1>Bullet chart applies POP, AM sum</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaktgblRcSAZ"
                />
            </div>
            <h1>Bullet chart applies PP, AM Different</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="acFy4qNMbyOS"
                />
            </div>
            <h1>Combine filter attribute + Export</h1>
            <p>StageName: Short List</p>
            <p>Product not in CompuSci, Explorer</p>
            <p>Amount >= 300000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaHgHv4Zf0gO"
                    filters={[
                        {
                            positiveAttributeFilter: {
                                displayForm: {
                                    uri:
                                        "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/1805",
                                },
                                in: [
                                    "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/1095/elements?id=1251",
                                ],
                            },
                        },
                        {
                            negativeAttributeFilter: {
                                displayForm: {
                                    uri:
                                        "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/952",
                                },
                                notIn: [
                                    "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/949/elements?id=169655",
                                    "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/949/elements?id=168279",
                                ],
                            },
                        },
                        {
                            "measureValueFilter": {
                                "condition": {
                                    "comparison": {
                                        "operator": "GREATER_THAN_OR_EQUAL_TO",
                                        "value": 300000
                                    }
                                },
                                "measure": {
                                    "localIdentifier": "89bb2d47367142b68266633b993aa0bd"
                                }
                            }
                        }
                    ]}
                    onExportReady={onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </div>
            <h1>Drill event on bullet chart</h1>
            <p>drill Amount, Amount[BOP], Avg.Amount, StageName</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaHgHv4Zf0gO"
                    drillableItems={[
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/2858`
                        ),
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/62827`
                        ),
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/1279`
                        ),
                        HeaderPredicateFactory.uriMatch(
                            `/gdc/md/${fixtures.projectId}/obj/1805`
                        ),
                    ]}
                    onFiredDrillEvent={(data) => {
                        console.log(data.executionContext);
                        console.log(data.drillContext);
                    }}
                />
            </div>
            <h1>Localization bullet chart</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <Visualization
                    projectId={fixtures.projectId}
                    identifier="aaHgHv4Zf0gO"
                    filters={[
                        fixtures.filterActivityRestricted_LessThanOrEqualTo,
                    ]}
                    locale="de-DE"
                />
            </div>
        </div>
    ));
