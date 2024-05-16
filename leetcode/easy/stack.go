package easy

type StackString struct {
	items []string
}

func (s *StackString) Push(item string) {
	s.items = append(s.items, item)
}

func (s *StackString) Pop() {
	if len(s.items) == 0 {
		return
	}

	s.items = s.items[:len(s.items)-1]
}

func (s *StackString) IsEmpty() bool {
	return len(s.items) == 0
}

func (s *StackString) LastItem() string {
	if s.IsEmpty() {
		return ""
	}
	return s.items[len(s.items)-1]
}
