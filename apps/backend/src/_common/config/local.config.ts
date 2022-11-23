export const getEnv = () => {
	// console.log(import.meta);
	return {
		PORT: parseInt(process.env.PORT || "3333"),
		NODE_ENV: process.env.NODE_ENV || "development",
		SERVER: process.env.SERVER || "webpack",
		DATABASE_USER: process.env.DATABASE_USER || "root",
		DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "root",
		DATABASE_NAME: process.env.DATABASE_NAME || "seamless_analytics",
		FB_APP_ID: process.env.FB_APP_ID,
		FB_APP_SECRET: process.env.FB_APP_SECRET,
		// database: {
		// 	host: process.env.DATABASE_HOST,
		// 	port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
		// },
	};
};
