// (C) 2007-2019 GoodData Corporation
import { Heatmap, IHeatmapProps } from "@gooddata/sdk-ui";
import { scenariosFor } from "../../../src";
import { dataLabelCustomizer } from "../_infra/dataLabelVariants";
import { legendCustomizer } from "../_infra/legendVariants";
import { HeatmapWithMeasureRowsAndColumns } from "./base";

const legendScenarios = scenariosFor<IHeatmapProps>("Heatmap", Heatmap)
    .withVisualTestConfig({ groupUnder: "legend position" })
    .withDefaultTags("vis-config-only", "mock-no-scenario-meta")
    .addScenarios("", HeatmapWithMeasureRowsAndColumns, legendCustomizer);

const dataLabelScenarios = scenariosFor<IHeatmapProps>("Heatmap", Heatmap)
    .withVisualTestConfig({ groupUnder: "data labels" })
    .withDefaultTags("vis-config-only", "mock-no-scenario-meta")
    .addScenarios("", HeatmapWithMeasureRowsAndColumns, dataLabelCustomizer);

export default [legendScenarios, dataLabelScenarios];