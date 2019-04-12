#1
#a
oneA = []
for i in range(5):
    oneA.append(i*22)
print(oneA)

#b
oneB = [x*22 for x in range(5)]
print(oneB)

#2
#a
twoA = []
for i in range(5):
    twoA.append(i*10+7)
print(twoA)

#b
twoB = [x*10+7 for x in range(5)]
print(twoB)

#3
#a
cheat = '000012024'
threeA = []
for c in cheat:
    threeA.append(int(c))
print(threeA)

#b
threeB = [int(c) for c in cheat]
print(threeB)

#4
#a
# fourA = []
# for i in range(101):
#     if i%2 == 0:
#         fourA.append(i)
#     else:
#         # for j in range(3,)

#5
#a
fiveA = []
for i in range(101):
    isPrime = True
    for x in range(2, i):
        if i%x == 0:
            isPrime = False
            break
    if isPrime:
        fiveA.append(i)
print(fiveA)

#b
def has_factors(num):
    for x in range(2,num):
        if num%x ==0:
            return True
    return False
fiveB = [i for i in range(101) if not has_factors(i)]
print(fiveB)
