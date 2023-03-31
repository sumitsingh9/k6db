
# Hosting MongoDB database locally

1. Install MongoDB and MongoDB Compass on our system.
2. Open MongoDB Compass and connect using the connection string:  `mongodb://localhost:27017` to setup database locally.
3. In Compass we can create our database and collections manually using GUI.
4. Inside Code we use the same connection string followed by our db name. Like `mongodb://localhost:27017/myDB`.
5. `npm install mongoose` dependency for giving structure to our documents. It also makes it easy to work with mongodb.
6.  We can connect to our local database using `mongooose.connect('mongodb://localhost:27017/myDB')` function.