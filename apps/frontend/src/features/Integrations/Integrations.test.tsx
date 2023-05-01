import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";

import React from "react";
import Integrations from "./Integrations";

describe("Dashboard Templates", () => {
	it("Title testing", () => {
		render(<Integrations />);
		expect(screen.getByText("Integrations")).toBeInTheDocument();
	});
});
