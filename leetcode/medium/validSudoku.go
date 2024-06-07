package medium

func isValidSudoku(board [][]byte) bool {
	rows := make([]map[byte]bool, 9)
	columns := make([]map[byte]bool, 9)
	for i := 0; i < 9; i++ {
		rows[i], columns[i] = make(map[byte]bool), make(map[byte]bool)
	}
	cells := make([][]map[byte]bool, 3)
	for cell := range cells {
		cells[cell] = make([]map[byte]bool, 9)
		for i := 0; i < 9; i++ {
			cells[cell][i] = make(map[byte]bool)
		}
	}

	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			elem := board[i][j]
			if elem != '.' {
				if rows[i][elem] {
					return false
				}

				if columns[j][elem] {
					return false
				}

				if cells[int(i/3)][int(j/3)][elem] {
					return false
				}
				rows[i][elem] = true
				columns[j][elem] = true
				cells[int(i/3)][int(j/3)][elem] = true
			}
		}
	}
	return true
}
