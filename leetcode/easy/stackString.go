package easy

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
