import jsonServerProvider from "ra-data-json-server";
import attrs from "./attrs";

export const mockDataServer = jsonServerProvider(attrs.url.server);
