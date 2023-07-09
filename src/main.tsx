import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./app.tsx";
import { Notification } from "./components/notification/notification.tsx";
import "./reset.scss";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Notification>
			<App />
		</Notification>
	</React.StrictMode>
);
