package easy

func reverseVowels(s string) string {
	begin, end := 0, len(s)-1
	sArr := []byte(s)
	for begin < end {
		for !isVowel(sArr[begin]) && begin < end {
			begin++
		}

		for !isVowel(sArr[end]) && begin < end {
			end--
		}

		sArr[begin], sArr[end] = sArr[end], sArr[begin]
		begin++
		end--
	}

	return string(sArr)
}

func isVowel(c byte) bool {
	return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
		c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U'
}
