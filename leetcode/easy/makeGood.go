package easy

import "strings"

/*
 1544. Make The String Great

Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
  - 0 <= i <= s.length - 2
  - s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.

To make the string good, you can choose two adjacent characters that make the string bad and remove them.
You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.

Example 1:
Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

Example 2:
Input: s = "abBAcC"
Output: ""
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""

Example 3:
Input: s = "s"
Output: "s"

Constraints:
  - 1 <= s.length <= 100
  - s contains only lower and upper case English letters.
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

func makeGood(s string) string {
	stack := stackString{}

	for _, c := range s {
		if stack.isEmpty() {
			stack.push(string(c))
			continue
		}
		last := stack.lastItem()
		if last != string(c) && (strings.ToLower(string(c)) == last || strings.ToUpper(string(c)) == last) {
			stack.pop()
			continue
		}
		stack.push(string(c))
	}

	return strings.Join(stack.items, "")
}
