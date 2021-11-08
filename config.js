const config = {
    // urlDataBase: process.env.URL || 'mongodb://localhost:27017/running',
    urlDataBase: process.env.URL || 'mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=rs0',
    db: process.env.Db || 'running'
};

export default config;