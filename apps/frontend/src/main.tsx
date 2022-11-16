import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineColor, MantineProvider, MantineThemeColors } from "@mantine/core";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<StrictMode>
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				colors: {
					aiesec: [
						"#b0d8fe",
						"#91c9fe",
						"#73bafd",
						"#55abfd",
						"#379cfd",
						"#037ef3",
						"#036ed5",
						"#025fb7",
						"#024f98",
						"#023f7a",
					],
					gv: [
						"#fef3f1",
						"#fddad4",
						"#fcc0b6",
						"#fba799",
						"#fa8d7b",
						"#f85a40",
						"#f74122",
						"#f22a09",
						"#d42508",
						"#b72007",
					],
					gt: [
						"#8df3f8",
						"#70f0f6",
						"#53edf4",
						"#36eaf3",
						"#19e7f1",
						"#0cb9c1",
						"#0a9da4",
						"#088287",
						"#07666b",
						"#054b4e",
					],
				},
				primaryColor: "aiesec",
				primaryShade: 5,
				components: {
					Indicator: {
						styles: {
							common: {
								transform: "translate(16px, -50%)",
								padding: "0 8px",
							},
						},
					},
					Button: {
						styles: {
							root: {
								padding: "8px",
							},
						},
					},
				},
			}}
		>
			<App />
		</MantineProvider>
	</StrictMode>
);

