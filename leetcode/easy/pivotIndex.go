package easy

func pivotIndex(nums []int) int {
	leftSums := make([]int, len(nums))
	currentLeftSum := 0
	for i := 1; i < len(nums); i++ {
		currentLeftSum += nums[i-1]
		leftSums[i] = currentLeftSum
	}
	sum := currentLeftSum + nums[len(nums)-1]
	for i, n := range nums {
		rightSum := sum - n - leftSums[i]
		if rightSum == leftSums[i] {
			return i
		}
	}

	return -1
}
