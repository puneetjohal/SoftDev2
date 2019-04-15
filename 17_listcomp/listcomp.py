#Team J^2: Puneet Johal and Joyce Liao
#SoftDev2 pd8
#K17 -- PPFTLCW
#2019-04-12

#1a
oneA = []
for i in range(5):
    oneA.append(i*22)
print(oneA)

#1b
oneB = [x*22 for x in range(5)]
print(oneB)

#2a
twoA = []
for i in range(5):
    twoA.append(i*10+7)
print(twoA)

#2b
twoB = [x*10+7 for x in range(5)]
print(twoB)

#3a
cheat = '000012024'
threeA = []
for c in cheat:
    threeA.append(int(c))
print(threeA)

#3b
threeB = [int(c) for c in cheat]
print(threeB)

#6a
def divisorsLoopy(x):
    retList = []
    for i in range(1,x+1):
        if x%i == 0:
            retList.append(i)
    return retList
print(divisorsLoopy(36))

#6b
def divisorsListcompy(x):
    return [i for i in range(1,x+1) if x%i == 0]
print(divisorsListcompy(36))

#4a
fourA = []
for i in range(101):
    if i==0 or i==1:
        pass
    isComposite = False
    for x in range(2,i):
        if i%x == 0:
            isComposite = True
            break
    if isComposite:
        fourA.append(i)
print(fourA)

#4b
fourB = [i for i in range(2,101) if len(divisorsLoopy(i)) > 2]
print(fourB)

#5a
fiveA = []
for i in range(2,101):
    #if i==0 or i==1:
    #    pass
    isPrime = True
    for x in range(2, i):
        if i%x == 0:
            isPrime = False
            break
    if isPrime:
        fiveA.append(i)
print(fiveA)

#5b
fiveB = [i for i in range(2,101) if len(divisorsLoopy(i)) == 2]
print(fiveB)

#7a
def transposeLoopy(m):
    return 1

#7b
def transposeListcompy(m):
    return 1
