const config = {
    urlDataBase: process.env.URL || 'mongodb://localhost:27017/running',
    db: process.env.Db || 'running'
};

export default config;