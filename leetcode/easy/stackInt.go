package easy

type stackInt struct {
	items []int
}

func (s *stackInt) push(item int) {
	s.items = append(s.items, item)
}

func (s *stackInt) pop() {
	if len(s.items) == 0 {
		return
	}

	s.items = s.items[:len(s.items)-1]
}

func (s *stackInt) isEmpty() bool {
	return len(s.items) == 0
}

func (s *stackInt) lastItem() int {
	if s.isEmpty() {
		return -1
	}
	return s.items[len(s.items)-1]
}
