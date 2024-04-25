package easy

/*
	Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

func isOpenParentheses(s string) bool {
	if s == "(" || s == "{" || s == "[" {
		return true
	}
	return false
}

func isValid(s string) bool {
	parenthesesStack := make([]string, 0)
	for _, c := range s {
		if isOpenParentheses(string(c)) {
			parenthesesStack = append(parenthesesStack, string(c))
			continue
		}
		if len(parenthesesStack) == 0 {
			return false
		}
		switch string(c) {
		case ")":
			if parenthesesStack[len(parenthesesStack)-1] != "(" {
				return false
			}
			parenthesesStack = parenthesesStack[:len(parenthesesStack)-1]
		case "}":
			if parenthesesStack[len(parenthesesStack)-1] != "{" {
				return false
			}
			parenthesesStack = parenthesesStack[:len(parenthesesStack)-1]
		case "]":
			if parenthesesStack[len(parenthesesStack)-1] != "[" {
				return false
			}
			parenthesesStack = parenthesesStack[:len(parenthesesStack)-1]
		default:
		}

	}
	if len(parenthesesStack) > 0 {
		return false
	}
	return true
}
