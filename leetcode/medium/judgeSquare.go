package medium

import "math"

func judgeSquareSum(c int) bool {
	bound := math.Sqrt(float64(c / 2))
	for a := 0; a <= int(bound); a++ {
		if (c - a*a) == int(math.Sqrt(float64(c-a*a)))*int(math.Sqrt(float64(c-a*a))) {
			return true
		}
	}
	return false
}
