#Team Trio: Puneet Johal, Joyce Liao, Hui Min Wu
#SoftDev2 pd8
#K20 --
#2019-04-17

f = open('alice.txt', 'r')
s = f.read()
f.close()
lines = s.split('\r\n')
words = []
for line in lines:
    x = line.split(' ')
    for elem in x:
        if elem != '':
            words.append(elem)

def freq(word):
    retList = [a for a in words if a == word]
    return len(retList)

print(freq('Alice'))

def freqGroup():
