const baseColors = {
  c1: '#2E3545',
  c2: '#838893',
  c3: '#F5F6F8',
  c4: '#252F40',
  c5: '#9CA2AF',
  c6: '#FFFFFF',
  c7: '#161E2F',
  c8: '#E0E3E7',
  c9: '#FBAA22',
  c10: '#3B99FC',
  c11: '#D8D8D8',
  c12: '#52575C',
  c13: '#AEB3BD',
  c14: '#4E47EA',
  c15: '#55BFCA',
  c16: '#021E53',
  c17: '#FAFBFB',
  c18: '#ECECEC',
  c19: '#6B7281',
  c20: '#E11529',
  c21: '#00BA85',
  c22: '#D1D5DB'
}

const namedColors = {
  mainText: baseColors.c1,
  secondaryText: baseColors.c2,
  background: baseColors.c3
}

export default {
  ...baseColors,
  ...namedColors
}
