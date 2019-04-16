def pTriples(n):
  return [[x,y,z] for x in range(1,n) for y in range(1,n) for z in range(1,n) if x**2 + y**2 == z**2]
print(pTriples(27))

testList = [3,5,2,4,1]
def qSortLoop(l):
    for i in range(1,len(l)):
        while i!=0 and l[i] < l[i-1]:
            temp = l[i]
            l[i] = l[i-1]
            l[i-1] = temp
            i -= 1
    return l
print(qSortLoop(testList))

def qSort(l):
    return []
