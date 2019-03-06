import pymongo

# set server ip
SERVER_ADDR = 68.183.221.237
# connect to server
connection = pymongo.MongoClient(SERVER_ADDR)
# use db
db = connection.
# select the desired collection
collection = db.restaurant

def restaurantsInBorough(borough):
    print(collection.find({"borough":borough}))

def restaurantsInZip(zip):
    print(collection.find({"address.zipcode":zip}))

def restaurantsInZipWithGrade(zip,grade):
    print(collection.find($and))

def restaurantsInZipWithScoreBelow(zip,threshold):
