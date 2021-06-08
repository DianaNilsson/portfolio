export default (_context, inject) => {
  inject('numberToWordString', (number) => {
    switch (number) {
      case 0:
        return 'noll'
      case 1:
        return 'ett'
      case 2:
        return 'två'
      case 3:
        return 'tre'
      case 4:
        return 'fyra'
      case 5:
        return 'fem'
      case 6:
        return 'sex'
      case 7:
        return 'sju'
      case 8:
        return 'åtta'
      case 9:
        return 'nio'
      case 10:
        return 'tio'
      case 11:
        return 'elva'
      case 12:
        return 'tolv'
      default:
        return String(number)
    }
  })
}
