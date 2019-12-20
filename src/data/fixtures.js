import { Model } from '@gooddata/react-components';

const demoProject = {
    'https://secure.gooddata.com': '',
    'https://staging3.intgdc.com': 'pbqw1946hsb7q22oqb1xuzma3s75kltx',
    'https://staging2.intgdc.com': 'd8qmrg8qi02th0pdyxi0jg7ekrv9beqh',
    'https://staging.intgdc.com': 'egbqln7774to906vx4pfo6ear7w0ifr3'
};
const backendUrl = "https://staging3.intgdc.com"; // eslint-disable-line no-undef
const demoProjectId = demoProject[backendUrl];
if (!demoProjectId) {
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject); // eslint-disable-line no-console
}
const backendUrlForInfo = backendUrl;
const projectId = demoProjectId;
const filterProduct = Model.positiveAttributeFilter('label.product.id.name', ["Educationly", "Explorer", "CompuSci", "PhoenixSoft", "WonderKid"], true);
const filterProductCompuSci = Model.positiveAttributeFilter('label.product.id.name', ["CompuSci"], true);
const filterProductExplorerGrammarPlus = Model.positiveAttributeFilter('label.product.id.name', ["Explorer", "Grammar Plus"], true);
const filterProductTouchAll = Model.positiveAttributeFilter('label.product.id.name', ["TouchAll"], true);
const filterProductNegative = Model.negativeAttributeFilter('label.product.id.name', ["TouchAll", "PhoenixSoft"], true);
const filterStageNameNegative = Model.negativeAttributeFilter(`/gdc/md/${projectId}/obj/1805`, [`/gdc/md/${projectId}/obj/1095/elements?id=966649`]);
const filterStageName = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/1805`, [
    `/gdc/md/${projectId}/obj/1095/elements?id=966643`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966644`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966645`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966646`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966647`,
    `/gdc/md/${projectId}/obj/1095/elements?id=966648`,
    `/gdc/md/${projectId}/obj/1095/elements?id=1251`]);
const filterStageNameInterest = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/1805`, ["Interest"], true);
const filterStageNameInterestShortList = Model.positiveAttributeFilter(`/gdc/md/${projectId}/obj/1805`, ["Interest", "Short List"], true);
const filterDepartment = Model.positiveAttributeFilter('label.owner.department', ["Direct Sales"], true);
const relativeDateYearSnapshot = Model.relativeDateFilter('snapshot.dataset.dt', 'GDC.time.year', -1, -1);
const filterFirstName = Model.positiveAttributeFilter('label.persons.firstname', ["Anh", "Bao", "Cuong"], true);
const filterFirstNameAnh = Model.positiveAttributeFilter('label.persons.firstname', ["Anh"], true);
const absoluteDate = Model.absoluteDateFilter('closed.dataset.dt', '2010-01-01', '2010-06-30');
const relativeDateYear = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.year', -8, -8);
const relativeDateMonth = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.month', -100, 12);
const relativeDateQuater = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.quarter', -50, -4);
const relativeDateWeek = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.week', -500, -1);
const relativeDateWeekUs = Model.relativeDateFilter('closed.dataset.dt', 'GDC.time.week_us', -500, -1);

const absoluteYearSnapshot = Model.absoluteDateFilter('snapshot.dataset.dt', '2011-01-01', '2011-06-30');
const relativeYearSnapshot = Model.relativeDateFilter('snapshot.dataset.dt', 'GDC.time.year', -8, 0);

const m_ActivityRestricted = Model.measure(`/gdc/md/${projectId}/obj/1253`).localIdentifier('ActivityRestricted').aggregation('sum');
const m_AmountNullFormat = Model.measure(`/gdc/md/${projectId}/obj/1279`)
    .localIdentifier('AmountNullFormat')
    .format('[=null]trống; #,##0.00;');
const m_AmountNegative = Model.measure(`/gdc/md/${projectId}/obj/76156`).localIdentifier("AmountNegative");
const m_AmountRatio = Model.measure(`/gdc/md/${projectId}/obj/1279`)
    .localIdentifier('AmountRatio')
    .ratio()
    .aggregation('sum');

