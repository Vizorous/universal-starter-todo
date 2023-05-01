import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";

import React from "react";
import { TemplateTypes } from "../TemplateTypes";
import Integrations from "../../Integrations/Integrations";

describe("Dashboard Templates", () => {
	it("Title testing", () => {
		render(<TemplateTypes setTemplateType={undefined} />);
		expect(screen.getByRole("heading")).toHaveTextContent("Dashboard Templates");
	});
});

const defaultComponent = <Integrations />;

describe("label testing", () => {
	it("should have correct label", () => {
		render(<Integrations />);
		expect(screen.getByText("Facebook Ads")).toBeInTheDocument;
		// expect(screen.getByText("Facebook Insiqhts")).toBeInTheDocument;
		expect(screen.getByText("Twitter")).toBeInTheDocument;
		expect(screen.getByText("Custom Data Source")).toBeInTheDocument;
	});
});
