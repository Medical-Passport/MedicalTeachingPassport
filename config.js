var config = {
        development: {
                //mongodb connection settings
                database: {
                        user: 'fake',
                        pass: '1234',
                        cluster: 'site_dev',
                        dbname: 'test',
                },
                //server details
                server: {
                        host: '127.0.0.1',
                        port: '3000'
                }
        },
        production: {
                //mongodb connection settings
                database: {
                        user: 'fake',
                        pass: '1234',
                        cluster: 'site_dev',
                        dbname: 'test',
                },
                //server details
                server: {
                        host: '127.0.0.1',
                        port: '3000'
                }
        }
};

module.exports = config;

// import this module and construct the uri as shown below:
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://user:pass@cluster.mongodb.net/dbname?w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//  const collection = client.db("dbname").collection("devices");
//  perform actions on the collection object
//  client.close();
// });