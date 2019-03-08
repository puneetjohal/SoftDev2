import pymongo

# set server ip
SERVER_ADDR = "68.183.221.237"
# connect to server
connection = pymongo.MongoClient(SERVER_ADDR)
# use db
db = connection.data
# select the desired collection
collection = db.restaurant

def restaurantsInBorough(borough):
    for rest in collection.find({"borough":borough}):
        print(rest)

def restaurantsInZip(zip):
    print(collection.find({"address.zipcode":zip}))

def restaurantsInZipWithGrade(zip,grade):
    print(collection.find({"$and": [{"address.zipcode":zip} , {"grade":grade}]}))

def restaurantsInZipWithScoreBelow(zip,threshold):
    print(collection.find({"$and": [{"address.zipcode":zip} , {"score": {"$lt": threshold}}]}))

def restaurantsOnStreet(street):
    print(collection.find({"street":street}))

restaurantsInBorough("Queens")
