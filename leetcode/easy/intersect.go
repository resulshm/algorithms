package easy

func intersect(nums1 []int, nums2 []int) []int {
	num1Count := make(map[int]int)
	for _, num := range nums1 {
		num1Count[num]++
	}

	ans := make([]int, 0)
	for _, num := range nums2 {
		if num1Count[num] > 0 {
			ans = append(ans, num)
			num1Count[num]--
		}
	}

	return ans
}
