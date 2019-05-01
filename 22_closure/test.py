def inc(x):
  return x + 1

f = inc

print(f(10))

def adder(a,b):
    return a+b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)

def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)
print(contains_15([1,2,3,4,5]))
print(contains_15([13,14,15,16]))
print(contains_15(range(1,20)))

#A closure remembers the context in which it was created
print(outer(42))
del outer
#print(outer(42))
print(contains_15(range(14,20)))

#TASK
def repeat(word):
    def inner(x):
        return word*x
    return inner

repeatHello = repeat("hello")
repeatGB = repeat("goodbye")
print(repeatHello(2))
print(repeatGB(3))

# def outside():
#     x="foo"
#     def inside():
#         x="bar"
#     inside()
#     return x
#
# print(outside())

def outside():
    x="foo"
    def inside():
        nonlocal x
        x="bar"
    inside()
    return x

print(outside())

def make_counter():
    x = 0
    def inner():
        nonlocal x
        x = x+1
        return x
    return inner

ctr1 = make_counter()
print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
