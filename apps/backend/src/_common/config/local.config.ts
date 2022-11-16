export const getEnv = () => {
	// console.log(import.meta);
	return {
		PORT: parseInt(process.env.PORT || "3333"),
		NODE_ENV: process.env.NODE_ENV || "development",
		SERVER: process.env.SERVER || "webpack",
		MONGO_DB: process.env.MONGO_DB,
		FB_APP_ID: process.env.FB_APP_ID,
		FB_APP_SECRET: process.env.FB_APP_SECRETa,
		DATABASE_URL: process.env.DATABASE_URL,
		// database: {
		// 	host: process.env.DATABASE_HOST,
		// 	port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
		// },
	};
};
