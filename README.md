# Ardoq small algorithm before interview:
## 1.Problem statement:
Given a list of integers, create a function that returns the highest product between three of those numbers.  
For example, given the list [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300

## 2.Solution 
### 2.1.Description of the algorithm
The solution could be found in the index.js file,
we will be initializing 3 variables max1, max2 and max3
where max1 > max2 > max3 
- max1 being the biggest number in the array
- max2 being the second-biggest number in the array
- max3 being the third-biggest number in the array
for negative numbers we should consider the case where there exist two negative numbers and their product is bigger than
the product max2*max3 and so these two numbers are the two minimum numbers in the array.
- min1 the smallest number in the array
- min2 the second-smallest number in the array


### 2.2.Algorithm complexity

- Time complexity: O(n)
- Space complexity: O(n)

## 3.Testing

To test our solution we test for the nominal cases and the edge cases.  
You can run tests with docker or your local npm version.  
index.spec.js file contains test cases, and we use jest as testing framework.

### 3.1.Run tests with docker
```shell
git clone https://github.com/MehdiBC/ardoq-small-algo.git;\
cd ardoq-small-algo;\
docker build -t ardoq-test . ;\
docker run -it ardoq-test
```

### 3.2.Run tests with your npm
```shell
git clone https://github.com/MehdiBC/ardoq-small-algo.git;\
cd ardoq-small-algo;\
npm ci;\
npm test
```
