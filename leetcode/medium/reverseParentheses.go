package medium

/*
	1190. Reverse Substrings Between Each Pair of Parentheses

You are given a string s that consists of lower case English letters and brackets.
Reverse the strings in each pair of matching parentheses, starting from the innermost one.
Your result should not contain any brackets.



Example 1:
Input: s = "(abcd)"
Output: "dcba"

Example 2:
Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

Example 3:
Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.


Constraints:
	- 1 <= s.length <= 2000
	- s only contains lower case English characters and parentheses.
	- It is guaranteed that all parentheses are balanced.
*/

func reverseParentheses(s string) string {
	stack := Stack{}
	for _, b := range []byte(s) {
		if b != ')' {
			stack.Push(b)
			continue
		}
		reversed := make([]byte, 0)
		for stack.Peek() != '(' {
			reversed = append(reversed, stack.Peek())
			stack.Pop()
		}
		stack.Pop()
		stack.Push(reversed...)
	}
	return string(stack.elements)
}

type Stack struct {
	elements []byte
}

func (s *Stack) Push(e ...byte) {
	s.elements = append(s.elements, e...)
}

func (s *Stack) Pop() {
	s.elements = s.elements[:len(s.elements)-1]
}

func (s *Stack) Peek() byte {
	return s.elements[len(s.elements)-1]
}