const m_SumDayToCloseRatio = Model.measure(`/gdc/md/${projectId}/obj/1146`)
    .localIdentifier('SumDayToCloseRatio')
    .ratio()
    .title('<button>Sum days to close</button>')
    .aggregation('sum')
    .filters(filterProduct)
    ;

const m_SumDayToClose = Model.measure(`/gdc/md/${projectId}/obj/1146`)
    .format('[>=100000][color=2190c0]█████ #,##0; [>=50000][color=2190c0]████░ #,##0; [>=30000][color=2190c0]███░░ #,##0; [>=20000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;')
    .localIdentifier('SumDayToClose')
    .title('<button>Sum days to close</button>')
    .aggregation('sum')
    //.filters(filterProduct)
    ;

const m_POP_SumDayToClose = Model.popMeasure('SumDayToClose', `/gdc/md/${projectId}/obj/323`)
    .localIdentifier('POP_SumDayToClose')
    .alias('POP SumDayToClose');

const m_PP_SumDayToClose = Model.previousPeriodMeasure('SumDayToClose', [{ dataSet: `/gdc/md/${projectId}/obj/330`, periodsAgo: 1 }])
    .localIdentifier('PP_SumDayToClose')
    .alias('PP SumDayToClose');

//M1: _Closed [BOP], M2: _Snapshot [BOP]
const m_Sum_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'sum');
const m_Change_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'change').localIdentifier('ChangeClosedBOPSnapshotBOP');
const m_Difference_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'difference');
const m_Ratio_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'ratio');
const m_Multiplication_ClosedBOP_SnapshotBOP = Model.arithmeticMeasure(['ClosedBOP', 'SnapshotBOP'], 'multiplication');

const m_MinPaid = Model.measure('fact.persons.paid')
    .localIdentifier('MinPaid')
    .title('Min of Paid')
    .aggregation('min');

const m_SumSalary = Model.measure('fact.persons.salary')
    .localIdentifier('SumSalary')
    .title('Sum of Salary')
    .aggregation('sum');

const m_OppFirstSnapshot = Model.measure(`/gdc/md/${projectId}/obj/9381`).localIdentifier('OppFirstSnapshot');
const m_SnapshotEOP = Model.measure(`/gdc/md/${projectId}/obj/1275`).localIdentifier('SnapshotEOP');
const m_OpenOpps = Model.measure(`/gdc/md/${projectId}/obj/13465`).localIdentifier('OpenOpps');
const m_CountStageHistory = Model.measure(`/gdc/md/${projectId}/obj/1174`)
    .aggregation('count')
    .localIdentifier('CountStageHistory');
const m_changeOfOpenOppsAndCountStageHistory = Model.arithmeticMeasure(['CountStageHistory', 'OpenOpps'], 'change')
    .localIdentifier('changeOfOpenOppsAndCountStageHistory')
    .title('<button>change Of OpenOpps & CountStageHistory</button> ~!@#$%^&*()_+`-=[]\{}|;:",./<>?');
const m_ratioOfOpenOppsAndCountStageHistory = Model.arithmeticMeasure(['CountStageHistory', 'OpenOpps'], 'ratio')
    .localIdentifier('ratioOfOpenOppsAndCountStageHistory');
const m_CountStageHistoryRatio = Model.measure(`/gdc/md/${projectId}/obj/1174`)
    .aggregation('count')
    .ratio()
    .localIdentifier('CountStageHistoryWithRatio');
const m_Amount = Model.measure(`/gdc/md/${projectId}/obj/1279`).localIdentifier('Amount');
const m_AmountDuplicate = Model.measure(`/gdc/md/${projectId}/obj/1279`).localIdentifier('AmountDuplicate');
const m_ClosedEOP = Model.measure(`/gdc/md/${projectId}/obj/9203`).localIdentifier('ClosedEOP');
const m_ClosedBOP = Model.measure(`/gdc/md/${projectId}/obj/9211`).localIdentifier('ClosedBOP');
const m_CountProduct = Model.measure(`/gdc/md/${projectId}/obj/949`)
    .localIdentifier('CountProduct')
    .title('<button>Count Product</button>')
    .aggregation('count')
    ;
const m_MinAmount = Model.measure(`/gdc/md/${projectId}/obj/1144`)
    .localIdentifier('MinAmount')
    .title('<button>Min Amount</button>')
    .aggregation('min')
    ;
