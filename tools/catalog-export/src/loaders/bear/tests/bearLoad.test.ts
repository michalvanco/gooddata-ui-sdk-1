// (C) 2007-2020 GoodData Corporation
import { bearLoad } from "../bearLoad";

jest.mock("@gooddata/api-client-bear");

describe("loadProjectMetadata", () => {
    it("should transfer project ID", async () => {
        const result = await bearLoad("test");

        expect(result.projectId).toEqual("test");
    });

    it("should load ldm", async () => {
        const result = await bearLoad("test");

        expect(result.catalog).toMatchSnapshot();
    });

    it("should load date data sets", async () => {
        const result = await bearLoad("test");

        expect(result.dateDataSets).toMatchSnapshot();
    });

    it("should load visualizations", async () => {
        const result = await bearLoad("test");

        expect(result.insights).toMatchSnapshot();
    });
});
