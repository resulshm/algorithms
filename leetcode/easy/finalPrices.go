package easy

type Stack []int

func NewStack() Stack {
	return Stack{}
}

func (s Stack) Top() int {
	return s[len(s)-1]
}

func (s *Stack) Pop() {
	*s = (*s)[:len(*s)-1]
}

func (s *Stack) Push(num int) {
	*s = append(*s, num)
}

func finalPrices(prices []int) []int {
	answer := make([]int, len(prices))
	stack := NewStack()
	for i := len(prices) - 1; 0 <= i; i-- {
		for len(stack) > 0 && stack.Top() > prices[i] {
			stack.Pop()
		}

		if len(stack) == 0 {
			answer[i] = prices[i]
		} else {
			answer[i] = prices[i] - stack.Top()
		}
		stack.Push(prices[i])
	}
	return answer
}
