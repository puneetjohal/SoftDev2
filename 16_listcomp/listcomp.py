p = "myNoobPass1234"
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lc_letters = "abcdefghijklmnopqrstuvwxyz"
sp_chars = ".?!&#,;:-_*"
numeric = "0123456789"

#print ([x for x in p if x in UC_LETTERS]) #N,P
#print ([1 for x in p if x in UC_LETTERS]) #1,1
#print ([1 if x in UC_LETTERS else 0 for x in p]) #0,0,1,0,0,0,1,0,0,0,0,0,0,0

def meetsMin(password):
    uppers = [x for x in password if x in UC_LETTERS]
    lowers = [x for x in password if x in lc_letters]
    nums = [x for x in password if x in numeric]
    if (len(uppers) > 0 and len(lowers) > 0 and len(nums) > 0):
        return True
    else:
        return False

def strengthRating(password):
    uppers = [x for x in password if x in UC_LETTERS]
    lowers = [x for x in password if x in lc_letters]
    specials = [x for x in password if x in sp_chars]
    nums = [x for x in password if x in numeric]
    rating = 0
    if (len(uppers) > 0 and len(lowers) > 0 and len(nums) > 0):
        rating += 1
    if (len(specials) > 0):
        rating += 1
    if (password != 'password123'):
        rating += 1
    if (len(password) > 8):
        rating += 1
    if (len(uppers) > 3):
        rating += 1
    if ((len(uppers) - len(lowers) < 4) and (len(uppers) - len(lowers) > -4)):
        rating += 2
    if (len(specials) > 3):
        rating += 2
    if ((len(uppers) + len (lowers)) == (len(nums) + len(specials))):
        rating += 1
    return rating

print(meetsMin(p))
print(strengthRating(p))
print(strengthRating('passPASS1111!!!!'))
