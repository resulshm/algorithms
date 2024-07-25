package easy

import "sort"

/*
	1380. Lucky Numbers in a Matrix

	Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.



Example 1:
Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 2:
Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 3:
Input: matrix = [[7,8],[1,2]]
Output: [7]
Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.


Constraints:
m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 105.
All elements in the matrix are distinct.

*/

func luckyNumbers(matrix [][]int) []int {
	minInRows, maxInColumns := make([]int, len(matrix)), make([]int, len(matrix[0]))

	for row := range matrix {
		for column := range matrix[row] {
			element := matrix[row][column]
			if minInRows[row] > element || minInRows[row] == 0 {
				minInRows[row] = element
			}
			if maxInColumns[column] < element {
				maxInColumns[column] = element
			}
		}
	}

	sort.Ints(minInRows)
	sort.Ints(maxInColumns)
	ans := make([]int, 0)
	i, j := 0, 0

	for i < len(minInRows) && j < len(maxInColumns) {
		if minInRows[i] == maxInColumns[j] {
			ans = append(ans, minInRows[i])
			i++
			j++
			continue
		}
		if minInRows[i] > maxInColumns[j] {
			j++
			continue
		}
		i++
	}

	return ans
}
