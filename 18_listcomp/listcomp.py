#Puneet Johal
#SoftDev2 pd8
#K18 -- Getting Clever with List Comprehensions
#2019-04-15

def pTriples(n):
  return [[x,y,z] for x in range(1,n) for y in range(1,n) for z in range(1,n) if x**2 + y**2 == z**2]
print(pTriples(27))


def qSort(l):
    if len(l) == 0 or len(l) == 1:
        return l
    pivot = int(len(l)/2) - 1
    smaller = [x for x in l if x < l[pivot]]
    larger = [x for x in l if x > l[pivot]]
    return qSort(smaller) + [l[pivot]] + qSort(larger)
testList = [7,3,5,8,2,4,1,9,6]
print(qSort(testList))