const m_SnapshotBOP = Model.measure(`/gdc/md/${projectId}/obj/2723`).localIdentifier('SnapshotBOP');

const m_AmountBOP = Model.measure(`/gdc/md/${projectId}/obj/2858`).localIdentifier('AmountBOP');
const m_AvgAmount = Model.measure(`/gdc/md/${projectId}/obj/62827`);
const m_AvgWon = Model.measure(`/gdc/md/${projectId}/obj/1281`);

const a_Account = Model.attribute(`/gdc/md/${projectId}/obj/969`);
const a_Activity = Model.attribute(`/gdc/md/${projectId}/obj/1254`);
const a_Product = Model.attribute('label.product.id.name').localIdentifier('ProductName');
//const CompuSci = Model.attribute([`/gdc/md/${projectId}/obj/949/elements?id=168279`]);
const a_StageName = Model.attribute('label.stage.name.stagename').localIdentifier('StageName');
const a_Department = Model.attribute('label.owner.department').localIdentifier('Department');
const a_FirstName = Model.attribute('label.persons.firstname').localIdentifier('Firstname');
const a_Lastname = Model.attribute('label.persons.lastname').localIdentifier('Lastname');
const a_Address = Model.attribute('label.persons.address').localIdentifier('Address');
const a_StartFrom = Model.attribute('startfrom.aag81lMifn6q').localIdentifier('YearStartFrom');
const a_YearClosed = Model.attribute('closed.aag81lMifn6q').localIdentifier('YearClosed');
const a_YearSnapshot = Model.attribute('snapshot.aag81lMifn6q').localIdentifier('YearSnapshot');


const filterAmount_GreaterThan = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 5000000
            }
        }
    }
};

const filterAmount_GreaterThan_samevalue = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 5000000
            }
        }
    }
};

const filterAmount_GreaterThan_differencevalue = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 1000000
            }
        }
    }
};

const filterAmount_LessThan = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            comparison: {
                operator: "LESS_THAN",
                value: 1000000
            }
        }
    }
};

const filterChange_EqualTo = {
    measureValueFilter: {
        measure: {
            localIdentifier: "ChangeClosedBOPSnapshotBOP"
        },
        condition: {
            comparison: {
                operator: "EQUAL_TO",
                value: -1
            }
        }
    }
};

const filterAmountNegative_NotEqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "AmountNegative"
        },
        condition: {
            range: {
                operator: "NOT_EQUAL_TO",
                value: 57025
            }
        }
    }
};

const filterAmount_NotBetween = {
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            range: {
                operator: "NOT_BETWEEN",
                from: 0,
                to: 20000000
            }
        }

    }
};

const filterAmountRatio_GreaterThan =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "AmountRatio"
        },
        condition: {
            comparison: {
                operator: "GREATER_THAN",
                value: 5000000
            }
        }
    }
};
const filterAmountRatio_LessThan =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "AmountRatio"
        },
        condition: {
            comparison: {
                operator: "LESS_THAN",
                value: 50000000
            }
        }
    }
};

const filterPOPSumDayToClose_Between =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "POP_SumDayToClose"
        },
        condition: {
            range: {
                operator: "BETWEEN",
                from: 20000,
                to: 100000
            }
        }
    }
};
const filterAmountNullFormat_GreaterThanOrEqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "Amount"
        },
        condition: {
            range: {
                operator: "GREATER_THAN_OR_EQUAL_TO",
                value: 5000000
            }
        }
    }
};
const filterActivityRestricted_LessThanOrEqualTo =
{
    measureValueFilter: {
        measure: {
            localIdentifier: "ActivityRestricted"
        },
        condition: {
            range: {
                operator: "LESS_THAN_OR_EQUAL_TO",
                value: 5000000
            }
        }
    }
};
const s_sortbyStageNameTotal =
{
    attributeSortItem: {
        direction: 'desc',
        attributeIdentifier: 'StageName',
        aggregation: 'sum'
    }
};

const s_sortbyProductTotal =
{
    attributeSortItem: {
        direction: 'desc',
        attributeIdentifier: 'ProductName',
        aggregation: 'sum'
    }
};
const s_sortonPivotTable = [
    {
      attributeSortItem: {
        attributeIdentifier: 'ProductName',
        direction: 'desc'
      }
    }
  ];

