package easy

import "strings"

/*
	1047. Remove All Adjacent Duplicates In String

You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.



Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay"


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
*/

/*
	type stackString struct {
		items []string
	}

	func (s *stackString) push(item string) {
		s.items = append(s.items, item)
	}

	func (s *stackString) pop() {
		if len(s.items) == 0 {
			return
		}

		s.items = s.items[:len(s.items)-1]
	}

	func (s *stackString) isEmpty() bool {
		return len(s.items) == 0
	}

	func (s *stackString) lastItem() string {
		if s.isEmpty() {
			return ""
		}
		return s.items[len(s.items)-1]
	}
*/

func removeDuplicates(s string) string {
	stack := stackString{}

	for _, c := range s {
		if stack.isEmpty() {
			stack.push(string(c))
			continue
		}

		if stack.lastItem() == string(c) {
			stack.pop()
			continue
		}
		stack.push(string(c))
	}
	return strings.Join(stack.items, "")
}
