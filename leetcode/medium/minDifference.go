package medium

import "sort"

func minDifference(nums []int) int {
	l := len(nums)
	if l <= 4 {
		return 0
	}

	sort.Ints(nums)
	mindiffs := []int{
		nums[l-1] - nums[3],
		nums[l-2] - nums[2],
		nums[l-3] - nums[1],
		nums[l-4] - nums[0],
	}

	min := mindiffs[0]
	for _, d := range mindiffs {
		if min >= d {
			min = d
		}
	}

	return min
}