const t_totalsPivotTable =
{
    measureIdentifier: 'Amount',
    type: 'avg',
    attributeIdentifier: 'StageName'
};

//Set protected attribute
const a_Opportunity = Model.attribute('label.opportunity.id.name').localIdentifier('Opportunity');
//Set masked for attribute
const a_Priority = Model.attribute('label.activity.priority').localIdentifier('Priority ');

const s_sortByClosedBOPDescWithDepartment = Model.measureSortItem('ClosedBOP','desc')
.attributeLocators({
    attributeIdentifier: 'Department',
    element: `/gdc/md/${projectId}/obj/1026/elements?id=1226`
});

const s_sortByClosedBOPDesc = Model.measureSortItem('ClosedBOP','desc');
const s_sortByYearClosed = Model.attributeSortItem('YearClosed','asc');
const s_sortByYearClosedSumClosedBOP = {
    attributeSortItem: {
        direction: 'desc',   // or 'desc',
        attributeIdentifier: 'StageName',
        aggregation: 'avg' // Optional;
    }
};

export default {
    projectId,
    filterProduct,
    filterProductNegative,
    filterProductCompuSci,
    filterProductTouchAll,
    filterStageName,
    filterStageNameNegative,
    filterStageNameInterest,
    filterFirstName,
    filterFirstNameAnh,
    filterDepartment,
    filterStageNameInterestShortList,
    filterProductExplorerGrammarPlus,
    filterAmount_LessThan,
    filterAmountRatio_LessThan,
    filterAmount_GreaterThan_samevalue,
    filterAmount_GreaterThan_differencevalue,
    filterAmount_GreaterThan,
    filterAmountRatio_GreaterThan,
    filterPOPSumDayToClose_Between,
    filterChange_EqualTo,
    filterAmount_NotBetween,
    filterAmountNegative_NotEqualTo,
    filterAmountNullFormat_GreaterThanOrEqualTo,
    filterActivityRestricted_LessThanOrEqualTo,
    absoluteDate,
    absoluteYearSnapshot,
    relativeYearSnapshot,
    relativeDateYear,
    relativeDateQuater,
    relativeDateWeek,
    relativeDateWeekUs,
    relativeDateMonth,
    relativeDateYearSnapshot,
    m_AmountBOP,
    m_AvgAmount,
    m_AvgWon,
    m_SumDayToCloseRatio,
    m_SumDayToClose,
    m_Change_ClosedBOP_SnapshotBOP,
    m_Difference_ClosedBOP_SnapshotBOP,
    m_Multiplication_ClosedBOP_SnapshotBOP,
    m_POP_SumDayToClose,
    m_PP_SumDayToClose,
    m_Ratio_ClosedBOP_SnapshotBOP,
    m_Sum_ClosedBOP_SnapshotBOP,
    m_MinPaid,
    m_SumSalary,
    m_OppFirstSnapshot,
    m_SnapshotEOP,
    m_SnapshotBOP,
    m_OpenOpps,
    m_CountStageHistory,
    m_changeOfOpenOppsAndCountStageHistory,
    m_ratioOfOpenOppsAndCountStageHistory,
    m_CountStageHistoryRatio,
    m_Amount,
    m_ClosedEOP,
    m_ClosedBOP,
    m_CountProduct,
    m_MinAmount,
    a_Account,
    a_Activity,
    a_Address,
    a_Department,
    a_FirstName,
    a_Lastname,
    a_Product,
    a_StageName,
    a_StartFrom,
    a_YearClosed,
    a_YearSnapshot,
    m_AmountRatio,
    m_AmountNegative,
    m_AmountNullFormat,
    m_ActivityRestricted,
    m_AmountDuplicate,
    t_totalsPivotTable,
	a_Opportunity,
    a_Priority,
    s_sortByClosedBOPDesc,
    s_sortbyStageNameTotal,
    s_sortbyProductTotal,
    s_sortonPivotTable,
    s_sortByClosedBOPDescWithDepartment,
    s_sortByYearClosed,
    s_sortByYearClosedSumClosedBOP
};
