package easy

/*
	1021. Remove Outermost Parentheses

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B,
with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.



Example 1:
Input: s = "(()())(())"
Output: "()()()"
Explanation:
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:
Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation:
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:
Input: s = "()()"
Output: ""
Explanation:
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".


Constraints:

- 1 <= s.length <= 105
- s[i] is either '(' or ')'.
- s is a valid parentheses string.
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

func removeOuterParentheses(s string) string {
	ans := ""
	primitive := ""
	stack := stackString{}
	for _, c := range s {
		primitive += string(c)
		if c == '(' {
			stack.push("(")
		} else {
			stack.pop()
		}
		if stack.isEmpty() {
			ans += primitive[1 : len(primitive)-1]
			primitive = ""
		}
	}
	return ans
}
