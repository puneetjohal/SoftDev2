#Puneet Johal
#SoftDev2 pd8
#K23 -- Memoize
#2019-05-01

import random

# def make_HTML_heading(f):
#   txt = f()
#   def inner():
#     return '<h1>' + txt + '</h1>'
#   return inner
#
# # VERSION 1
# # def greet():
# #   greetings = ['Hello','Welcome','Ayo','Hola','Bonjour','Word up']
# #   return random.choice(greetings)
# #
# # greet_heading = make_HTML_heading( greet )
# # print(greet_heading())
#
# # PYTHONIC DECORATOR
# # equiv to make_HTML_heading( greet )
# @make_HTML_heading
# def greet():
#   greetings = ['Hello','Welcome','Ayo','Hola','Bonjour','Word up']
#   return random.choice(greetings)
#
# print(greet())

# Memoize
def memoize(f):
    memo = {}
    def helper(x):
        nonlocal memo
        if x in memo:
            return memo[x]
        else:
            memo[x] = f(x)
            return memo[x]
    return helper

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)



memfib = memoize(fib)
print(memfib(4))
