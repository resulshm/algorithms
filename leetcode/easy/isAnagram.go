package easy

/*
	242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.



Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false


Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	letterCount := make(map[byte]int)
	for i := 0; i < len(s); i++ {
		letterCount[s[i]]++
	}

	for i := 0; i < len(t); i++ {
		if letterCount[t[i]] == 0 {
			return false
		}
		letterCount[t[i]]--
	}

	return true
}
