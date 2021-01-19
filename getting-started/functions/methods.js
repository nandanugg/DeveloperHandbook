// Methods is a function that lies inside a variable / function

const catName = "bul bul"
catName
  // 👇 method
  .split(" ")

const clothCount = 34
clothCount
  // 👇 method
  .toString()

// in some variables, you can even chain them too!
const userNames = ['wishes212', 'whising342', 'wished3']
userNames
  // 👇 method
  .join()
  // 👇 method chain
  .split(',')
  // 👇 method chain
  .reverse()
